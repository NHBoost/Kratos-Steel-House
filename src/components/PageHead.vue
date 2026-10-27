<script setup>
import { src, srcset } from '../data/content.js'
import Crumbs from './Crumbs.vue'
defineProps({ img: String, crumbs: Array, label: String, h1: String, lede: String })
</script>

<template>
  <section v-if="img" class="phd"><div class="bg"><img :src="src(img)" :srcset="srcset(img)" sizes="100vw" alt="" fetchpriority="high"></div><div class="w"><Crumbs :items="crumbs" /><p v-if="label" class="label" style="margin-bottom:18px">{{ label }}</p><h1>{{ h1 }}</h1><p v-if="lede" class="lede">{{ lede }}</p><slot /></div></section>
  <section v-else class="phd plain"><div class="w"><Crumbs :items="crumbs" /><h1>{{ h1 }}</h1><p v-if="lede" class="lede">{{ lede }}</p></div></section>
</template>
