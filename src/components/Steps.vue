<script setup>
import { STEPS } from '../data/content.js'
</script>

<template>
  <div class="steps"><div v-for="(s, i) in STEPS" :key="i" class="step"><div class="n">{{ i + 1 }}</div><h3>{{ s[0] }}</h3><p>{{ s[1] }}</p></div></div>
</template>
