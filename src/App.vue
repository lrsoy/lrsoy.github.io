<script setup lang="ts">
import { useHead } from '@vueuse/head'
import NavBar from './components/NavBar.vue'

useHead({
  meta: [
    { property: 'og:title', content: 'Lrsoy_' },
    { name: 'description', content: 'Ying Lau\'s Taking notes' },
  ],
})
</script>

<template>
  <NavBar />
  <main class="px-7 py-10">
    <div class="svg-bg" />
    <router-view />
  </main>
</template>

<style lang="scss">

</style>
