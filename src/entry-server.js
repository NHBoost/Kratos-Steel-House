import { createMemoryHistory } from 'vue-router'
import { renderToString } from 'vue/server-renderer'
import { createKratosApp } from './app.js'
import { seoFor, headTags, titleTag } from './seo.js'
import { SERVICES, PROJECTS, ARTICLES } from './data/content.js'
import { P, abs } from './paths.js'

// Pages publiques à pré-rendre (la page « merci » dépend d'un formulaire envoyé : non pré-rendue)
export function pagesToPrerender() {
  return [
    P.home, P.entreprise, P.services, P.realisations, P.zones, P.devis, P.contact, P.faq, P.plan,
    P['mentions-legales'], P.confidentialite, P.cookies,
    ...SERVICES.map(s => P.service(s.slug)),
    ...PROJECTS.map(p => P.project(p.id)),
    ...ARTICLES.map(a => P.article(a.id)),
    ...['renovation-toiture', 'facade-crepi', 'creation-lucarnes', 'renovation-generale', 'extensions-annexes'].map(P.lp)
  ]
}

export async function render(url) {
  const { app, router } = createKratosApp(createMemoryHistory())
  await router.push(url)
  await router.isReady()
  const route = router.currentRoute.value
  const html = await renderToString(app)
  const seo = seoFor(route)
  return { html, path: route.path, title: titleTag(seo), head: headTags(seo), indexable: !seo.robots.startsWith('noindex'), canonical: seo.url }
}

export { abs }
