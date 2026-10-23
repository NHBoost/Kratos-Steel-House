<script setup>
import { ref, computed } from 'vue'
import { CATS, PROJECTS } from '../data/content.js'
import PageHead from '../components/PageHead.vue'
import ProjCard from '../components/ProjCard.vue'
import Cta from '../components/Cta.vue'

const f = ref('all')
const label = computed(() => CATS.find(c => c[0] === f.value)[1])
</script>

<template>
  <PageHead img="villa" :crumbs="[['Accueil', 'accueil'], ['Réalisations']]" label="Portfolio" h1="Nos réalisations" lede="Toitures, façades, lucarnes, extensions et constructions à Bruxelles et dans les deux Brabants." />
  <section class="sec"><div class="w">
    <h2 class="sr-only">Tous nos projets</h2>
    <div class="filters" role="group" aria-label="Filtrer par catégorie"><button v-for="[k, l] in CATS" :key="k" type="button" :aria-pressed="String(k === f)" @click="f = k">{{ l }}</button></div>
    <p class="sr" aria-live="polite" style="position:absolute;left:-9999px">Catégorie sélectionnée : {{ label }}</p>
    <div :class="['pgrid', f === 'all' ? 'all' : 'three']"><ProjCard v-for="p in PROJECTS" :key="p.id" :p="p" cls="r-43" :out="!(f === 'all' || p.cat === f)" /></div>
    <p class="note mt">Photos d’illustration en attendant les photographies des chantiers de Kratos Steel House, à publier depuis le back-office.</p>
  </div></section>
  <Cta title="Vous avez un projet similaire ?" />
</template>
