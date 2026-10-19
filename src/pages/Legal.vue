<script setup>
import { CO } from '../data/content.js'
import { showCookie } from '../store.js'
import PageHead from '../components/PageHead.vue'

defineProps({ kind: String })
const T = { 'mentions-legales': 'Mentions légales', 'confidentialite': 'Politique de confidentialité', 'cookies': 'Politique de cookies' }
</script>

<template>
  <PageHead :crumbs="[['Accueil', 'accueil'], [T[kind]]]" :h1="T[kind]" />
  <section class="sec" style="padding-top:20px"><div class="w"><div class="prose">
    <template v-if="kind === 'mentions-legales'">
      <h2>Éditeur du site</h2><p>Dénomination : <span class="ph-fill">Dénomination juridique</span><br>Forme juridique : <span class="ph-fill">SRL / SA</span><br>Siège : <span class="ph-fill">Adresse officielle</span><br>BCE / TVA : <span class="ph-fill">{{ CO.bce }}</span><br>E-mail : {{ CO.email }} · Téléphone : {{ CO.phone }}</p><h2>Accès à la profession et assurances</h2><p><span class="ph-fill">À valider par Kratos Steel House</span></p><h2>Propriété intellectuelle</h2><p>Les textes, photographies et éléments graphiques du site sont la propriété de Kratos Steel House ou utilisés sous licence. Photos d’illustration : Unsplash.</p><h2>Hébergement</h2><p><span class="ph-fill">Nom et adresse de l’hébergeur</span></p>
    </template>
    <template v-else-if="kind === 'confidentialite'">
      <p class="lede" style="max-width:34ch">Kratos Steel House traite vos données personnelles conformément au RGPD.</p><h2>Responsable du traitement</h2><p><span class="ph-fill">Dénomination, adresse, BCE</span> — {{ CO.email }}</p><h2>Données collectées</h2><p>Nom, prénom, téléphone, e-mail, commune ou code postal, description du projet, informations facultatives et documents joints.</p><h2>Finalités et base légale</h2><p>Répondre à votre demande et établir une proposition (mesures précontractuelles). Mesure d’audience et publicité uniquement avec votre consentement.</p><h2>Durée de conservation</h2><p><span class="ph-fill">À définir</span></p><h2>Vos droits</h2><p>Accès, rectification, effacement, limitation, opposition et portabilité : écrivez à {{ CO.email }}. Réclamation possible auprès de l’Autorité de protection des données (APD).</p>
    </template>
    <template v-else>
      <p class="lede" style="max-width:34ch">Cookies nécessaires et, avec votre accord, cookies de mesure d’audience et publicitaires.</p><h2>Nécessaires</h2><p>Mémorisation de vos choix et sécurité des formulaires.</p><h2>Mesure d’audience</h2><p>Google Analytics 4 via Google Tag Manager, après accord.</p><h2>Publicité</h2><p>Meta Pixel et autres pixels, après accord.</p><p><button class="btn line" type="button" @click="showCookie(true)">Gérer mes préférences</button></p>
    </template>
    <p class="note">Les éléments surlignés sont à compléter. Texte de base à faire valider juridiquement.</p>
  </div></div></section>
</template>
