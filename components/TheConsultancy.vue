<template>
  <ULandingSection
    title="Consultoria"
    description="Partimos da escuta, desenhando um projeto sob medida para responder às necessidades e construir as respostas com a sua participação. Havendo necessidade, temos disposição de acompanhar a execução do projeto, avaliando e ajustando progressivamente, para compartilhar contigo os resultados."
    :ui="landingSectionUi"
  >
    <UContainer :ui="containerCardUi">
      <UCard v-for="n in 3" :key="n" :ui="cardUi">
        <template #header>
          <UIcon name="i-heroicons-light-bulb" class="w-5 h-5" />
          <span>Planejamento</span>
        </template>
  
        <p>
          O planejamento estratégico é uma ferramenta que exige visão sistêmica do processo em que será inserido e requer um bom diagnóstico e uma boa análise...
        </p>
  
        <template #footer>
          <ULink
            to="/"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >Ver mais</ULink>
        </template>
      </UCard>
    </UContainer>
  </ULandingSection>
</template>

<script setup lang="ts">
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
</script>