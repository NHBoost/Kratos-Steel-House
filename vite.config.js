import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// URL réelles (/fr/...) : les ressources sont servies depuis la racine du domaine
export default defineConfig({
  base: '/',
  plugins: [vue()]
})
