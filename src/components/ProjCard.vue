<script setup>
import { P } from '../paths.js'
import { PROJ_IMG } from '../data/content.js'
import Ph from './Ph.vue'
defineProps({ p: Object, cls: { type: String, default: 'r-43' }, out: Boolean })
</script>

<template>
  <RouterLink :class="['pc', { out }]" :to="P.project(p.id)" :data-cat="p.cat"><Ph :k="PROJ_IMG[p.id][0]" :cls="cls" :alt="p.name" ill /><div class="meta"><h3>{{ p.name }}</h3><span class="loc">{{ p.loc }}</span></div><p class="kind">{{ p.catL }}</p></RouterLink>
</template>
