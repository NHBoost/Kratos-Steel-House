<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { SERVICES } from '../data/content.js'
import { state, toast } from '../store.js'

defineProps({ solid: Boolean, onLight: Boolean })
const route = useRoute()
const key = computed(() => route.meta.key)
const links = [['entreprise', 'Entreprise'], ['services', 'Services'], ['realisations', 'Réalisations'], ['zones', 'Zones'], ['faq', 'Conseils'], ['contact', 'Contact']]

function lang(l) {
  if (l === 'nl') toast('Version néerlandaise prévue en phase 2. L’architecture /nl/ et les balises hreflang sont prêtes.')
}
</script>

<template>
  <header :class="['hdr', { solid, 'on-light': onLight }]"><div class="w">
    <RouterLink class="brand" to="/" aria-label="Kratos Steel House, accueil"><img :src="'img/kratos-wordmark.png'" alt="" width="513" height="120"></RouterLink>
    <nav class="nav" aria-label="Navigation principale">
      <template v-for="[k, label] in links" :key="k">
        <div v-if="k === 'services'" class="hs"><RouterLink :to="'/' + k" :aria-current="key === k ? 'page' : 'false'">{{ label }}</RouterLink><div class="dd"><RouterLink v-for="s in SERVICES" :key="s.slug" :to="'/' + s.slug">{{ s.short }}</RouterLink></div></div>
        <RouterLink v-else :to="'/' + k" :aria-current="key === k ? 'page' : 'false'">{{ label }}</RouterLink>
      </template>
    </nav>
    <div class="hr">
      <div class="lang" role="group" aria-label="Langue"><button type="button" aria-pressed="true" @click="lang('fr')">FR</button><button type="button" aria-pressed="false" @click="lang('nl')">NL</button></div>
      <RouterLink class="btn" to="/devis">Demander un devis</RouterLink>
      <button class="burger" type="button" aria-label="Menu" :aria-expanded="String(state.menuOpen)" aria-controls="mnav" @click="state.menuOpen = !state.menuOpen"><span></span><span></span></button>
    </div>
  </div></header>
  <nav class="mnav" id="mnav" aria-label="Menu mobile">
    <RouterLink to="/">Accueil</RouterLink><RouterLink to="/entreprise">Entreprise</RouterLink><RouterLink to="/services">Services</RouterLink><div class="ms"><RouterLink v-for="s in SERVICES" :key="s.slug" :to="'/' + s.slug">{{ s.short }}</RouterLink></div>
    <RouterLink to="/realisations">Réalisations</RouterLink><RouterLink to="/zones">Zones d’intervention</RouterLink><RouterLink to="/faq">FAQ &amp; conseils</RouterLink><RouterLink to="/contact">Contact</RouterLink>
    <RouterLink class="btn light" to="/devis">Demander un devis</RouterLink>
  </nav>
</template>
