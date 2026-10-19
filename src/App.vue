<script setup>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { state } from './store.js'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import CookieBanner from './components/CookieBanner.vue'

const route = useRoute()
const router = useRouter()
const y = ref(0)
const onScroll = () => { y.value = window.scrollY }
const dark = computed(() => route.meta.dark !== false)

watch(() => state.menuOpen, o => document.body.classList.toggle('menu-open', o))

// Apparition au défilement (identique à bindView de la version d'origine)
let io
function reveal() {
  io?.disconnect()
  const els = document.querySelectorAll('#main .pc, #main .ph.r-169, #main .intro .p1, #main .intro .p2')
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.remove('pre'); io.unobserve(e.target) } }), { rootMargin: '0px 0px -8% 0px' })
    els.forEach(el => { const r = el.getBoundingClientRect(); if (r.top > innerHeight) { el.classList.add('rv', 'pre'); io.observe(el) } })
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  router.isReady().then(() => nextTick(reveal))
})
watch(() => route.fullPath, () => nextTick(() => { onScroll(); reveal() }))
onBeforeUnmount(() => { window.removeEventListener('scroll', onScroll); io?.disconnect() })
</script>

<template>
  <SiteHeader :solid="y > 60" :on-light="!dark" />
  <main id="main" tabindex="-1">
    <RouterView v-slot="{ Component }">
      <div class="view" :key="route.fullPath"><component :is="Component" /></div>
    </RouterView>
  </main>
  <SiteFooter />
  <div :class="['mbar', { show: y > 500 }]"><RouterLink to="/devis">Demander un devis</RouterLink></div>
  <CookieBanner />
  <div :class="['toast', { show: state.toast.show }]" role="status" aria-live="polite">{{ state.toast.msg }}</div>
</template>
