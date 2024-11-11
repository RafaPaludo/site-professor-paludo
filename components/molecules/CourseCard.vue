<template>
  <UCard :ui="ui">
    <template #header>
      <img :src="props.item" class="w-full" draggable="false">
    </template>

    <span class="font-secondary text-primary font-bold text-2xl">Mandato 3c</span>

    <template #footer>
      <span class="line-clamp-4">
        Não são as respostas certas que movem o mundo, são as perguntas. Participe dessa Jornada para Formação de mandatos Coletivos, Conectados e Compartilhados. Transforme a realidade do seu mandato e prepare-se para as próximas eleições.
      </span>
      <ULink
        to="/"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        class="block mt-2"
      >saber mais</ULink>
    </template>
  </UCard>
</template>

<script setup lang="ts">
interface Props {
  item: string
  index?: number
}

const props = defineProps<Props>()

const ui = {
  divide: '',
  ring: '',
  shadow: '',
  body: {
    base: '',
    background: '',
    padding: 'px-2 py-0 sm:px-3'
  },
  header: {
    base: '',
    background: '',
    padding: 'px-2 py-5 sm:px-3'
  },
  footer: {
    base: '',
    background: '',
    padding: 'px-2 py-4 sm:px-3'
  }
}
</script>