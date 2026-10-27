<script setup>
import { P } from '../paths.js'
import { computed } from 'vue'
import { SERVICES, PROJECTS, ARTICLES, SVC_IMG, SVC_ARTICLES, following } from '../data/content.js'
import PageHead from '../components/PageHead.vue'
import Ph from '../components/Ph.vue'
import ProjCard from '../components/ProjCard.vue'
import Steps from '../components/Steps.vue'
import FaqList from '../components/FaqList.vue'
import Benefits from '../components/Benefits.vue'
import QuoteForm from '../components/QuoteForm.vue'

const props = defineProps({ s: Object })
const imgs = computed(() => SVC_IMG[props.s.slug])
const others = computed(() => following(SERVICES, props.s, SERVICES.length - 1))
const tips = computed(() => (SVC_ARTICLES[props.s.slug] || []).map(id => ARTICLES.find(a => a.id === id)))
const projs = computed(() => PROJECTS.filter(p => p.svc === props.s.slug || p.cat === props.s.cat).slice(0, 3))
const notes = { 'creation-lucarnes': 'Une lucarne modifie le volume et l’aspect de la toiture : les autorisations urbanistiques éventuelles doivent être vérifiées avant les travaux.', 'gros-oeuvre-transformations': 'Les interventions structurelles requérant une étude de stabilité ou une autorisation sont réalisées dans le respect des obligations applicables.', 'isolation-thermique': 'Les économies d’énergie dépendent du bâtiment et des travaux réalisés : aucun pourcentage n’est annoncé sans étude technique.' }
const devis = computed(() => ({ path: P.devis, query: { svc: props.s.slug } }))
</script>

<template>
  <PageHead :img="imgs[0]" :crumbs="[['Accueil', 'accueil'], ['Services', 'services'], [s.short]]" :label="s.short" :h1="s.h1" :lede="s.hook"><div class="acts"><RouterLink class="btn light" :to="devis">Demander un devis</RouterLink></div></PageHead>
  <section class="sec"><div class="w with-aside">
    <div>
      <div class="prose"><p class="lede" style="max-width:32ch">{{ s.intro[0] }}</p><p class="sub body-l">{{ s.intro[1] }}</p><p v-if="notes[s.slug]" class="note">{{ notes[s.slug] }}</p></div>
      <div class="mt"><Ph :k="imgs[1]" cls="r-169" :alt="s.short" z /></div>
      <div class="mt"><h2 style="font-size:clamp(1.6rem,2.8vw,2.4rem);margin-bottom:32px">Types de travaux</h2><ul class="lines two"><li v-for="(w, i) in s.works" :key="i"><span>{{ String(i + 1).padStart(2, '0') }}</span>{{ w }}</li></ul></div>
      <div class="mt"><h2 style="font-size:clamp(1.6rem,2.8vw,2.4rem);margin-bottom:32px">Ce que vous y gagnez</h2><Benefits :items="s.benefits" /></div>
    </div>
    <aside class="aside"><div class="side-cta"><h3>Un projet de {{ s.short.toLowerCase() }} ?</h3><p>Décrivez-le en quelques lignes et joignez des photos. Nous revenons vers vous pour en discuter.</p><RouterLink class="btn light" :to="devis">Demander un devis</RouterLink></div>
    <div class="side-links"><p class="label" style="margin-bottom:8px">Autres services</p><RouterLink v-for="o in others.slice(0, 5)" :key="o.slug" :to="P.service(o.slug)">{{ o.short }}<span aria-hidden="true">→</span></RouterLink></div>
    <div v-if="tips.length" class="side-links"><p class="label" style="margin-bottom:8px">Nos conseils</p><RouterLink v-for="a in tips" :key="a.id" :to="P.article(a.id)">{{ a.t }}</RouterLink></div></aside>
  </div></section>
  <section v-if="projs.length" class="sec stone"><div class="w"><div class="head"><h2>Projets associés</h2><RouterLink class="tl" :to="P.realisations">Toutes les réalisations</RouterLink></div><div class="pgrid three"><ProjCard v-for="p in projs" :key="p.id" :p="p" cls="r-45" /></div></div></section>
  <section class="sec white"><div class="w"><div class="head"><h2>Notre méthode</h2></div><Steps /></div></section>
  <section class="sec"><div class="w split top"><div class="tx"><h2>Questions fréquentes</h2></div><FaqList :items="s.faq" /></div></section>
  <section class="sec stone"><div class="w split top"><div class="tx"><p class="label">Demande de devis</p><h2>Parlez-nous de votre projet.</h2><p class="sub">Réponse rapide, sans engagement. Les champs marqués d’un astérisque sont obligatoires.</p></div><div class="form-wrap"><QuoteForm :svc="s.slug" ctx="svc" /></div></div></section>
  <section class="sec s"><div class="w"><div class="head" style="margin-bottom:32px"><h2 style="font-size:clamp(1.6rem,2.6vw,2.2rem)">Services complémentaires</h2></div><div class="pgrid three"><RouterLink v-for="o in others.slice(-3)" :key="o.slug" class="pc" :to="P.service(o.slug)"><Ph :k="SVC_IMG[o.slug][0]" cls="r-32" :alt="o.short" /><div class="meta"><h3>{{ o.short }}</h3><span class="loc">Découvrir</span></div></RouterLink></div></div></section>
</template>
