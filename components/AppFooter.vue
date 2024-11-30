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
import { siteInfo } from '~/config/siteInfo';

const links = [{
  label: 'Mídias',
  children: [{
    label: 'Instagram',
    to: siteInfo.socialLinks.instagram,
    target: '_blank'
  }, {
    label: 'Youtube',
    to: siteInfo.socialLinks.youtube,
    target: '_blank'
  }, {
    label: 'Facebook',
    to: siteInfo.socialLinks.facebook,
    target: '_blank'
  }]
}, {
  label: 'Páginas',
  children: [{
    label: 'Home',
    to: '/',
    target: '_self'
  }, {
    label: 'Consultoria',
    to: 'http://localhost:3000/consultoria/planejamento-estrategico',
    target: '_self'
  }, {
    label: 'Blog',
    to: 'https://image.nuxt.com/',
    target: '_self'
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
  }]
}]
</script>