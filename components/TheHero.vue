<template>
  <ULandingHero
    :ui="landingHeroUi"
    description="Escutar, otimizar recursos e apontar respostas com efetividade"
    orientation="horizontal"
    :links="[{ 
        label: 'Entre em Contato',
        size: 'xl',
        class: 'px-12 py-4',
        to: siteInfo.contact.linkWhatsapp,
        target: '_blank'
      }]"
  >
    <template #title>
      <div class="font-secondary" >
        <span class="text-primary">Planejamento,</span>
        cursos e gestão de pessoas
      </div>
    </template>
    <template #default>
      <NuxtImg src="/professor-paludo.png" sizes="100vw sm:50vw md:400px" class="m-auto" />
    </template>
    <template #bottom>
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex items-center flex-wrap sm:flex-nowrap py-6 justify-center gap-8 bg-primary dark:bg-gray-900 rounded-lg">
          <div v-for="{age, label} in skills" :key="label" class="text-white flex flex-col items-center">
            <div class="font-bold text-xl sm:text-4xl text-center">{{ age }}</div>
            <div class="font-bold text-sm	text-center">{{ label }}</div>
          </div>
        </div>
      </div>
    </template>
  </ULandingHero>
</template>

<script setup>
import { siteInfo } from '~/config/siteInfo';

// UI
const landingHeroUi = {
  wrapper: 'py-8 sm:py-6 md:py-6 lg:py-12 relative bg-dark-blue-50 dark:bg-black-rock-950 rounded-lg',
  title: 'text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl',
  description: 'mt-6 text-lg font-bold tracking-tight text-gray-500 dark:text-gray-400'
}

// Data
const skills = [
  {
    age: '30',
    label: 'anos de experiência'
  },
  {
    age: '30',
    label: 'anos de experiência'
  },
  {
    age: '30',
    label: 'anos de experiência'
  },
  {
    age: '30',
    label: 'anos de experiência'
  }
]
</script>