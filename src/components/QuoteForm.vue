<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { SERVICES } from '../data/content.js'
import { state } from '../store.js'

const props = defineProps({ svc: { type: String, default: '' }, ctx: String })
const router = useRouter()
const id = k => `${props.ctx}-${k}`

const d = reactive({ client: 'Particulier', svc: props.svc || '', cp: '', desc: '', surf: '', when: '', budget: '', name: '', tel: '', email: '', website: '', consent: false })
const bad = reactive({})
const els = {}
const files = ref([])
const over = ref(false)
const OK = /\.(jpe?g|png|heic|pdf)$/i, MAX = 10 * 1024 * 1024

function add(fl) {
  [...fl].forEach(file => {
    if (files.value.filter(x => !x.bad).length >= 8) return
    files.value.push({ name: file.name, size: file.size, bad: !OK.test(file.name) ? 'format non accepté' : file.size > MAX ? 'plus de 10 Mo' : '' })
  })
}
function onChange(e) { add(e.target.files); e.target.value = '' }
function onDrop(e) { over.value = false; if (e.dataTransfer) add(e.dataTransfer.files) }

const rules = [
  ['svc', v => !!v],
  ['cp', v => v.trim().length >= 2],
  ['desc', v => v.trim().length >= 20],
  ['name', v => v.trim().length >= 2],
  ['tel', v => /^[+0-9][0-9 ./()-]{7,}$/.test(v.trim())],
  ['email', v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())],
  ['consent', v => v === true]
]

function submit() {
  let first = null
  rules.forEach(([k, t]) => { const ok = t(d[k]); bad[k] = !ok; if (!ok && !first) first = els[k] })
  if (first) { first.focus(); first.scrollIntoView({ block: 'center', behavior: 'smooth' }); return }
  if (d.website) return
  state.lastLead = { client: d.client, svc: d.svc, cp: d.cp.trim(), desc: d.desc.trim(), surf: d.surf, budget: d.budget, when: d.when, files: files.value.filter(x => !x.bad).map(x => x.name), name: d.name.trim(), tel: d.tel.trim(), email: d.email.trim(), counted: false }
  router.push('/merci')
}
const inv = k => k in bad ? String(bad[k]) : null
</script>

<template>
  <form class="form qf" novalidate @submit.prevent="submit">
    <fieldset class="f full"><legend>Vous êtes</legend><div class="seg"><label><input v-model="d.client" type="radio" name="client" value="Particulier" :id="id('part')">Particulier</label><label><input v-model="d.client" type="radio" name="client" value="Professionnel" :id="id('pro')">Professionnel</label></div></fieldset>
    <div :class="['f', { bad: bad.svc }]"><label :for="id('svc')">Type de travaux *</label><select :ref="el => els.svc = el" v-model="d.svc" :id="id('svc')" name="svc" :aria-invalid="inv('svc')"><option value="">Choisir</option><option v-for="s in SERVICES" :key="s.slug" :value="s.slug">{{ s.short }}</option><option value="autre">Autre / plusieurs travaux</option></select><span class="err">Choisissez le type de travaux.</span></div>
    <div :class="['f', { bad: bad.cp }]"><label :for="id('cp')">Commune ou code postal *</label><input :ref="el => els.cp = el" v-model="d.cp" type="text" :id="id('cp')" name="cp" autocomplete="postal-code" :aria-invalid="inv('cp')"><span class="err">Indiquez la commune ou le code postal du chantier.</span></div>
    <div :class="['f full', { bad: bad.desc }]"><label :for="id('desc')">Votre projet *</label><textarea :ref="el => els.desc = el" v-model="d.desc" :id="id('desc')" name="desc" placeholder="Type de bâtiment, travaux envisagés, état actuel, attentes particulières" :aria-invalid="inv('desc')"></textarea><span class="err">Décrivez votre projet en quelques lignes (20 caractères minimum).</span></div>
    <div class="f"><label :for="id('surf')">Superficie <span class="opt">(facultatif)</span></label><input v-model="d.surf" type="text" :id="id('surf')" name="surf" placeholder="ex. 120 m²"></div>
    <div class="f"><label :for="id('when')">Date souhaitée <span class="opt">(facultatif)</span></label><select v-model="d.when" :id="id('when')" name="when"><option value="">À définir</option><option>Dès que possible</option><option>Dans les 3 mois</option><option>Dans 3 à 6 mois</option><option>Dans plus de 6 mois</option></select></div>
    <div class="f full"><label :for="id('budget')">Budget estimatif <span class="opt">(facultatif)</span></label><select v-model="d.budget" :id="id('budget')" name="budget"><option value="">Je ne sais pas encore</option><option>Moins de 25 000 €</option><option>25 000 – 75 000 €</option><option>75 000 – 150 000 €</option><option>150 000 – 300 000 €</option><option>Plus de 300 000 €</option></select></div>
    <div class="f full"><span class="lb">Photos ou plans <span class="opt">(facultatif)</span></span><div :class="['drop', { over }]" @dragenter.prevent="over = true" @dragover.prevent="over = true" @dragleave.prevent="over = false" @drop.prevent="onDrop"><strong>Ajouter des photos ou des plans</strong><span>JPG, PNG, HEIC ou PDF · 10 Mo max par fichier · 8 fichiers</span><input type="file" :id="id('files')" multiple accept=".jpg,.jpeg,.png,.heic,.pdf" aria-label="Ajouter des photos ou des plans" @change="onChange"></div><ul class="files"><li v-for="(x, i) in files" :key="i" :class="x.bad ? 'bad' : ''"><span>{{ x.name }} · {{ x.bad || (x.size / 1048576).toFixed(1) + ' Mo' }}</span><button type="button" @click="files.splice(i, 1)">Retirer</button></li></ul></div>
    <div :class="['f', { bad: bad.name }]"><label :for="id('name')">Nom et prénom *</label><input :ref="el => els.name = el" v-model="d.name" type="text" :id="id('name')" name="name" autocomplete="name" :aria-invalid="inv('name')"><span class="err">Indiquez votre nom et prénom.</span></div>
    <div :class="['f', { bad: bad.tel }]"><label :for="id('tel')">Téléphone *</label><input :ref="el => els.tel = el" v-model="d.tel" type="tel" :id="id('tel')" name="tel" autocomplete="tel" :aria-invalid="inv('tel')"><span class="err">Indiquez un numéro de téléphone valide.</span></div>
    <div :class="['f full', { bad: bad.email }]"><label :for="id('email')">E-mail *</label><input :ref="el => els.email = el" v-model="d.email" type="email" :id="id('email')" name="email" autocomplete="email" :aria-invalid="inv('email')"><span class="err">Indiquez une adresse e-mail valide, par ex. nom@exemple.be.</span></div>
    <div class="hp" aria-hidden="true"><label :for="id('web')">Site web</label><input v-model="d.website" type="text" :id="id('web')" name="website" tabindex="-1" autocomplete="off"></div>
    <div :class="['f full', { bad: bad.consent }]"><label class="check" style="text-transform:none;letter-spacing:0;font-size:.9rem;font-weight:400"><input :ref="el => els.consent = el" v-model="d.consent" type="checkbox" :id="id('consent')" name="consent" :aria-invalid="inv('consent')"><span>J’accepte que Kratos Steel House utilise ces informations pour traiter ma demande, conformément à la <RouterLink to="/confidentialite">politique de confidentialité</RouterLink>. *</span></label><span class="err">Votre accord est nécessaire pour traiter la demande.</span></div>
    <div class="full acts"><button class="btn" type="submit">Envoyer ma demande</button><span class="sub" style="font-size:.8rem">Maquette : aucune donnée n’est envoyée.</span></div>
  </form>
</template>
