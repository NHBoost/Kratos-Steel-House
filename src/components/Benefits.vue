<script setup>
defineProps({ items: Array })
</script>

<template>
  <div class="bens"><div v-for="(b, i) in items" :key="i"><h3>{{ b[0] }}</h3><p>{{ b[1] }}</p></div></div>
</template>
