<script setup>
import { reactive } from 'vue'
import { CO } from '../data/content.js'
import { track, toast } from '../store.js'

const rows = [
  ['Téléphone', CO.phone, 'à confirmer', 'click_phone'],
  ['E-mail', CO.email, 'à confirmer', 'contact'],
  ['WhatsApp', CO.whatsapp, 'si retenu', 'click_whatsapp'],
  ['Horaires', CO.hours, '', '']
]
const copied = reactive({})

function copy(v, ev) {
  track(ev || 'contact', { method: 'copy' })
  try {
    navigator.clipboard.writeText(v).then(() => {
      copied[v] = true
      setTimeout(() => { copied[v] = false }, 1600)
    }, () => toast(v))
  } catch (err) { toast(v) }
}
</script>

<template>
  <div class="contact-rows">
    <div v-for="[k, v, note, ev] in rows" :key="k"><span>{{ k }}</span><strong>{{ note ? v + ' ' : v }}<small v-if="note" style="font-size:.7rem;opacity:.6;font-family:var(--f-b)">({{ note }})</small></strong><button v-if="ev" type="button" @click="copy(v, ev)">{{ copied[v] ? 'Copié' : 'Copier' }}</button><i v-else></i></div>
  </div>
</template>
