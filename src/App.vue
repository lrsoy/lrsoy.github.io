<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <NavBar />
  <main class="px-7 py-10">
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
// #app {
//   @apply absolute -z-10 w-screen h-screen overflow-x-hidden overflow-y-hidden;
//   background-image: url('/app-bg2.jpg');
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center 0;
//   background-attachment: fixed;

//   &:hover {
//     overflow-y: overlay;
//   }

//   &::-webkit-scrollbar {
//     width: 6px;
//   }

//   // 背景
//   &::-webkit-scrollbar-track {
//     background-color: #242424;
//   }

//   // 滑块
//   &::-webkit-scrollbar-thumb {
//     border-radius: 10px;
//     background-color: #787878;
//   }
// }
</style>
