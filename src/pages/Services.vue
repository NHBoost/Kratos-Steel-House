<script setup>
import { P } from '../paths.js'
import { SERVICES, SVC_IMG } from '../data/content.js'
import PageHead from '../components/PageHead.vue'
import Ph from '../components/Ph.vue'
import Steps from '../components/Steps.vue'
import Cta from '../components/Cta.vue'
</script>

<template>
  <PageHead img="scaffold2" :crumbs="[['Accueil', 'accueil'], ['Nos services']]" label="Nos services" h1="Construire, rénover et transformer avec exigence." lede="Des travaux spécifiques aux rénovations et constructions d’envergure." />
  <section class="sec"><div class="w"><h2 class="sr-only">Nos 8 métiers</h2><div class="pgrid" style="row-gap:72px"><RouterLink v-for="(s, i) in SERVICES" :key="s.slug" class="pc" :to="P.service(s.slug)" :style="{ gridColumn: 'span ' + (i % 3 === 0 ? 7 : 5) }"><Ph :k="SVC_IMG[s.slug][0]" :cls="i % 3 === 0 ? 'r-32' : 'r-43'" :alt="s.short" /><div class="meta"><h3 style="font-size:clamp(1.4rem,2.2vw,2rem);font-weight:300">{{ s.short }}</h3><span class="loc">Découvrir</span></div><p class="sub" style="margin-top:8px;max-width:48ch">{{ s.card }}</p></RouterLink></div></div></section>
  <section class="sec white"><div class="w"><div class="head"><h2>Un même parcours pour chaque projet.</h2></div><Steps /></div></section>
  <Cta />
</template>
