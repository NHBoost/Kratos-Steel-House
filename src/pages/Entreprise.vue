<script setup>
import PageHead from '../components/PageHead.vue'
import Ph from '../components/Ph.vue'
import Cta from '../components/Cta.vue'

const values = [['Exigence', 'La précision d’exécution, du gros œuvre jusqu’aux finitions.'], ['Transparence', 'Des propositions claires, un interlocuteur identifié, des échanges réguliers.'], ['Durabilité', 'Des matériaux sélectionnés pour durer et des techniques éprouvées.'], ['Accompagnement', 'Une approche personnalisée, adaptée à chaque bâtiment et à chaque client.']]
</script>

<template>
  <PageHead img="plans" :crumbs="[['Accueil', 'accueil'], ['Notre entreprise']]" label="Notre entreprise" h1="Plus de 20 ans de passion, d’expertise et d’exigence dans le bâtiment." />
  <section class="sec"><div class="w intro">
    <div class="t"><p class="lede">Une entreprise belge de construction et de rénovation générale, animée par une ambition constante : des travaux de qualité supérieure et des projets durables.</p></div>
    <div class="p1"><Ph k="detail" cls="r-34" alt="Détail architectural" /></div>
    <div class="c"><p class="body-l sub">Forte de plus de deux décennies d’expérience, notre équipe met son savoir-faire au service de la construction, de la rénovation, de la toiture, de la façade, de l’isolation et de l’extension de bâtiments.</p><p class="body-l sub mt-s">Nous accordons une attention particulière à chaque étape d’un chantier, à la qualité des matériaux et à la précision des finitions.</p><p class="body-l sub mt-s">Principalement active à Bruxelles, dans le Brabant flamand et dans le Brabant wallon, l’entreprise intervient également partout en Belgique pour des projets d’envergure.</p></div>
    <div class="p2"><Ph k="scaffold" cls="r-32" alt="Chantier de rénovation" /></div>
  </div></section>
  <section class="sec stone"><div class="w"><div class="head"><h2>Valeurs et engagements</h2></div>
    <div class="vals"><div v-for="v in values" :key="v[0]"><h3>{{ v[0] }}</h3><p>{{ v[1] }}</p></div></div></div></section>
  <section class="sec"><div class="w"><div class="head"><h2>L’équipe</h2><p>Les portraits des responsables et des équipes au travail prendront place ici dès qu’ils seront disponibles.</p></div><div class="team"><div>Direction</div><div>Conduite de travaux</div><div>Équipe toiture</div><div>Équipe gros œuvre</div></div></div></section>
  <section class="sec white"><div class="w split"><div><Ph k="kitchen" cls="r-43" alt="Intérieur rénové haut de gamme" z /></div><div class="tx"><p class="label">Matériaux et finitions</p><h2>La qualité se voit dans les détails.</h2><p class="sub body-l">Raccords d’étanchéité, angles de façade, alignement des ardoises, jonctions entre l’ancien et le nouveau : c’est là que se joue la différence entre un chantier correct et un chantier haut de gamme.</p></div></div></section>
  <Cta />
</template>
