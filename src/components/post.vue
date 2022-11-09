<!-- Post 内容区域，具体怎么实现的还在考察 -->

<script setup lang="ts">
import { useSessionStorage, useStorage } from '@vueuse/core'
import { computed, onUnmounted, ref, watch } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { formatDate } from '~/logics'
const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})
const path = useStorage('path', '/') // 上一个路由路径
onBeforeRouteLeave((to, from) => { // to 去哪里 ， from 从哪里来的
  if (from)
    path.value = from.fullPath
})

const router = useRouter()
const route = useRoute()
const content = ref<HTMLDivElement>()
const link = computed(() => {
  const i = route.path.split('/').slice(0, -1).join('/')
  const isHas = router.getRoutes().some(s => s.path === i)
  if (!isHas) {
    if (path.value.split('/').slice(0, -1).length > 1)
      return '/'

    return path.value
  }
  return i
})
</script>

<template>
  <div v-if="frontmatter.display ?? frontmatter.title" class="titles prose">
    <h1 class="mb-0">
      {{ frontmatter.display ?? frontmatter.title }}
    </h1>
    <p v-if="frontmatter.date" class="opacity-50 !-mt-2">
      {{ formatDate(frontmatter.date) }}
    </p>
    <p v-if="frontmatter.subtitle" class="opacity-50 !-mt-6 italic">
      {{ frontmatter.subtitle }}
    </p>
  </div>
  <article ref="content">
    <slot />
  </article>
  <div v-if="route.path !== '/'" class="go-back prose">
    <router-link :to="link || '/'" class="font-mono no-underline opacity-50 hover:opacity-75">
      cd ..
    </router-link>
  </div>
</template>

<style lang="scss">
.titles {
  @apply m-auto mb-2 p-[25px];
}

.go-back {
  @apply m-auto mt-2 p-[25px];
}
</style>
