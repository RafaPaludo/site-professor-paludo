<template>
  <!-- Hero -->
  <TheHero />

  <!-- Histórico -->
  <TheExperience />

  <!-- Consultoria -->
  <TheConsultancy />

  <!-- Cursos -->
  <TheCourses />

  <!-- Blog -->
  <TheBlog />

  <!-- Contato -->
  <TheContato />
</template>

<script setup>
// Content
const { data: page } = await useAsyncData('home', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>