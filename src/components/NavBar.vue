<!-- NavBar 导航条-->

<script setup lang="ts">
</script>
<template>
  <header>
    <nav>
      <router-link to="/" title="Blog">
        <span>/</span>
      </router-link>
      <router-link to="/posts" title="Blog">
        <span>Blog</span>
      </router-link>
      <a href="https://www.instagram.com/lrsoy_/" target="_blank" title="Instagram">
        <Ins />
      </a>
      <a href="https://github.com/lrsoy" target="_blank" title="Github">
        <Github />
      </a>
      <ToggleTheme />
    </nav>
  </header>
</template>

<style lang="scss">
header {
  nav {
    @apply w-full p-8 box-border flex justify-end gap-5;

    a {
      @apply text-[#787878];
    }
  }
}
</style>  