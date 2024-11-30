<template>
  <ULandingSection
    title="Blog"
    :ui="landingSectionUi"
    v-if="posts"
  >
    <UButton class="absolute right-8" icon="i-heroicons-arrow-right-16-solid" variant="ghost" trailing to="/blog">
      Ver tudo
    </UButton>
    
    <UBlogList>
      <UBlogPost
        v-for="(post, index) in posts"
        :key="index"
        :to="post._path"
        :title="post.title"
        :description="post.description"
        :image="post.image"
        :date="new Date(post.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })"
        :authors="post.authors"
        :badge="post.badge"
        :ui="{
          description: 'line-clamp-2'
        }"
      />
    </UBlogList>
  </ULandingSection>
</template>

<script setup>
// UI
const landingSectionUi = {
  title: 'text-3xl font-bold font-secondary tracking-tight text-primary dark:text-white sm:text-3xl lg:text-4xl text-left',
  container: 'gap-16 sm:gap-y-12 flex flex-col relative',
}

// Content
const { data: posts } = await useAsyncData('posts', () => queryContent('/blog')
  .where({ _extension: 'md', _path: { $not: '/blog' }})
  .sort({ date: -1 })
  .find())

defineOgImageComponent('Saas')
</script>