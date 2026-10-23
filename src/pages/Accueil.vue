<script setup>
import { P } from '../paths.js'
import { ref } from 'vue'
import { SERVICES, PROJECTS, SVC_IMG, REGIONS, FAQ, src } from '../data/content.js'
import Ph from '../components/Ph.vue'
import ProjCard from '../components/ProjCard.vue'
import Steps from '../components/Steps.vue'
import BeMap from '../components/BeMap.vue'
import FaqList from '../components/FaqList.vue'
import Cta from '../components/Cta.vue'

const active = ref(0)
const featured = [PROJECTS[2], PROJECTS[0], PROJECTS[1], PROJECTS[4]]
const featCls = ['r-32', 'r-45', 'r-34', 'r-169']
const reasons = [['Plus de 20 ans d’expérience', 'Une expertise développée sur de nombreux chantiers.'], ['Des centaines de réalisations', 'Un savoir-faire éprouvé sur le terrain.'], ['Finitions premium', 'Une attention particulière portée aux détails.'], ['Qualité et durabilité', 'Des matériaux sélectionnés et une exécution rigoureuse.'], ['Solutions sur mesure', 'Une approche adaptée à chaque bâtiment.'], ['Entreprise belge', 'Une forte présence à Bruxelles et dans les deux Brabants.']]
</script>

<template>
  <section class="hero"><div class="bg"><img :src="src('hero')" alt="Maison contemporaine au crépuscule" fetchpriority="high"></div>
    <div class="w">
      <p class="label" style="color:#E3E3E0;margin-bottom:22px">Entreprise générale · Construction &amp; rénovation</p>
      <h1>Construction &amp; Rénovation haut de gamme en Belgique</h1>
      <div class="hero-foot">
        <p>Depuis plus de 20 ans, Kratos Steel House donne vie à vos projets de construction et de rénovation avec exigence, savoir-faire et finitions premium. À Bruxelles, dans les deux Brabants et partout en Belgique.</p>
        <div class="acts"><RouterLink class="btn light" :to="P.devis">Demander un devis</RouterLink><RouterLink class="tl" :to="P.realisations">Nos réalisations</RouterLink></div>
      </div>
    </div>
  </section>

  <section class="sec"><div class="w intro">
    <div class="t"><p class="label" style="margin-bottom:32px">Kratos Steel House</p><p class="lede">Votre partenaire de confiance pour tous vos projets de construction et de rénovation. Un résultat durable, esthétique, parfaitement exécuté.</p><div class="acts"><RouterLink class="tl" :to="P.entreprise">Découvrir l’entreprise</RouterLink></div></div>
    <div class="p1"><Ph k="stair" cls="r-34" alt="Escalier en chêne dans un intérieur rénové" /></div>
    <div class="c"><p class="body-l sub">Forte de plus de 20 ans d’expérience, notre entreprise belge accompagne particuliers, architectes et investisseurs dans leurs travaux de construction, de rénovation complète, de toiture, de façade, d’isolation et d’extension.</p><p class="body-l sub mt-s">Notre exigence se retrouve dans chaque détail, du choix des matériaux jusqu’aux dernières finitions.</p></div>
    <div class="p2"><Ph k="brickModern" cls="r-169" alt="Maison contemporaine en briques" /></div>
  </div></section>

  <section class="sec s dark"><div class="w">
    <div class="figs"><div><strong>20+</strong><span>années d’expérience dans le bâtiment</span></div><div><strong>100<sup style="font-size:.4em;vertical-align:top;margin-left:4px">+</sup></strong><span>des centaines de réalisations menées à bien</span></div><div><strong>8</strong><span>métiers maîtrisés, un seul interlocuteur</span></div><div><strong>3</strong><span>régions principales : Bruxelles et les deux Brabants</span></div></div>
  </div></section>

  <section class="sec"><div class="w">
    <div class="head"><h2>Nos expertises</h2><p>Construire, rénover et transformer avec exigence. Chaque métier dispose de sa page détaillée.</p></div>
    <div class="sidx">
      <div class="slist"><RouterLink v-for="(s, i) in SERVICES" :key="s.slug" :class="['srow', { on: i === active }]" :to="P.service(s.slug)" @mouseenter="active = i"><h3>{{ s.short }}</h3><span class="more">Découvrir</span><p>{{ s.card }}</p></RouterLink></div>
      <div class="sview"><div class="ph"><img v-for="(s, i) in SERVICES" :key="s.slug" :src="src(SVC_IMG[s.slug][0])" :alt="s.short" :class="i === active ? 'on' : ''" loading="lazy"></div><div class="cap"><span>{{ SERVICES[active].short }}</span><span>Bruxelles · Brabants</span></div></div>
    </div>
  </div></section>

  <section class="sec stone"><div class="w">
    <div class="head"><h2>Des projets qui témoignent de notre savoir-faire.</h2><RouterLink class="tl" :to="P.realisations">Toutes les réalisations</RouterLink></div>
    <div class="pgrid feat"><ProjCard v-for="(p, i) in featured" :key="p.id" :p="p" :cls="featCls[i]" /></div>
  </div></section>

  <section class="sec"><div class="w split top">
    <div class="tx"><p class="label">Pourquoi nous choisir</p><h2>Des réalisations durables. Des finitions irréprochables.</h2></div>
    <div><ul class="lines"><li v-for="(x, i) in reasons" :key="i"><span>0{{ i + 1 }}</span><div><strong style="font-weight:500">{{ x[0] }}</strong><br><span style="color:var(--grey);font-size:.95rem;min-width:0;padding:0">{{ x[1] }}</span></div></li></ul></div>
  </div></section>

  <section class="sec white"><div class="w">
    <div class="head"><h2>Notre méthode</h2><p>De la conception aux dernières finitions, une exigence de qualité à chaque étape.</p></div>
    <Steps />
  </div></section>

  <section class="sec"><div class="w split">
    <div class="map"><BeMap /></div>
    <div class="tx"><p class="label">Zones d’intervention</p><h2>Une expertise locale, un savoir-faire dans toute la Belgique.</h2>
      <div class="regions"><div v-for="r in REGIONS" :key="r.k" class="region"><h3>{{ r.name }}</h3><p>{{ r.communes.slice(0, 6).join(', ') }}…</p></div><div class="region"><h3>Toute la Belgique</h3><p>Projets étudiés selon leur nature et leur importance.</p></div></div>
      <div><RouterLink class="tl" :to="P.zones">Toutes les communes</RouterLink></div></div>
  </div></section>

  <section class="sec s stone"><div class="w quote-empty"><div class="qm" aria-hidden="true">“</div><div><p class="lede" style="max-width:34ch">Cet espace accueillera les témoignages authentiques de nos clients : prénom, commune et type de travaux.</p><p class="sub mt-s">Seuls des avis réels, publiés avec l’accord des clients, y figureront.</p></div></div></section>

  <section class="sec"><div class="w split top"><div class="tx"><h2>Questions fréquentes</h2><p class="sub">Vous ne trouvez pas votre réponse ? Parlez-nous de votre projet.</p><div><RouterLink class="tl" :to="P.faq">Toute la FAQ</RouterLink></div></div><FaqList :items="FAQ.slice(0, 5)" /></div></section>
  <Cta />
</template>
