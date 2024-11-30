<template>
  <ULandingSection
    title="Consultoria"
    description="Partimos da escuta, desenhando um projeto sob medida para responder às necessidades e construir as respostas com a sua participação. Havendo necessidade, temos disposição de acompanhar a execução do projeto, avaliando e ajustando progressivamente, para compartilhar contigo os resultados."
    :ui="landingSectionUi"
    id="consultoria"
  >
    <UContainer :ui="containerCardUi">
      <UCard v-for="{ icon, title, text, to, id } in cards" :key="id" :ui="cardUi">
        <template #header>
          <UIcon :name="icon" class="w-5 h-5" />
          <span>{{ title }}</span>
        </template>
  
        <p>
          {{ text }}
        </p>
  
        <template #footer>
          <UButton
            :to="to"
            class="py-2"
            icon="i-heroicons-arrow-right-16-solid"
            variant="link"
            trailing
            :padded="false"
          >
            Ver mais
          </UButton>
        </template>
      </UCard>
    </UContainer>
  </ULandingSection>
</template>

<script setup lang="ts">
// Ui
const landingSectionUi = {
  wrapper: 'px-6 sm:px-12 md:px-12 lg:px-24 bg-dark-blue-50 dark:bg-black-rock-950',
  container: 'gap-8 sm:gap-y-8 flex flex-col',
  title: 'text-3xl font-bold font-secondary tracking-tight text-primary dark:text-white sm:text-3xl lg:text-4xl text-left',
  description: 'text-left sm:text-center',
}

const cardUi = {
  base: 'px-8 py-4',
  background: 'bg-white dark:bg-gray-900',
  divide: '',
  ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
  rounded: 'rounded-lg',
  shadow: 'shadow',
  body: {
    base: '',
    background: '',
    padding: 'my-4 line-clamp-4	'
  },
  header: {
    base: 'flex items-center gap-2',
    background: '',
    padding: ''
  },
  footer: {
    base: '',
    background: '',
    padding: ''
  }
}

const containerCardUi = {
  base: 'mx-auto flex gap-8 lg:gap-16 flex-wrap md:flex-nowrap',
  padding: '',
  constrained: 'max-w-5xl'
}

// Data
const cards = [
  {
    id: 0,
    title: 'Planejamento',
    icon: 'i-heroicons-presentation-chart-bar-20-solid',
    text: 'O planejamento estratégico é uma ferramenta que exige visão sistêmica do processo em que será inserido e requer um bom diagnóstico e uma boa análise',
    to: '/consultoria/planejamento-estrategico'
  },
  {
    id: 1,
    title: 'Mediação',
    icon: 'i-heroicons-scale-16-solid',
    text: 'Oferecemos diversos cursos para atender suas demandas específicas. Além de curadoria, mediação de eventos, reuniões, congressos e seminários.',
    to: '/consultoria/mediacao'
  },
  {
    id: 2,
    title: 'Gestão Pessoas',
    icon: 'i-heroicons-user-group-solid',
    text: 'Alinhando a formação em coaching holomentoring, coaching ontológico e cursos em facilitación y cambio com a experiência de liderança de equipes, podemos oferecer...',
    to: '/consultoria/rh'
  }
]
</script>