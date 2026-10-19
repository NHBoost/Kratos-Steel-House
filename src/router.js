import { createRouter, createWebHashHistory } from 'vue-router'
import { PROJECTS, ARTICLES, svcBySlug } from './data/content.js'
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

const projById = Object.fromEntries(PROJECTS.map(p => [p.id, p]))
const artById = Object.fromEntries(ARTICLES.map(a => [a.id, a]))

// meta.key : entrée de menu active · meta.title : titre du document · meta.dark : en-tête sur photo sombre
const page = (path, component, key, title, dark, extra = {}) => ({ path, component, meta: { key, title, dark }, ...extra })

const routes = [
  page('/', Accueil, 'accueil', 'Construction & rénovation haut de gamme en Belgique', true, { alias: '/accueil' }),
  page('/entreprise', Entreprise, 'entreprise', 'Notre entreprise', true),
  page('/services', Services, 'services', 'Nos services', true),
  page('/realisations', Realisations, 'realisations', 'Nos réalisations', true),
  page('/zones', Zones, 'zones', 'Zones d’intervention', true),
  page('/devis', Devis, 'devis', 'Demander un devis', false),
  page('/contact', Contact, 'contact', 'Contact', false),
  page('/faq', Faq, 'faq', 'FAQ & conseils', true),
  page('/plan', Plan, 'plan', 'Plan du site', false),
  ...['mentions-legales', 'confidentialite', 'cookies'].map(k => page('/' + k, Legal, k, null, false, { props: { kind: k } })),
  page('/merci', Merci, 'devis', 'Demande envoyée', false, { beforeEnter: () => state.lastLead ? true : '/devis' }),
  page('/projet-:id', Projet, 'realisations', null, true, {
    props: to => ({ p: projById[to.params.id] }),
    beforeEnter: to => projById[to.params.id] ? true : '/'
  }),
  page('/conseil-:id', Article, 'faq', null, true, {
    props: to => ({ a: artById[to.params.id] }),
    beforeEnter: to => artById[to.params.id] ? true : '/'
  }),
  page('/lp-:slug', Landing, 'lp', null, true, {
    props: to => ({ s: svcBySlug[to.params.slug] }),
    beforeEnter: to => svcBySlug[to.params.slug] ? true : '/'
  }),
  page('/:slug', Service, 'services', null, true, {
    props: to => ({ s: svcBySlug[to.params.slug] }),
    beforeEnter: to => svcBySlug[to.params.slug] ? true : '/'
  }),
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

function dynamicTitle(to) {
  const { id, slug } = to.params
  if (to.path.startsWith('/projet-')) return projById[id].name
  if (to.path.startsWith('/conseil-')) return artById[id].t
  if (to.path.startsWith('/lp-')) return svcBySlug[slug].short
  if (slug && svcBySlug[slug]) return svcBySlug[slug].h1
  return to.meta.title
}

router.afterEach(to => {
  const { id, slug } = to.params
  if (slug && svcBySlug[slug] && !to.path.startsWith('/lp-')) track('view_service', { service: slug })
  if (to.path.startsWith('/projet-')) track('view_project', { project: id })
  if (to.path === '/merci' && state.lastLead && !state.lastLead.counted) {
    track('generate_lead', { service: state.lastLead.svc })
    state.lastLead.counted = true
  }
  const title = dynamicTitle(to)
  document.title = (title ? title + ' — ' : '') + 'Kratos Steel House'
  state.menuOpen = false
  track('page_view', { page_path: to.path })
})

export default router
