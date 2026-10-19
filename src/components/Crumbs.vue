<script setup>
import { to } from '../store.js'
defineProps({ items: Array })
</script>

<template>
  <ol class="crumbs" aria-label="Fil d’Ariane">
    <template v-for="(it, i) in items" :key="i">
      <li v-if="i < items.length - 1"><RouterLink :to="to(it[1])">{{ it[0] }}</RouterLink></li>
      <li v-else aria-current="page">{{ it[0] }}</li>
    </template>
  </ol>
</template>
