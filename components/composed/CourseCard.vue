<template>
  <UCard :ui="ui">
    <template #header>
      <img :src="props.item.img" class="w-full" draggable="false">
    </template>

    <span class="font-secondary text-primary font-bold text-2xl">{{ props.item.title }}</span>

    <template #footer>
      <span class="line-clamp-4">
        {{ props.item.text }}
      </span>

      <UButton
        :to="props.item.to"
        class="py-2"
        icon="i-heroicons-arrow-right-16-solid"
        variant="link"
        trailing
        :padded="false"
      >
        Saber mais
      </UButton>
    </template>
  </UCard>
</template>

<script setup lang="ts">
interface Props {
  item: {
    img: string,
    title: string,
    text: string,
    to: string
  },
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