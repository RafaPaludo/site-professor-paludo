<template>
  <UFooter>
    <template #top>
      <UFooterColumns :links="links">
        <template #right>
          <UFormGroup name="email" label="Receba nossos materiais" size="lg">
            <UInput type="email" :ui="{ icon: { trailing: { pointer: '' } } }">
              <template #trailing>
                <UButton type="submit" size="2xs" color="primary" label="Inscreva-se" />
              </template>
            </UInput>
          </UFormGroup>
        </template>
      </UFooterColumns>
    </template>
  </UFooter>
</template>

<script setup lang="ts">
const links = [{
  label: 'Mídias',
  children: [{
    label: 'Instagram',
    to: 'https://nuxters.nuxt.com',
    target: '_blank'
  }, {
    label: 'Youtube',
    to: 'https://masteringnuxt.com/nuxt3?ref=nuxt',
    target: '_blank'
  }, {
    label: 'Facebook',
    to: 'https://github.com/nuxt',
    target: '_blank'
  }]
}, {
  label: 'Páginas',
  children: [{
    label: 'Home',
    to: 'https://content.nuxt.com/',
    target: '_blank'
  }, {
    label: 'Sobre',
    to: 'https://devtools.nuxt.com/',
    target: '_blank'
  }, {
    label: 'Contato',
    to: 'https://image.nuxt.com/',
    target: '_blank'
  }]
}, {
  label: 'Materiais',
  children: [{
    label: 'Blog',
    to: 'https://content.nuxt.com/',
    target: '_blank'
  }, {
    label: 'Cursos',
    to: 'https://devtools.nuxt.com/',
    target: '_blank'
  }, {
    label: 'Contato',
    to: 'https://image.nuxt.com/',
    target: '_blank'
  }]
}]
</script>