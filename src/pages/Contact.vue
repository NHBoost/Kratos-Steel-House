<script setup>
import { reactive } from 'vue'
import { CO } from '../data/content.js'
import { track, toast } from '../store.js'
import PageHead from '../components/PageHead.vue'
import ContactRows from '../components/ContactRows.vue'

const blank = () => ({ name: '', email: '', tel: '', msg: '', consent: false })
const d = reactive(blank())
const bad = reactive({})
const els = {}
const rules = [['name', v => v.trim().length >= 2], ['email', v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())], ['msg', v => v.trim().length >= 5], ['consent', v => v === true]]

function submit() {
  let first = null
  rules.forEach(([k, t]) => { const ok = t(d[k]); bad[k] = !ok; if (!ok && !first) first = els[k] })
  if (first) { first.focus(); return }
  track('contact', { method: 'form' })
  Object.assign(d, blank())
  toast('Message enregistré (maquette). Sur le site réel, il est transmis à l’équipe par e-mail.')
}
</script>

<template>
  <PageHead :crumbs="[['Accueil', 'accueil'], ['Contact']]" h1="Contact" lede="Une question, un projet à évoquer ? Écrivez-nous ou appelez-nous." />
  <section class="sec" style="padding-top:20px"><div class="w split top">
    <div class="tx"><ContactRows /><div class="contact-rows"><div><span>Adresse</span><strong>{{ CO.address }}</strong><i></i></div><div><span>BCE / TVA</span><strong>{{ CO.bce }}</strong><i></i></div></div><div class="acts"><RouterLink class="btn" to="/devis">Demande de devis détaillée</RouterLink></div></div>
    <div class="form-wrap"><h2 style="font-size:1.9rem;margin-bottom:10px">Message rapide</h2><p class="sub" style="margin-bottom:36px">Pour une demande de prix, préférez le formulaire de devis.</p>
      <form class="form" id="qform" novalidate @submit.prevent="submit">
        <div :class="['f full', { bad: bad.name }]"><label for="q-name">Nom et prénom *</label><input :ref="el => els.name = el" v-model="d.name" type="text" id="q-name" name="name" autocomplete="name"><span class="err">Indiquez votre nom.</span></div>
        <div :class="['f', { bad: bad.email }]"><label for="q-email">E-mail *</label><input :ref="el => els.email = el" v-model="d.email" type="email" id="q-email" name="email" autocomplete="email"><span class="err">Indiquez une adresse e-mail valide.</span></div>
        <div class="f"><label for="q-tel">Téléphone <span class="opt">(facultatif)</span></label><input v-model="d.tel" type="tel" id="q-tel" name="tel" autocomplete="tel"></div>
        <div :class="['f full', { bad: bad.msg }]"><label for="q-msg">Message *</label><textarea :ref="el => els.msg = el" v-model="d.msg" id="q-msg" name="msg"></textarea><span class="err">Écrivez votre message.</span></div>
        <div :class="['f full', { bad: bad.consent }]"><label class="check" style="text-transform:none;letter-spacing:0;font-size:.9rem"><input :ref="el => els.consent = el" v-model="d.consent" type="checkbox" id="q-consent"><span>J’accepte que mes données soient utilisées pour répondre à ma demande, conformément à la <RouterLink to="/confidentialite">politique de confidentialité</RouterLink>. *</span></label><span class="err">Votre accord est nécessaire pour traiter le message.</span></div>
        <div class="full"><button class="btn" type="submit">Envoyer</button></div>
      </form>
    </div>
  </div></section>
</template>
