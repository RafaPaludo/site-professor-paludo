
<template>
  <UContainer v-if="page">
    <UPageHeader
      :ui="pageHeaderUI"
      v-bind="page"
      class="py-[50px]"
    />

    <UPageBody>
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
          :orientation="index === 0 ? 'horizontal' : 'vertical'"
          :class="[index === 0 && 'col-span-full']"
          :ui="{
            description: 'line-clamp-2'
          }"
        />
      </UBlogList>
    </UPageBody>
  </UContainer>
</template>

<script setup lang="ts">
// UI
const pageHeaderUI = {
  wrapper: 'relative text-center border-0 py-8',
  container: 'flex flex-col lg:flex-row lg:items-center lg:justify-center',
  headline: 'mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5',
  title: 'text-3xl sm:text-4xl font-bold text-primary dark:text-white tracking-tight text-center',
  description: 'mt-4 text-lg text-gray-500 dark:text-gray-400',
  icon: {
    wrapper: 'flex',
    base: 'w-10 h-10 flex-shrink-0 text-primary'
  },
  links: 'flex flex-wrap items-center gap-1.5 mt-4 lg:mt-0'
}


const { data: page } = await useAsyncData('blog', () => queryContent('/blog').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: posts } = await useAsyncData('posts', () => queryContent('/blog')
  .where({ _extension: 'md', _path: { $not: '/blog' }})
  .sort({ date: -1 })
  .find())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImageComponent('Saas')
</script>