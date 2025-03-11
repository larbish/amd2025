<template>
  <div class="flex justify-center items-center">
    <NuxtImg
      class="rounded-3xl sepia"
      :src="src"
      alt="Placeholder"
      height="320"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    default: ''
  }
})
</script>
