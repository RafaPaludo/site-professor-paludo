<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1>{{ doc }}</h1>
        <div v-for="p in doc.person" :key="p.name">
          {{ p.name }}
        </div>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>
<script setup></script>