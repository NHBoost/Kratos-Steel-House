<script setup>
import { computed } from 'vue'
import { PROJECTS, PROJ_IMG, svcBySlug } from '../data/content.js'
import PageHead from '../components/PageHead.vue'
import Ph from '../components/Ph.vue'
import ProjCard from '../components/ProjCard.vue'
import Cta from '../components/Cta.vue'

const props = defineProps({ p: Object })
const s = computed(() => svcBySlug[props.p.svc])
const im = computed(() => PROJ_IMG[props.p.id])
const others = computed(() => PROJECTS.filter(x => x.id !== props.p.id).sort((a, b) => (b.cat === props.p.cat) - (a.cat === props.p.cat)).slice(0, 3))
</script>

<template>
  <PageHead :img="im[0]" :crumbs="[['Accueil', 'accueil'], ['Réalisations', 'realisations'], [p.name]]" :label="p.catL" :h1="p.name" />
  <section class="sec"><div class="w">
    <div class="facts"><div><span>Localisation</span><strong>{{ p.loc }}</strong></div><div><span>Région</span><strong>{{ p.region }}</strong></div><div><span>Travaux</span><strong>{{ p.catL }}</strong></div><div><span>Statut</span><strong>Fiche d’exemple</strong></div></div>
    <div class="split top mt"><div class="tx"><p class="label">Le projet</p><p class="lede">{{ p.initial }}</p><p class="sub">{{ p.finish }}</p></div><div><p class="label" style="margin-bottom:18px">Travaux réalisés</p><ul class="lines"><li v-for="(d, i) in p.done" :key="i"><span>{{ String(i + 1).padStart(2, '0') }}</span>{{ d }}</li></ul></div></div>
    <div class="gal mt"><Ph :k="im[0]" cls="r-43" :alt="p.name" ill /><Ph :k="im[1]" cls="r-43" ill /><Ph :k="im[2]" cls="r-43" ill /></div>
    <p class="note mt">Photos d’illustration. La fiche définitive présentera les photos avant, pendant et après du chantier, ainsi que le témoignage du client s’il est disponible.</p>
  </div></section>
  <Cta title="Vous avez un projet similaire ?" txt="Décrivez-nous votre bâtiment et vos attentes : nous étudions votre demande et revenons vers vous." :img="im[1]" :svc="s.slug" />
  <section class="sec"><div class="w"><div class="head"><h2>Autres réalisations</h2></div><div class="pgrid three"><ProjCard v-for="x in others" :key="x.id" :p="x" cls="r-45" /></div></div></section>
</template>
