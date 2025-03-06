<template>
  <UPageSection>
    <img
      v-if="src"
      class="rounded-3xl sepia"
      :src="src"
    >
  </UPageSection>
</template>

<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    default: ''
  }
})
</script>
