<!-- Post 内容区域，具体怎么实现的还在考察-->
<script setup lang="ts">
import { formatDate } from '~/logics'

const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})

console.log(frontmatter, 'aaaa');


</script>
<template>
  <div class="lrsoy-prose">
    <div class="titles">
      <h1 class="mb-0">{{ frontmatter.title ?? frontmatter.display }}</h1>
    </div>
    <article ref="content">
      <slot></slot>
    </article>
    <div>
      返回
    </div>
  </div>
</template>

<style  scoped>

</style>
