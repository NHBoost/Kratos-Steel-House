import { reactive } from 'vue'
import { fromKey } from './paths.js'

const browser = typeof window !== 'undefined'

export const store = {
  get(k) { try { return JSON.parse(localStorage.getItem(k)) } catch (e) { return null } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) {} }
}

export const state = reactive({
  lastLead: null,
  menuOpen: false,
  toast: { msg: '', show: false },
  cookie: { open: false, prefs: false }
})

if (browser) window.dataLayer = window.dataLayer || []
export function track(event, params = {}) {
  if (!browser) return
  const c = store.get('ksh_consent')
  if (c && c.analytics) window.dataLayer.push({ event, ...params })
}

let toastTimer
export function toast(msg) {
  state.toast.msg = msg
  state.toast.show = true
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { state.toast.show = false }, 4000)
}

export function showCookie(prefs) {
  state.cookie.open = true
  state.cookie.prefs = prefs
}

export function saveConsent(an, ad) {
  store.set('ksh_consent', { analytics: an, ads: ad, at: new Date().toISOString() })
  state.cookie.open = false
}

export function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

// Clé de page ('accueil', 'services', 'projet-x'…) -> URL publique
export const to = fromKey
