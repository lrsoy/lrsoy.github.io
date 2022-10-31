<!-- Post 内容区域，具体怎么实现的还在考察-->
<script setup lang="ts">
import { formatDate } from '~/logics'

const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})

const router = useRouter()
const route = useRoute()
const content = ref<HTMLDivElement>()


console.log(frontmatter, 'aaaa');


</script>
<template>
  <div class="lrsoy-prose">
    <div class="titles">
      <h1 class="mb-0">{{ frontmatter.title ?? frontmatter.display }}</h1>
      <p v-if="frontmatter.date" class="opacity-50 !-mt-2">
        {{ formatDate(frontmatter.date) }}
      </p>
      <p v-if="frontmatter.subtitle" class="opacity-50 !-mt-6 italic">{{ frontmatter.subtitle }}</p>
    </div>
    <article ref="content">
      <slot></slot>
    </article>
    <div>
      返回
    </div>
  </div>
</template>

<style lang="scss">
.lrsoy-prose {
  // background: rgba(255, 255, 255, 0.05);
  // backdrop-filter: blur(10px);
  // transition: 0.5s;
}
</style>
