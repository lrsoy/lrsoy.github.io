<!-- SubNav -->

<script setup lang="ts">
import { useRoute } from 'vue-router'

const inactiveStyle = 'opacity-20 hover:opacity-50'
const route = useRoute()
</script>
<template>
  <div class="sub-nav text-xl flex wrap gap-3  mb-0">
    <router-link to="/posts" class="!border-none !font-400" :class="route.path === '/posts' ? '' : inactiveStyle">
      知识汇总
    </router-link>
    <router-link to="/question" class="!border-none !font-400" :class="route.path === '/question' ? '' : inactiveStyle">
      问题收集
    </router-link>
    <router-link to="/" class="!border-none !font-400" :class="route.path === '/ba' ? '' : inactiveStyle">
      其他
    </router-link>
  </div>
</template>

<style  lang="scss">

</style>
