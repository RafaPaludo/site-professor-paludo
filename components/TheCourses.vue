<template>
  <UContainer :ui="containerUi">
    <h2
      id="cursos"
      class="text-3xl font-bold font-secondary tracking-tight text-primary dark:text-white sm:text-3xl lg:text-4xl text-left"
    >Cursos para o fortalecimento das organizações</h2>

    <UCarousel
      :items="items"
      :ui="carouselUi"
      arrows
      indicators
    >
      <template #default="{ item, index }">
        <ComposedCourseCard :item="item" :index="index" />
      </template>

      <template #prev="{ onClick, disabled }">
        <UButton
          :disabled="disabled"
          @click="onClick"
          icon="i-heroicons-arrow-left-16-solid"
          variant="ghost"
          color="primary"
        />
      </template>

      <template #next="{ onClick, disabled }">
        <UButton
          :disabled="disabled"
          @click="onClick"
          icon="i-heroicons-arrow-right-16-solid"
          variant="ghost"
          color="primary"
        />
      </template>
    </UCarousel>
  </UContainer>
</template>

<script setup>
// UI
const containerUi = {
  base: 'px-6 sm:px-12 md:px-12 lg:px-24 py-4 sm:py-6 md:py-6 lg:py-12'
}

const carouselUi = {
  wrapper: 'relative',
  container: 'relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth',
  item: 'flex flex-none snap-end basis-full md:basis-1/2 lg:basis-1/3',
  arrows: {
    wrapper: 'absolute right-0 -top-10 flex items-center justify-end'
  },
  indicators: {
    wrapper: 'relative flex items-center justify-center gap-3 mt-4',
    base: 'rounded-full h-3 w-3',
    active: 'bg-primary-500 dark:bg-primary-400',
    inactive: 'bg-gray-100 dark:bg-gray-800'
  }
}

// Data
const items = [
  {
    img: 'https://picsum.photos/414/376?random=1',
    title: 'Mandato 3c',
    text: 'Não são as respostas certas que movem o mundo, são as perguntas. Participe dessa Jornada para Formação de mandatos Coletivos, Conectados e Compartilhados. Transforme a realidade do seu mandato e prepare-se para as próximas eleições.',
    to: '/cursos'
  },
  {
    img: 'https://picsum.photos/414/376?random=2',
    title: 'Mandato 3c',
    text: 'Não são as respostas certas que movem o mundo, são as perguntas. Participe dessa Jornada para Formação de mandatos Coletivos, Conectados e Compartilhados. Transforme a realidade do seu mandato e prepare-se para as próximas eleições.',
    to: '/cursos'
  },
  {
    img: 'https://picsum.photos/414/376?random=3',
    title: 'Mandato 3c',
    text: 'Não são as respostas certas que movem o mundo, são as perguntas. Participe dessa Jornada para Formação de mandatos Coletivos, Conectados e Compartilhados. Transforme a realidade do seu mandato e prepare-se para as próximas eleições.',
    to: '/cursos'
  },
  {
    img: 'https://picsum.photos/414/376?random=4',
    title: 'Mandato 3c',
    text: 'Não são as respostas certas que movem o mundo, são as perguntas. Participe dessa Jornada para Formação de mandatos Coletivos, Conectados e Compartilhados. Transforme a realidade do seu mandato e prepare-se para as próximas eleições.',
    to: '/cursos'
  },
  {
    img: 'https://picsum.photos/414/376?random=5',
    title: 'Mandato 3c',
    text: 'Não são as respostas certas que movem o mundo, são as perguntas. Participe dessa Jornada para Formação de mandatos Coletivos, Conectados e Compartilhados. Transforme a realidade do seu mandato e prepare-se para as próximas eleições.',
    to: '/cursos'
  }
]
</script>