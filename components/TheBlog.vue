<template>
  <ULandingSection
    title="Blog"
    :ui="landingSectionUi"
  >
    <UButton class="absolute right-8" icon="i-heroicons-arrow-right-16-solid" variant="ghost" trailing>
      Ver tudo
    </UButton>
    <UBlogList orientation="horizontal">
      <UBlogPost
        title="Ainda faz sentido falar em planejamento estratégico?"
        description="O historiador da Universidade de Jerusalém, Yuval Noah Harari, que ganhou notoriedade global por suas obras de grande fôlego e abrangência de reflexão:..."
        date="Dec 25, 2023"
        orientation="vertical"
        :image="{ src: 'https://picsum.photos/640/360', alt: 'Nuxt 3.9' }"
        :authors="[{ name: 'Daniel Roe', avatar: { src: 'https://github.com/danielroe.png', target: '_blank' }, to: 'https://twitter.com/danielcroe' }]"
        :badge="{ label: 'Release' }"
        to="/blog"
      />
      <UBlogPost
        title="Ainda faz sentido falar em planejamento estratégico?"
        description="O historiador da Universidade de Jerusalém, Yuval Noah Harari, que ganhou notoriedade global por suas obras de grande fôlego e abrangência de reflexão:..."
        date="Dec 25, 2023"
        orientation="vertical"
        :image="{ src: 'https://picsum.photos/640/360', alt: 'Nuxt 3.9' }"
        :authors="[{ name: 'Daniel Roe', avatar: { src: 'https://github.com/danielroe.png', target: '_blank' }, to: 'https://twitter.com/danielcroe' }]"
        :badge="{ label: 'Release' }"
        to="/"
      />
      <UBlogPost
        title="Ainda faz sentido falar em planejamento estratégico?"
        description="O historiador da Universidade de Jerusalém, Yuval Noah Harari, que ganhou notoriedade global por suas obras de grande fôlego e abrangência de reflexão:..."
        date="Dec 25, 2023"
        orientation="vertical"
        :image="{ src: 'https://picsum.photos/640/360', alt: 'Nuxt 3.9' }"
        :authors="[{ name: 'Daniel Roe', avatar: { src: 'https://github.com/danielroe.png', target: '_blank' }, to: 'https://twitter.com/danielcroe' }]"
        :badge="{ label: 'Release' }"
        to="/"
      />
    </UBlogList>
  </ULandingSection>
</template>

<script setup>
const landingSectionUi = {
  title: 'text-3xl font-bold font-secondary tracking-tight text-primary dark:text-white sm:text-3xl lg:text-4xl text-left',
  container: 'gap-16 sm:gap-y-12 flex flex-col relative',
}
</script>