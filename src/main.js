import { createWebHistory } from 'vue-router'
import { createKratosApp } from './app.js'
import { fromKey } from './paths.js'
import './assets/styles.css'

// Anciennes adresses en hash (#/services, #projet-x…) : chargement de la vraie page pré-rendue
const h = location.hash.replace(/^#\/?/, '')
const legacy = h && !['lp-form', 'conseils'].includes(h)

if (legacy) {
  const [key, query] = h.split('?')
  location.replace(fromKey(key) + (query ? '?' + query : ''))
} else {
  const root = document.getElementById('app')
  const { app, router } = createKratosApp(createWebHistory(), { hydrate: !!root.firstElementChild })
  router.isReady().then(() => app.mount(root))
}
