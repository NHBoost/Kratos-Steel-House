<script setup>
import { P } from '../paths.js'
import { computed } from 'vue'
import { ARTICLES, SERVICES, ART_IMG, SVC_ARTICLES, following } from '../data/content.js'
import PageHead from '../components/PageHead.vue'

const props = defineProps({ a: Object })
const more = computed(() => following(ARTICLES, props.a, 4))
const svcs = computed(() => SERVICES.filter(s => (SVC_ARTICLES[s.slug] || []).includes(props.a.id)))
</script>

<template>
  <PageHead :img="ART_IMG[a.id]" :crumbs="[['Accueil', 'accueil'], ['Conseils', 'faq'], [a.t]]" label="Conseils & expertise" :h1="a.t" />
  <section class="sec"><div class="w with-aside"><article class="prose"><template v-for="([t, c], i) in a.body" :key="i"><h2 v-if="t === 'h2'">{{ c }}</h2><p v-else-if="i === 0" class="lede" style="max-width:34ch">{{ c }}</p><p v-else class="sub body-l">{{ c }}</p></template><p class="note">Article d’information générale. Les règles urbanistiques et les aides régionales évoluent : vérifiez les conditions en vigueur auprès de votre commune et de votre Région.</p></article>
  <aside class="aside"><div class="side-cta"><h3>Un projet en tête ?</h3><p>Nos équipes étudient votre demande et vous conseillent.</p><RouterLink class="btn light" :to="P.devis">Demander un devis</RouterLink></div><div class="side-links"><p class="label" style="margin-bottom:8px">À lire aussi</p><RouterLink v-for="x in more" :key="x.id" :to="P.article(x.id)">{{ x.t }}</RouterLink></div><div v-if="svcs.length" class="side-links"><p class="label" style="margin-bottom:8px">Services associés</p><RouterLink v-for="s in svcs" :key="s.slug" :to="P.service(s.slug)">{{ s.short }}<span aria-hidden="true">→</span></RouterLink></div></aside></div></section>
</template>
