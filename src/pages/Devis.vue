<script setup>
import { P } from '../paths.js'
import { useRoute } from 'vue-router'
import PageHead from '../components/PageHead.vue'
import Ph from '../components/Ph.vue'
import ContactRows from '../components/ContactRows.vue'
import QuoteForm from '../components/QuoteForm.vue'

// Le service présélectionné arrive via ?svc= (remplace data-svc de la version d'origine)
const route = useRoute()
const svc = typeof route.query.svc === 'string' ? route.query.svc : ''
</script>

<template>
  <PageHead :crumbs="[['Accueil', 'accueil'], ['Demander un devis']]" h1="Parlez-nous de votre projet." lede="Quelques informations suffisent pour comprendre votre projet. Nous vous recontactons pour en discuter et organiser, si nécessaire, une visite." />
  <section class="sec" style="padding-top:20px"><div class="w with-aside">
    <div class="form-wrap"><QuoteForm :svc="svc" ctx="devis" /></div>
    <aside class="aside"><div><Ph k="roofers" cls="r-45" alt="Couvreurs au travail sur une toiture en ardoises" /></div><div><p class="label" style="margin-bottom:6px">Vous préférez appeler ?</p><ContactRows /></div><p class="note">Vos données servent uniquement à traiter votre demande. <RouterLink :to="P.confidentialite" style="text-decoration:underline">Politique de confidentialité</RouterLink>.</p></aside>
  </div></section>
</template>
