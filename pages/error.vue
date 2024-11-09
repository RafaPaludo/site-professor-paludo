<template>
  <UHeader />

  <UMain>
    <UPage>
      <UPageError
        :error="error"
        :status="404"
        name="Ops, página não encontrada"
        message="A página que você estava procurando não existe."
      />
    </UPage>
  </UMain>

  <UFooter />
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()
</script>