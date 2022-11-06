<!-- SubNav -->

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { SubNav } from '~/types'
const props = defineProps<{
  nav?: SubNav[]
}>()

const navData = [
  { title: "知识汇总", path: "/posts" },
  { title: "问题收集", path: "/question" },
  { title: "其他", path: "/ba" },
]

const data = computed(() => (props.nav || navData))

const inactiveStyle = 'opacity-20 hover:opacity-50'
const route = useRoute()
</script>
<template>
  <div class="sub-nav text-xl flex wrap gap-3  mb-0">
    <template v-for="(item, idx) in data" :key="idx">
      <router-link :to="item.path" class="!border-none !font-400"
        :class="route.path === item.path ? '' : inactiveStyle">
        {{ item.title }}
      </router-link>
    </template>
    <!-- <router-link to="/posts" class="!border-none !font-400" :class="route.path === '/posts' ? '' : inactiveStyle">
      知识汇总
    </router-link>
    <router-link to="/question" class="!border-none !font-400" :class="route.path === '/question' ? '' : inactiveStyle">
      问题收集
    </router-link>
    <router-link to="/" class="!border-none !font-400" :class="route.path === '/ba' ? '' : inactiveStyle">
      其他
    </router-link> -->
  </div>
</template>

<style  lang="scss">

</style>
