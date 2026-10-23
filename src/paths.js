// URL publiques du site (une seule source pour le router, les liens, le SEO et le pré-rendu)
import { svcBySlug } from './data/content.js'

// Domaine de production : surchargeable avec VITE_SITE_URL au build
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.kratossteelhouse.be').replace(/\/$/, '')

export const P = {
  home: '/fr/',
  entreprise: '/fr/entreprise/',
  services: '/fr/services/',
  realisations: '/fr/realisations/',
  zones: '/fr/zones-intervention/',
  devis: '/fr/devis/',
  contact: '/fr/contact/',
  faq: '/fr/faq/',
  plan: '/fr/plan-du-site/',
  merci: '/fr/merci/',
  'mentions-legales': '/fr/mentions-legales/',
  confidentialite: '/fr/confidentialite/',
  cookies: '/fr/cookies/',
  service: slug => `/fr/services/${slug}/`,
  project: id => `/fr/realisations/${id}/`,
  article: id => `/fr/conseils/${id}/`,
  lp: slug => `/fr/lp/${slug}/`
}

// Clés de page de l'ancienne version (#accueil, #projet-x, #conseil-x, #lp-x, #slug-de-service…)
export function fromKey(k) {
  if (!k || k === 'accueil') return P.home
  if (k.startsWith('projet-')) return P.project(k.slice(7))
  if (k.startsWith('conseil-')) return P.article(k.slice(8))
  if (k.startsWith('lp-')) return P.lp(k.slice(3))
  if (svcBySlug[k]) return P.service(k)
  return typeof P[k] === 'string' ? P[k] : P.home
}

export const abs = path => SITE_URL + path
