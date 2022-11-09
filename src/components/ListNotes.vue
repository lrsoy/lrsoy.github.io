<!-- ListNotes 笔记菜单列表 -->

<script setup lang="ts">
defineProps<{ notes: Record<string, any[]> }>()
</script>

<template>
  <template v-for="key in Object.keys(notes)" :key="key">
    <h4 class="mt-10 font-bold">
      {{ key }}
    </h4>
    <div class="notes">
      <router-link
        v-for="(item, index) in notes[key]" :key="index" :to="item.link"
        class="item relative flex items-center" :title="item.name"
      >
        <div v-if="item.icon" class="pt-2 pr-5">
          <div class="text-3xl opacity-50 " :class="item.icon || 'i-carbon-unknown'" />
        </div>
        <span class="text-base " />
        <div class="flex-auto">
          <div class="text-normal">
            {{ item.name }}
          </div>
          <div class="desc text-sm opacity-50 font-normal" v-html="item.desc" />
        </div>
      </router-link>
    </div>
  </template>
</template>

<style lang="scss">
.notes {
  @apply grid grid-cols-3 gap-2 py-2;

  a.item {
    padding: 0.8em 1em;
    background: transparent;
    font-size: 1.1rem;

  }

  a.item:hover {
    background: #88888808;
  }
}
</style>

