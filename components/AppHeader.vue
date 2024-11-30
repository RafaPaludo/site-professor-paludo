<template>
  <UHeader :links="links">
    <template #logo>
      
    </template>

    <template #right>
      <UColorModeButton class="mr-4" />
      <UButton class="px-8" size="xl" label="Contato" :to="siteInfo.contact.linkWhatsapp" target="_blank" />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content'
import { siteInfo } from '~/config/siteInfo';

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [{
  label: 'Início',
  icon: 'i-heroicons-book-open',
  to: '/'
}, {
  label: 'Sobre',
  to: '/sobre'
}, {
  label: 'Consultoria',
  to: '/consultoria',
  children: [{
    label: 'Planejamento Estratégico',
    to: '/consultoria/planejamento-estrategico',
    icon: 'i-material-symbols-light-query-stats-rounded'
  }, {
    label: 'Mediação',
    to: '/consultoria/mediacao',
    icon: 'i-material-symbols-light-source-environment-rounded',
  },{
    label: 'Gestão Recursos Humanos',
    to: '/consultoria/rh',
    icon: 'i-material-symbols-light-groups-2-outline',
  }]
}, {
  label: 'Cursos',
  to: '/cursos'
}, {
  label: 'Blog',
  to: '/blog'
}]
</script>