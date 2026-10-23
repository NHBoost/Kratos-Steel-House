import { createSSRApp, createApp } from 'vue'
import App from './App.vue'
import { createKratosRouter } from './router.js'

// Fabrique commune : navigateur (hydratation du HTML pré-rendu) et pré-rendu (SSR)
export function createKratosApp(history, { hydrate = true } = {}) {
  const app = (hydrate ? createSSRApp : createApp)(App)
  const router = createKratosRouter(history)
  app.use(router)
  return { app, router }
}
