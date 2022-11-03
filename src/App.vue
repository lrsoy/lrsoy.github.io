<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <main class="px-7 py-10">
    <div class="svg-bg"></div>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">

</style>
