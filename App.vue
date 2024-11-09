<template>
  <AppHeader />

  <UMain>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UMain>

  <AppFooter />
</template>

<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(), { default: () => [] })
provide('navigation', navigation)
</script>