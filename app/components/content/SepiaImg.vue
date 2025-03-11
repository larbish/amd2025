<template>
  <div class="flex justify-center items-center">
    <NuxtImg
      class="rounded-3xl sepia"
      :src="src"
      alt="Placeholder"
      width="500"
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
