<template>
  <div id="app" :class="cls">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const {isMidsize, isMobile, isDesktop} = useMobile();

const cls = computed(() => ({
  'mobile': isMobile.value,
  'desktop': isDesktop.value,
  'midsize': isMidsize.value,
}))
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
</style>