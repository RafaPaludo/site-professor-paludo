<template>
  <UHeader :links="links">
    <template #logo>
      
    </template>

    <template #right>
      <UColorModeButton />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

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