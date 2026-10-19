<script setup>
import { FAQ, ARTICLES, ART_IMG } from '../data/content.js'
import PageHead from '../components/PageHead.vue'
import Ph from '../components/Ph.vue'
import FaqList from '../components/FaqList.vue'
import Cta from '../components/Cta.vue'
</script>

<template>
  <PageHead img="interior2" :crumbs="[['Accueil', 'accueil'], ['FAQ & conseils']]" label="FAQ & conseils" h1="Questions fréquentes et conseils d’experts." />
  <section class="sec"><div class="w split top"><div class="tx"><h2>Questions fréquentes</h2><p class="sub">Les réponses générales ne remplacent pas l’analyse de votre projet.</p></div><FaqList :items="FAQ" /></div></section>
  <section class="sec stone" id="conseils"><div class="w"><div class="head"><h2>Conseils &amp; expertise</h2><p>Des guides pratiques sur la construction et la rénovation en Belgique.</p></div>
    <div class="arts"><RouterLink v-for="a in ARTICLES" :key="a.id" class="art" :to="'/conseil-' + a.id"><Ph :k="ART_IMG[a.id]" cls="r-32" :alt="a.t" /><p class="label">Conseil</p><h3>{{ a.t }}</h3><p>{{ a.ex }}</p></RouterLink></div></div></section>
  <Cta />
</template>
