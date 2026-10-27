// Balises <head> par page : titre, description, canonical, robots, Open Graph et JSON-LD.
// Utilisé au pré-rendu (HTML statique) et à chaque navigation côté navigateur.
import { SERVICES, PROJECTS, ARTICLES, FAQ, SVC_IMG, PROJ_IMG, ART_IMG, svcBySlug, src, srcset } from './data/content.js'
import { P, SITE_URL, abs } from './paths.js'

const BRAND = 'Kratos Steel House'
// Pages dont l'en-tête est une grande photo (élément LCP à précharger)
const PHOTO_HEAD = new Set(['accueil', 'entreprise', 'services', 'realisations', 'zones', 'faq', 'service', 'projet', 'article', 'lp'])
const projById = Object.fromEntries(PROJECTS.map(p => [p.id, p]))
const artById = Object.fromEntries(ARTICLES.map(a => [a.id, a]))

// Titre ≤ 60 caractères quand c'est possible : marque complète, abrégée, ou absente
function title(t) {
  if ((t + ' | ' + BRAND).length <= 60) return t + ' | ' + BRAND
  if ((t + ' | Kratos').length <= 60) return t + ' | Kratos'
  return t
}

// Description ≤ 160 caractères, coupée sur un mot
function desc(d) {
  if (d.length <= 160) return d
  return d.slice(0, 157).replace(/[\s,;:–-]+\S*$/, '') + '…'
}

const SVC_TITLE = {
  'construction-generale': 'Entreprise de construction générale en Belgique',
  'renovation-generale': 'Rénovation générale à Bruxelles et en Belgique',
  'renovation-toiture': 'Rénovation de toiture à Bruxelles et Brabants',
  'facade-crepi': 'Rénovation de façade et crépi à Bruxelles',
  'isolation-thermique': 'Isolation thermique de maison à Bruxelles',
  'creation-lucarnes': 'Création de lucarnes sur mesure en Belgique',
  'extensions-annexes': 'Extension de maison et annexe à Bruxelles',
  'gros-oeuvre-transformations': 'Gros œuvre et transformations en Belgique'
}

// Titres SEO raccourcis quand le titre de l'article dépasse 60 caractères
const ART_TITLE = {
  'ameliorer-peb': 'Améliorer le PEB de son habitation : quels travaux ?',
  'preparer-renovation': 'Préparer une rénovation complète de maison en Belgique',
  'valoriser-bien': 'Valoriser son bien immobilier grâce à une rénovation'
}

const STATIC = {
  accueil: {
    t: 'Kratos Steel House — Construction & rénovation à Bruxelles',
    d: 'Entreprise générale de construction et de rénovation haut de gamme à Bruxelles et dans les deux Brabants : toiture, façade, isolation, lucarnes, extensions.',
    img: 'hero', path: P.home, crumbs: null
  },
  entreprise: {
    t: title('Entreprise de construction belge'),
    d: 'Kratos Steel House, entreprise belge de construction et de rénovation : plus de 20 ans d’expérience, des finitions premium et un interlocuteur unique.',
    img: 'plans', path: P.entreprise, crumbs: [['Notre entreprise', P.entreprise]]
  },
  services: {
    t: title('Services de construction et rénovation'),
    d: 'Construction, rénovation complète, toiture, façade et crépi, isolation, lucarnes, extensions et gros œuvre : découvrez nos 8 métiers en Belgique.',
    img: 'scaffold2', path: P.services, crumbs: [['Services', P.services]]
  },
  realisations: {
    t: title('Réalisations à Bruxelles et dans les Brabants'),
    d: 'Toitures, façades, lucarnes, extensions et constructions à Bruxelles et dans les deux Brabants : découvrez les projets de Kratos Steel House.',
    img: 'villa', path: P.realisations, crumbs: [['Réalisations', P.realisations]]
  },
  zones: {
    t: title('Zones d’intervention : Bruxelles et Brabants'),
    d: 'Kratos Steel House intervient à Bruxelles (19 communes), dans le Brabant flamand et le Brabant wallon, et étudie les projets partout en Belgique.',
    img: 'square', path: P.zones, crumbs: [['Zones d’intervention', P.zones]]
  },
  devis: {
    t: title('Demande de devis construction et rénovation'),
    d: 'Demandez un devis pour vos travaux de construction ou de rénovation à Bruxelles et dans les Brabants : décrivez votre projet, joignez photos et plans.',
    img: 'roofers', path: P.devis, crumbs: [['Demander un devis', P.devis]]
  },
  contact: {
    t: title('Contact'),
    d: 'Contactez Kratos Steel House, entreprise de construction et de rénovation à Bruxelles : téléphone, e-mail, WhatsApp ou formulaire de message rapide.',
    img: 'hero', path: P.contact, crumbs: [['Contact', P.contact]]
  },
  faq: {
    t: title('FAQ et conseils construction et rénovation'),
    d: 'Permis, délais, architectes, primes, matériaux : réponses aux questions fréquentes et conseils d’experts pour vos travaux de construction et de rénovation.',
    img: 'interior2', path: P.faq, crumbs: [['FAQ & conseils', P.faq]]
  },
  plan: {
    t: title('Plan du site'),
    d: 'Plan du site Kratos Steel House : toutes les pages services, réalisations, conseils et informations légales de l’entreprise de construction.',
    img: 'hero', path: P.plan, crumbs: [['Plan du site', P.plan]]
  },
  'mentions-legales': {
    t: title('Mentions légales'),
    d: 'Mentions légales du site Kratos Steel House : éditeur, accès à la profession, assurances, propriété intellectuelle et hébergement.',
    img: 'hero', path: P['mentions-legales'], crumbs: [['Mentions légales', P['mentions-legales']]]
  },
  confidentialite: {
    t: title('Politique de confidentialité'),
    d: 'Comment Kratos Steel House traite vos données personnelles conformément au RGPD : données collectées, finalités, durée de conservation et droits.',
    img: 'hero', path: P.confidentialite, crumbs: [['Politique de confidentialité', P.confidentialite]]
  },
  cookies: {
    t: title('Politique de cookies'),
    d: 'Cookies utilisés sur le site Kratos Steel House : cookies nécessaires et, avec votre accord, mesure d’audience et publicité. Gérez vos préférences.',
    img: 'hero', path: P.cookies, crumbs: [['Politique de cookies', P.cookies]]
  },
  merci: {
    t: title('Demande envoyée'),
    d: 'Votre demande de devis a bien été enregistrée. Kratos Steel House vous recontacte rapidement pour discuter de votre projet.',
    img: 'hero', path: P.merci, crumbs: null, robots: 'noindex, follow'
  }
}

const business = () => ({
  '@type': 'GeneralContractor',
  '@id': SITE_URL + '/#entreprise',
  name: BRAND,
  url: abs(P.home),
  logo: SITE_URL + '/img/kratos-logo.png',
  image: SITE_URL + src('hero'),
  description: 'Entreprise générale de construction et de rénovation haut de gamme en Belgique.',
  areaServed: ['Bruxelles', 'Brabant flamand', 'Brabant wallon', 'Belgique'].map(name => ({ '@type': 'AdministrativeArea', name })),
  address: { '@type': 'PostalAddress', addressCountry: 'BE' },
  knowsAbout: SERVICES.map(s => s.short)
})

const breadcrumbs = crumbs => ({
  '@type': 'BreadcrumbList',
  itemListElement: [['Accueil', P.home], ...crumbs].map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) }))
})

const faqPage = items => ({
  '@type': 'FAQPage',
  mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
})

export function seoFor(route) {
  const type = route.meta.type
  const { slug, id } = route.params
  let s, ld = []

  if (type === 'service') {
    const svc = svcBySlug[slug]
    s = {
      t: title(SVC_TITLE[slug] || svc.short),
      d: desc(`${svc.hook} ${svc.card}`),
      img: SVC_IMG[slug][0], path: P.service(slug),
      crumbs: [['Services', P.services], [svc.short, P.service(slug)]]
    }
    ld.push({ '@type': 'Service', name: svc.short, serviceType: svc.short, description: svc.intro[0], provider: { '@id': SITE_URL + '/#entreprise' }, areaServed: ['Bruxelles', 'Brabant flamand', 'Brabant wallon'], url: abs(s.path) }, faqPage(svc.faq))
  } else if (type === 'projet') {
    const p = projById[id]
    s = {
      t: title(`${p.name} à ${p.loc}`),
      d: desc(`${p.name} à ${p.loc} (${p.region}) : ${p.initial}`),
      img: PROJ_IMG[id][0], path: P.project(id),
      crumbs: [['Réalisations', P.realisations], [p.name, P.project(id)]]
    }
  } else if (type === 'article') {
    const a = artById[id]
    s = {
      t: title(ART_TITLE[id] || a.t), d: desc(`${a.ex} ${a.body[0][1]}`),
      img: ART_IMG[id], path: P.article(id), ogType: 'article',
      crumbs: [['FAQ & conseils', P.faq], [a.t, P.article(id)]]
    }
    ld.push({ '@type': 'Article', headline: a.t, description: a.ex, image: SITE_URL + src(ART_IMG[id]), inLanguage: 'fr-BE', mainEntityOfPage: abs(s.path), author: { '@id': SITE_URL + '/#entreprise' }, publisher: { '@id': SITE_URL + '/#entreprise' } })
  } else if (type === 'lp') {
    // Pages d'atterrissage publicitaires : doublons des pages services, hors index
    const svc = svcBySlug[slug]
    s = {
      t: title(svc.short), d: desc(`${svc.hook} Recevez une proposition pour votre projet à Bruxelles et dans les Brabants.`),
      img: SVC_IMG[slug][0], path: P.lp(slug), crumbs: null, robots: 'noindex, follow', canonical: P.service(slug)
    }
  } else {
    s = STATIC[type] || STATIC.accueil
  }

  if (type === 'accueil') ld.push(business())
  if (type === 'faq') ld.push(faqPage(FAQ))
  if (s.crumbs) ld.push(breadcrumbs(s.crumbs))
  if (type !== 'accueil' && ld.length) ld.unshift(business())

  return {
    title: s.t,
    description: s.d,
    url: abs(s.canonical || s.path),
    robots: s.robots || 'index, follow, max-image-preview:large',
    image: SITE_URL + src(s.img),
    ogType: s.ogType || 'website',
    preload: PHOTO_HEAD.has(type) ? s.img : null,
    jsonld: ld.length ? { '@context': 'https://schema.org', '@graph': ld } : null
  }
}

const escAttr = v => String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const escText = v => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;')

// Balises propres à la page, marquées data-seo pour être remplacées à la navigation
export function headTags(m) {
  const t = []
  t.push(`<meta name="description" content="${escAttr(m.description)}" data-seo>`)
  t.push(`<meta name="robots" content="${escAttr(m.robots)}" data-seo>`)
  t.push(`<link rel="canonical" href="${escAttr(m.url)}" data-seo>`)
  t.push(`<meta property="og:type" content="${m.ogType}" data-seo>`)
  t.push(`<meta property="og:site_name" content="${BRAND}" data-seo>`)
  t.push(`<meta property="og:locale" content="fr_BE" data-seo>`)
  t.push(`<meta property="og:title" content="${escAttr(m.title)}" data-seo>`)
  t.push(`<meta property="og:description" content="${escAttr(m.description)}" data-seo>`)
  t.push(`<meta property="og:url" content="${escAttr(m.url)}" data-seo>`)
  t.push(`<meta property="og:image" content="${escAttr(m.image)}" data-seo>`)
  t.push(`<meta name="twitter:card" content="summary_large_image" data-seo>`)
  if (m.preload) t.push(`<link rel="preload" as="image" href="${src(m.preload)}" imagesrcset="${srcset(m.preload)}" imagesizes="100vw" fetchpriority="high" data-seo>`)
  if (m.jsonld) t.push(`<script type="application/ld+json" data-seo>${JSON.stringify(m.jsonld).replace(/</g, '\\u003c')}</script>`)
  return t.join('\n')
}

export function titleTag(m) {
  return `<title>${escText(m.title)}</title>`
}

export function applyHead(m) {
  document.title = m.title
  document.head.querySelectorAll('[data-seo]').forEach(el => el.remove())
  document.head.insertAdjacentHTML('beforeend', headTags(m))
}
