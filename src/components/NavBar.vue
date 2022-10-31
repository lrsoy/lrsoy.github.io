<!-- NavBar 导航条-->

<script setup lang="ts">
</script>
<template>
  <header>
    <router-link to="/" focusable="false" class="logo-icon">
      <img src="/logo-removebg-preview.png" alt="">
    </router-link>
    <nav class="nav">
      <router-link to="/posts" title="Blog">
        <span>Blog</span>
      </router-link>
      <ToggleTheme />
    </nav>
  </header>
</template>

<style lang="scss">
header {
  @apply w-full z-40;

  .logo-icon {
    @apply fixed;
    outline: 2px solid transparent;
    outline-offset: 2px;
    user-select: none;

    img {
      @apply w-20 h-20 m-1;
    }
  }

  nav {
    @apply w-full p-8 box-border flex justify-end items-center gap-5;
  }
}
</style>  