<script setup>
defineProps({ items: Array })
</script>

<template>
  <div class="faq"><details v-for="([q, a], i) in items" :key="i"><summary>{{ q }}<i aria-hidden="true"></i></summary><div class="a"><p>{{ a }}</p></div></details></div>
</template>
