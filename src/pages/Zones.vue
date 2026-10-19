<script setup>
import { REGIONS, REG_IMG, SERVICES } from '../data/content.js'
import PageHead from '../components/PageHead.vue'
import Ph from '../components/Ph.vue'
import BeMap from '../components/BeMap.vue'
import Cta from '../components/Cta.vue'
</script>

<template>
  <PageHead img="square" :crumbs="[['Accueil', 'accueil'], ['Zones d’intervention']]" label="Zones d’intervention" h1="Bruxelles, les deux Brabants et toute la Belgique." />
  <section class="sec"><div class="w split"><div class="map"><BeMap /></div><div class="tx"><h2>Trois régions principales.</h2><p class="sub body-l">Nos équipes interviennent principalement à Bruxelles et en périphérie, dans le Brabant flamand et dans le Brabant wallon.</p><p class="lede" style="font-size:1.4rem">Kratos Steel House étudie également les projets de construction et de rénovation dans toute la Belgique.</p></div></div></section>
  <section class="sec stone"><div class="w reg-cards"><article v-for="r in REGIONS" :key="r.k"><Ph :k="REG_IMG[r.k]" cls="r-45" :alt="r.name" /><h3 style="margin-top:10px">{{ r.name }}</h3><p class="sub">{{ r.txt }}</p><p class="com">{{ r.communes.join(' · ') }}</p></article></div></section>
  <section class="sec"><div class="w split top"><div class="tx"><h2>Nos services dans votre région</h2></div><div class="side-links"><RouterLink v-for="s in SERVICES" :key="s.slug" :to="'/' + s.slug">{{ s.short }}<span aria-hidden="true">→</span></RouterLink></div></div></section>
  <Cta />
</template>
