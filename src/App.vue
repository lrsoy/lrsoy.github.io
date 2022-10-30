<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="lrsoy-continer">
    <NavBar />
    <main class="px-7 py-10">
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss">
.lrsoy-continer {}
</style>
