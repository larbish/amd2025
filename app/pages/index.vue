<script setup lang="ts">
const { data: page } = await useAsyncData('home', () => queryCollection('home').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <UContainer>
    <ContentRenderer
      v-if="page"
      :value="page"
      :prose="false"
    />
    <StarsBg />
  </UContainer>
</template>
