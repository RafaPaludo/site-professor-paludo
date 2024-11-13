<template>
  <ULandingSection
    title="Entre em contato para saber mais"
    align="left"
    :ui="landingSectionUi"
    :features="features"
  >
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Nome" name="nome">
        <UInput v-model="state.name" />
      </UFormGroup>

      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Telefone" name="phone">
        <UInput v-model="state.phone" />
      </UFormGroup>

      <UFormGroup label="Mensagem" name="message">
        <UTextarea v-model="state.message" resize />
      </UFormGroup>

      <UButton type="submit" block>Enviar</UButton>
    </UForm>
  </ULandingSection>
</template>

<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

type Schema = z.output<typeof schema>

// Data 
const landingSectionUi = {
  container: 'lg:items-start gap-8',
  title: 'text-3xl font-bold font-secondary tracking-tight text-primary dark:text-white sm:text-3xl lg:text-4xl text-left',
}

const features = [
  {
    name: 'Faça uma chamada',
    description: '(48) 9 9999-9999',
    icon: 'i-heroicons-phone-20-solid'
  },
  {
    name: 'Ou mande um e-mail',
    description: 'professorpaludo@gmail.com',
    icon: 'i-heroicons-envelope-20-solid'
  }
]

const schema = z.object({
  name: z.string(),
  email: z.string().trim().email('E-mail inválido'),
  phone: z.string(),
  message: z.string(),
})

const state = reactive({
  name: undefined,
  email: undefined,
  phone: undefined,
  message: undefined
})

// Functions
async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data)
}
</script>