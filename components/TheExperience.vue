<template>
  <ULandingSection
    id="sobre"
    title="Professor José Roberto Paludo"
    description="Alguma descrição sobre as experiências."
    :features="features"
    align="right"
    :ui="landingSectionUi"
  >
    <img
      src="https://picsum.photos/360/640"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
  </ULandingSection>
</template>

<script setup lang="ts">
const landingSectionUi = {
  title: 'text-3xl font-bold font-secondary tracking-tight text-primary dark:text-white sm:text-3xl lg:text-4xl text-left',
}

const features = [
  {
    name: '2000',
    description: 'Doutor e Mestre em Sociologia Política (UFSC)',
    icon: 'i-heroicons-academic-cap-20-solid'
  },
  { 
    name: '2000',
    description: 'Máster em Políticas Públicas Aplicadas (Madri - Espanha)',
    icon: 'i-heroicons-academic-cap-20-solid'
  },
  { 
    name: '2000',
    description: 'Graduação em história (Unijuí/RS)',
    icon: 'i-heroicons-academic-cap-20-solid'
  },
  { 
    name: '2000',
    description: 'Cursos complementares e prática em planejamento, cursos, gestão de recursos humanos, comunicação, mediação, coaching e campanhas eleitorais.',
    icon: 'i-heroicons-academic-cap-20-solid'
  },
  { 
    name: '2000',
    description: 'Professor de mestrado em Práticas Transculturais e convidado em pós-graduação presencial ou EaD em diversas faculdades',
    icon: 'i-heroicons-academic-cap-20-solid'
  },
  { 
    name: '2000',
    description: 'Membro do Conselho Curador da Fundação Perseu Abramo',
    icon: 'i-heroicons-academic-cap-20-solid'
  },
  { 
    name: '2000',
    description: 'Em 2020 promoveu um curso inédito VIRTUALIZA, de formação de pré-candidatos a vereadores',
    icon: 'i-heroicons-user-group-solid'
  },
  { 
    name: '2000',
    description: 'Consultor Credenciado SEBRAE/SC',
    icon: 'i-heroicons-sparkles-16-solid'
  },
  { 
    name: '2000',
    description: 'Em 2021 criou a Jornada 3Cs (coletivos, conectados e compartilhados) para mandatos de vereadores(as)',
    icon: 'i-heroicons-user-group-solid'
  }
]
</script>