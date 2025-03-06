<template>
  <UPageSection>
    <img :src="posts[0].image.src">
    ghiufgiudfhfiudg
    <NuxtImg :src="posts[0].image.src" />
    <UBlogPosts>
      <UBlogPost
        v-for="(post, index) in posts"
        :key="index"
        v-bind="post"
        :to="post.path"
        :badge="post.category"
        variant="naked"
        :ui="{ header: 'aspect-auto' }"
      />
    </UBlogPosts>
  </UPageSection>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => queryCollection('posts')
  .where('published', '=', 1)
  .order('date', 'DESC')
  .all()
)
</script>
