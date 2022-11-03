<!-- Post 内容区域，具体怎么实现的还在考察-->

<script setup lang="ts">
import { formatDate } from '~/logics'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})

const router = useRouter()
const route = useRoute()
const content = ref<HTMLDivElement>()



</script>
<template>
  <div class="titles prose" v-if="frontmatter.display ?? frontmatter.title">
    <h1 class="mb-0">{{ frontmatter.display ?? frontmatter.title }}</h1>
    <p v-if="frontmatter.date" class="opacity-50 !-mt-2">
      {{ formatDate(frontmatter.date) }}
    </p>
    <p v-if="frontmatter.subtitle" class="opacity-50 !-mt-6 italic">{{ frontmatter.subtitle }}</p>
  </div>
  <article ref="content">
    <slot></slot>
  </article>
  <div v-if="route.path !== '/'" class="go-back prose">
    <router-link :to="route.path.split('/').slice(0, -1).join('/') || '/'"
      class="font-mono no-underline opacity-50 hover:opacity-75">cd ..</router-link>
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
