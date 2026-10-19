import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base './' : le build fonctionne depuis n'importe quel dossier (routes en hash, comme l'original)
export default defineConfig({
  base: './',
  plugins: [vue()]
})
