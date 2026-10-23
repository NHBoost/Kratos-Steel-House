// Build de production : bundle navigateur + rendu serveur de chaque page en HTML statique,
// puis sitemap.xml, robots.txt et 404.html. Lancer avec `npm run build`.
import { build } from 'vite'
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrOut = join(root, 'dist-ssr')

// HYDRATION_DEBUG=1 npm run build : affiche dans la console les écarts entre HTML pré-rendu et rendu Vue
const define = process.env.HYDRATION_DEBUG ? { __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true' } : {}
await build({ root, logLevel: 'warn', define })
await build({ root, logLevel: 'warn', build: { ssr: 'src/entry-server.js', outDir: ssrOut, emptyOutDir: true } })

const { render, pagesToPrerender, abs } = await import(pathToFileURL(join(ssrOut, 'entry-server.js')).href)
const template = await readFile(join(dist, 'index.html'), 'utf-8')

const fill = (page) => template
  .replace(/<title>[^<]*<\/title>/, page.title)
  .replace('<!--seo-head-->', page.head)
  .replace('<!--app-html-->', page.html)

const indexable = []
for (const url of pagesToPrerender()) {
  const page = await render(url)
  const file = join(dist, page.path, 'index.html')
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, fill(page))
  if (page.indexable) indexable.push(page.canonical)
  if (url === '/fr/') await writeFile(join(dist, 'index.html'), fill(page)) // racine du domaine = accueil (canonical vers /fr/)
}

// 404 : coquille vide, le router renvoie vers l'accueil
await writeFile(join(dist, '404.html'), template.replace('<!--seo-head-->', '<meta name="robots" content="noindex">').replace('<!--app-html-->', ''))

const today = new Date().toISOString().slice(0, 10)
await writeFile(join(dist, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  indexable.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n') + '\n</urlset>\n')
await writeFile(join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /fr/merci/\n\nSitemap: ${abs('/sitemap.xml')}\n`)

await rm(ssrOut, { recursive: true, force: true })
console.log(`${pagesToPrerender().length} pages pré-rendues, ${indexable.length} dans le sitemap`)
