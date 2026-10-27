<script setup>
import { computed } from 'vue'
import { PROJECTS, PROJ_IMG, SVC_IMG, src, srcset } from '../data/content.js'
import { scrollToId } from '../store.js'
import Ph from '../components/Ph.vue'
import FaqList from '../components/FaqList.vue'
import Benefits from '../components/Benefits.vue'
import QuoteForm from '../components/QuoteForm.vue'

const props = defineProps({ s: Object })
const proj = computed(() => PROJECTS.filter(p => p.svc === props.s.slug).concat(PROJECTS)[0])
</script>

<template>
  <section class="hero"><div class="bg"><img :src="src(SVC_IMG[s.slug][0])" :srcset="srcset(SVC_IMG[s.slug][0])" sizes="100vw" alt="" fetchpriority="high"></div><div class="w">
    <p class="label" style="color:#E3E3E0;margin-bottom:22px">{{ s.short }} · Bruxelles &amp; Brabants</p>
    <h1 style="max-width:16ch">{{ s.hook }}</h1>
    <div class="hero-foot"><p>Plus de 20 ans d’expérience, des finitions haut de gamme et un interlocuteur unique pour votre chantier.</p><div class="acts"><a class="btn light" href="#lp-form" @click.prevent="scrollToId('lp-form')">Recevoir une proposition</a></div></div>
  </div></section>
  <section class="sec"><div class="w"><h2 class="sr-only">Pourquoi choisir Kratos Steel House</h2><Benefits :items="s.benefits" /></div></section>
  <section class="sec stone"><div class="w"><div class="gal"><Ph :k="PROJ_IMG[proj.id][0]" cls="r-43" :alt="proj.name" ill /><Ph :k="SVC_IMG[s.slug][1]" cls="r-43" ill /><Ph k="detail" cls="r-43" ill /></div></div></section>
  <section class="sec" id="lp-form"><div class="w split top"><div class="tx"><h2>Votre projet de {{ s.short.toLowerCase() }}.</h2><p class="sub">Zones desservies : Bruxelles (19 communes), Brabant flamand, Brabant wallon. Autres régions sur étude.</p><FaqList :items="s.faq" /></div><div class="form-wrap"><QuoteForm :svc="s.slug" ctx="lp" /></div></div></section>
</template>
