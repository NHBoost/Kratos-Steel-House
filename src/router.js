import { createRouter } from 'vue-router'
import { PROJECTS, ARTICLES, svcBySlug } from './data/content.js'
import { P } from './paths.js'
import { seoFor, applyHead } from './seo.js'
import { state, track } from './store.js'

import Accueil from './pages/Accueil.vue'
import Entreprise from './pages/Entreprise.vue'
import Services from './pages/Services.vue'
import Service from './pages/Service.vue'
import Realisations from './pages/Realisations.vue'
import Projet from './pages/Projet.vue'
import Zones from './pages/Zones.vue'
import Devis from './pages/Devis.vue'
import Contact from './pages/Contact.vue'
import Faq from './pages/Faq.vue'
import Article from './pages/Article.vue'
import Landing from './pages/Landing.vue'
import Legal from './pages/Legal.vue'
import Merci from './pages/Merci.vue'
import Plan from './pages/Plan.vue'

export const projById = Object.fromEntries(PROJECTS.map(p => [p.id, p]))
export const artById = Object.fromEntries(ARTICLES.map(a => [a.id, a]))

// meta.key : entrée de menu active · meta.dark : en-tête sur photo sombre · meta.type : modèle SEO (voir seo.js)
const page = (path, component, key, type, dark, extra = {}) => ({ path, component, meta: { key, type, dark }, ...extra })

const routes = [
  { path: '/', redirect: P.home },
  page(P.home, Accueil, 'accueil', 'accueil', true),
  page(P.entreprise, Entreprise, 'entreprise', 'entreprise', true),
  page(P.services, Services, 'services', 'services', true),
  page(P.realisations, Realisations, 'realisations', 'realisations', true),
  page(P.zones, Zones, 'zones', 'zones', true),
  page(P.devis, Devis, 'devis', 'devis', false),
  page(P.contact, Contact, 'contact', 'contact', false),
  page(P.faq, Faq, 'faq', 'faq', true),
  page(P.plan, Plan, 'plan', 'plan', false),
  ...['mentions-legales', 'confidentialite', 'cookies'].map(k => page(P[k], Legal, k, k, false, { props: { kind: k } })),
  page(P.merci, Merci, 'devis', 'merci', false, { beforeEnter: () => state.lastLead ? true : P.devis }),
  page('/fr/services/:slug/', Service, 'services', 'service', true, {
    props: to => ({ s: svcBySlug[to.params.slug] }),
    beforeEnter: to => svcBySlug[to.params.slug] ? true : P.services
  }),
  page('/fr/realisations/:id/', Projet, 'realisations', 'projet', true, {
    props: to => ({ p: projById[to.params.id] }),
    beforeEnter: to => projById[to.params.id] ? true : P.realisations
  }),
  page('/fr/conseils/:id/', Article, 'faq', 'article', true, {
    props: to => ({ a: artById[to.params.id] }),
    beforeEnter: to => artById[to.params.id] ? true : P.faq
  }),
  page('/fr/lp/:slug/', Landing, 'lp', 'lp', true, {
    props: to => ({ s: svcBySlug[to.params.slug] }),
    beforeEnter: to => svcBySlug[to.params.slug] ? true : P.home
  }),
  { path: '/:pathMatch(.*)*', redirect: P.home }
]

export function createKratosRouter(history) {
  const router = createRouter({
    history,
    routes,
    scrollBehavior: (to, from, saved) => saved || { top: 0 }
  })

  router.afterEach(to => {
    const { id, slug } = to.params
    if (to.meta.type === 'service') track('view_service', { service: slug })
    if (to.meta.type === 'projet') track('view_project', { project: id })
    if (to.meta.type === 'merci' && state.lastLead && !state.lastLead.counted) {
      track('generate_lead', { service: state.lastLead.svc })
      state.lastLead.counted = true
    }
    state.menuOpen = false
    if (typeof document !== 'undefined') applyHead(seoFor(to))
    track('page_view', { page_path: to.path })
  })

  return router
}
