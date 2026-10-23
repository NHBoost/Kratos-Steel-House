<script setup>
import { SERVICES } from '../data/content.js'
import { showCookie } from '../store.js'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="ftr"><div class="w">
    <div class="ftr-cta"><h2>L’excellence dans la construction et la rénovation.</h2><RouterLink class="btn light" to="/devis">Demander un devis</RouterLink></div>
    <div class="ftr-grid">
      <div><img class="ftr-logo" :src="'img/kratos-logo-web.png'" alt="Kratos Steel House" width="480" height="301" loading="lazy"><p>Entreprise générale belge de construction et de rénovation. Bruxelles, Brabant flamand, Brabant wallon et toute la Belgique.</p></div>
      <div><h4>Services</h4><ul><li v-for="s in SERVICES" :key="s.slug"><RouterLink :to="'/' + s.slug">{{ s.short }}</RouterLink></li></ul></div>
      <div><h4>Entreprise</h4><ul><li><RouterLink to="/entreprise">Notre entreprise</RouterLink></li><li><RouterLink to="/realisations">Réalisations</RouterLink></li><li><RouterLink to="/zones">Zones d’intervention</RouterLink></li><li><RouterLink to="/faq">FAQ &amp; conseils</RouterLink></li><li><RouterLink to="/plan">Plan du site</RouterLink></li></ul></div>
      <div><h4>Contact</h4><ul><li>+32 2 000 00 00</li><li>devis@kratossteelhouse.be</li><li>Lun–ven, 8h–18h</li><li><RouterLink to="/contact">Écrire un message</RouterLink></li></ul></div>
    </div>
    <div class="wordmark" aria-hidden="true">Kratos Steel House</div>
    <div class="ftr-bot"><span>© <span>{{ year }}</span> Kratos Steel House · BCE BE 0XXX.XXX.XXX · Photos d’illustration : Unsplash</span>
      <nav aria-label="Liens légaux"><RouterLink to="/mentions-legales">Mentions légales</RouterLink><RouterLink to="/confidentialite">Vie privée</RouterLink><RouterLink to="/cookies">Cookies</RouterLink><a href="#/cookies" @click.prevent="showCookie(true)">Gérer les cookies</a></nav></div>
  </div></footer>
</template>
