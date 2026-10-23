<script setup>
import { P } from '../paths.js'
import { svcBySlug } from '../data/content.js'
import { state } from '../store.js'
import PageHead from '../components/PageHead.vue'

const L = state.lastLead
const svcName = svcBySlug[L.svc]?.short || 'Autre / plusieurs travaux'
</script>

<template>
  <PageHead :crumbs="[['Accueil', 'accueil'], ['Demande envoyée']]" h1="Merci, votre demande est bien enregistrée." lede="Nous vous recontactons rapidement pour discuter de votre projet." />
  <section class="sec" style="padding-top:20px"><div class="w split top"><div class="tx"><p class="sub">Sur le site en production, un accusé de réception est envoyé à {{ L.email }}. Dans cette maquette, rien n’est transmis.</p><div class="acts"><RouterLink class="btn" :to="P.realisations">Nos réalisations</RouterLink><RouterLink class="tl" :to="P.home">Retour à l’accueil</RouterLink></div></div>
  <dl class="recap"><dt>Profil</dt><dd>{{ L.client }}</dd><dt>Travaux</dt><dd>{{ svcName }}</dd><dt>Commune</dt><dd>{{ L.cp }}</dd><dt>Projet</dt><dd>{{ L.desc }}</dd><dt>Superficie</dt><dd>{{ L.surf || '—' }}</dd><dt>Budget</dt><dd>{{ L.budget || '—' }}</dd><dt>Délai</dt><dd>{{ L.when || '—' }}</dd><dt>Documents</dt><dd><template v-if="L.files.length"><template v-for="(n, i) in L.files" :key="i"><br v-if="i">{{ n }}</template></template><template v-else>—</template></dd><dt>Contact</dt><dd>{{ L.name }}<br>{{ L.tel }}<br>{{ L.email }}</dd></dl></div></section>
</template>
