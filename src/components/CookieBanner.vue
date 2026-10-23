<script setup>
import { P } from '../paths.js'
import { ref, watch, onMounted } from 'vue'
import { state, store, showCookie, saveConsent } from '../store.js'

const an = ref(false), ad = ref(false)
watch(() => [state.cookie.open, state.cookie.prefs], ([open]) => {
  if (!open) return
  const st = store.get('ksh_consent') || {}
  an.value = !!st.analytics
  ad.value = !!st.ads
})
function onSet() {
  if (!state.cookie.prefs) state.cookie.prefs = true
  else saveConsent(an.value, ad.value)
}
onMounted(() => { if (!store.get('ksh_consent')) setTimeout(() => showCookie(false), 1400) })
</script>

<template>
  <div class="cookie" id="cookie" :hidden="!state.cookie.open" role="dialog" aria-labelledby="ck-t">
    <h4 id="ck-t">Cookies</h4>
    <p>Nous utilisons des cookies nécessaires et, avec votre accord, des cookies de mesure d’audience et publicitaires. <RouterLink :to="P.cookies">En savoir plus</RouterLink></p>
    <div class="prefs" :hidden="!state.cookie.prefs">
      <label>Nécessaires <input type="checkbox" checked disabled></label>
      <label for="ck-an">Mesure d’audience <input v-model="an" type="checkbox" id="ck-an"></label>
      <label for="ck-ad">Publicité <input v-model="ad" type="checkbox" id="ck-ad"></label>
    </div>
    <div class="row"><button class="btn" type="button" id="ck-all" @click="saveConsent(true, true)">Accepter</button><button class="lk" type="button" id="ck-none" @click="saveConsent(false, false)">Refuser</button><button class="lk" type="button" id="ck-set" @click="onSet">{{ state.cookie.prefs ? 'Enregistrer' : 'Personnaliser' }}</button></div>
  </div>
</template>
