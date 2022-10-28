<!-- ToggleTheme 切换主题-->

<script setup lang='ts'>
import { isDark } from '~/logics'

function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
    <Sun v-show="!isDark" />
    <Moon v-show="isDark" />
  </a>
</template>
