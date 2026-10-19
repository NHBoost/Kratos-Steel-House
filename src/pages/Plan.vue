<script setup>
import { SERVICES, PROJECTS, ARTICLES, svcBySlug } from '../data/content.js'
import { to } from '../store.js'
import PageHead from '../components/PageHead.vue'

const sections = [
  ['Principal', [['Accueil', 'accueil', '/fr/'], ['Notre entreprise', 'entreprise', '/fr/entreprise/'], ['Nos services', 'services', '/fr/services/'], ['Réalisations', 'realisations', '/fr/realisations/'], ['Zones d’intervention', 'zones', '/fr/zones-intervention/'], ['Demander un devis', 'devis', '/fr/devis/'], ['Contact', 'contact', '/fr/contact/'], ['FAQ & conseils', 'faq', '/fr/faq/']]],
  ['Services', SERVICES.map(s => [s.short, s.slug, `/fr/services/${s.slug}/`])],
  ['Réalisations', PROJECTS.map(p => [p.name, 'projet-' + p.id, `/fr/realisations/${p.id}/`])],
  ['Conseils', ARTICLES.map(a => [a.t, 'conseil-' + a.id, `/fr/conseils/${a.id}/`])],
  ['Landing pages', ['renovation-toiture', 'facade-crepi', 'creation-lucarnes', 'renovation-generale', 'extensions-annexes'].map(k => [svcBySlug[k].short, 'lp-' + k, `/fr/lp/${k}/`])],
  ['Légal', [['Mentions légales', 'mentions-legales', '/fr/mentions-legales/'], ['Confidentialité', 'confidentialite', '/fr/confidentialite/'], ['Cookies', 'cookies', '/fr/cookies/']]]
]
</script>

<template>
  <PageHead :crumbs="[['Accueil', 'accueil'], ['Plan du site']]" h1="Plan du site" lede="Pages et URL de production prévues (/fr/, architecture /nl/ prête)." />
  <section class="sec" style="padding-top:20px"><div class="w sitemap">
    <section v-for="[t, items] in sections" :key="t"><h3>{{ t }}</h3><RouterLink v-for="[l, h, u] in items" :key="h" :to="to(h)">{{ l }}<small>{{ u }}</small></RouterLink></section>
  </div></section>
</template>
