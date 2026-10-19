<script setup>
import { src } from '../data/content.js'
defineProps({ k: String, cls: { type: String, default: 'r-43' }, alt: { type: String, default: '' }, z: Boolean, ill: Boolean, eager: Boolean })
</script>

<template>
  <div :class="['ph', cls, { z }]"><img :src="src(k)" :alt="alt" :loading="eager ? 'eager' : 'lazy'" decoding="async"><span v-if="ill" class="illus">Illustration</span></div>
</template>
