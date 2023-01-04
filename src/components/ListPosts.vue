<!-- ListPosts 列表组件 -->

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { englishOnly, formatDate } from '~/logics'
import type { Post } from '~/types'
const props = defineProps<{
  address?: string
  type?: string
  posts?: Post[]
}>()

const router = useRouter()

const routes: Post[] = router.getRoutes()
  .filter(f => f.path.startsWith(props.address as string) && f.meta.frontmatter.date)
  .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))
  .filter(i => !i.path.endsWith('.html') && i.meta.frontmatter.type === props.type)
  .map(i => ({
    path: i.path,
    title: i.meta.frontmatter.title,
    date: i.meta.frontmatter.date,
    lang: i.meta.frontmatter.lang,
    duration: i.meta.frontmatter.duration,
    recording: i.meta.frontmatter.recording,
    upcoming: i.meta.frontmatter.upcoming,
  }))

const posts = computed(() => (props.posts || routes))
const getYear = (a: Date | string | number) => new Date(a).getFullYear()
const isSameYear = (a: Date | string | number, b: Date | string | number) => a && b && getYear(a) === getYear(b)
</script>

<template>
  <ul>
    <template v-for="route, idx in posts" :key="route.path">
      <div v-if="!isSameYear(route.date, posts[idx - 1]?.date)" class="h-20 relative" pointer-events-none>
        <span text-8em op10 absolute left--3rem top--2rem font-bold>{{ getYear(route.date) }}</span>
      </div>
      <router-link class="item block font-normal mb-6 mt-2 no-underline" :to="route.path">
        <li class="no-underline">
          <div class="title text-lg leading-1.2em">
            <span align-middle>{{ route.title }}</span>
          </div>
          <div class="time opacity-50 text-sm">
            {{ formatDate(route.date) }}
            <span v-if="route.duration" op80>· {{ route.duration }}</span>
            <span v-if="route.platform" op80>· {{ route.platform }}</span>
          </div>
        </li>
      </router-link>
    </template>
  </ul>
</template>

<style  scoped>

</style>
