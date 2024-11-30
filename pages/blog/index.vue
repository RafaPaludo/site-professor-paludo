<template>
  <main>
    <ContentDoc>
      <ULandingSection
        v-for="{ article: { id, title, text, publishDate, authors } , _path } in mainArticle"
        :key="id"
        :title="title"
        :ui="landingSectionUi"
      >
        <UBlogPost
          :date="publishDate"
          orientation="horizontal"
          :image="{ src: 'https://picsum.photos/640/360', alt: 'Nuxt 3.9' }"
          :authors="authors"
          :to="_path"
          :ui="featureBlogPostUi"
        >
          <template #title>
            <!-- Essa div é necessária para evitar erro de hydration no servidor -->
            <div>
              <h3 class="uppercase text-sm tracking-wider	text-gray-400 dark:text-white mb-2">Publicação em Destaque</h3>
              <h2 class="text-3xl text-primary dark:text-white">
                {{ title }}
              </h2>
            </div>
          </template>
          <template #description>
            <div>
              {{ text }}
            </div>
          </template>
        </UBlogPost>

        <h2 class="text-4xl font-bold text-primary dark:text-white">
          Principais publicações
        </h2>

        <UBlogList orientation="horizontal" v-if="articles">
          <UBlogPost
            v-for="{ article: { id, title, text, publishDate, authors, category } , _path } in articles"
            :key="id"
            :title="title"
            :description="text"
            :date="publishDate"
            orientation="vertical"
            :image="{ src: 'https://picsum.photos/640/360', alt: 'Nuxt 3.9' }"
            :authors="authors"
            :badge="{ label: category, size: 'md' }"
            :to="_path"
            :ui="featureBlogPostUi"
          />
        </UBlogList>
      </ULandingSection>
    </ContentDoc>
  </main>
</template>
<script setup lang="ts">
// Datas
const { data } = await useAsyncData('home', () => queryContent('/blog').where({ _path: { $not: '/blog' }  }).find())

const mainArticle = computed(() => {
  if (!data.value) return false

  return [data?.value[0]]
})

const articles = computed(() => {
  if (!data.value) return false

  return data?.value
    .filter((_, index) => index !== 0)
})

// UIs
const landingSectionUi = {
  title: 'text-3xl font-bold font-secondary tracking-tight text-primary dark:text-white sm:text-3xl lg:text-4xl text-left',
  container: 'gap-16 sm:gap-y-12 flex flex-col relative',
}

const featureBlogPostUi = {
  description: 'line-clamp-3',
}
</script>