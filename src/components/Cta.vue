<script setup>
import { src } from '../data/content.js'
defineProps({
  title: { type: String, default: 'Donnons vie à votre prochain projet.' },
  txt: { type: String, default: 'Construction, rénovation, toiture, façade ou extension : faites confiance à une entreprise expérimentée qui place la qualité au cœur de chaque réalisation.' },
  img: { type: String, default: 'roofTiles' },
  svc: { type: String, default: '' }
})
</script>

<template>
  <section class="cta"><div class="bg"><img :src="src(img)" alt="" loading="lazy"></div><div class="w"><h2>{{ title }}</h2><p>{{ txt }}</p><div class="acts"><RouterLink class="btn light" :to="svc ? { path: '/devis', query: { svc } } : '/devis'">Parler de mon projet</RouterLink><RouterLink class="tl" to="/realisations">Voir nos réalisations</RouterLink></div></div></section>
</template>
