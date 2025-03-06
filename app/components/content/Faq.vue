<script setup lang="ts">
const { data: faq } = await useAsyncData('faq', async () => queryCollection('faq').first())
</script>

<template>
  <UPageSection>
    <div class="flex flex-col items-center justify-center space-y-8 w-full sm:px-20 md:px-30">
      <div class="flex flex-col items-center justify-center gap-2">
        <h3 class="font-newsreader italic text-white-shadow text-4xl">
          {{ faq!.title }}
        </h3>
        <p class="text-center text-sm font-medium text-muted">
          {{ faq!.subtitle }}
        </p>
      </div>
      <UAccordion
        trailing-icon="lucide:plus"
        :items="faq.questions"
        :ui="{
          item: 'mb-2 group px-4 transform-gpu rounded-xl border border-white/10 bg-white/5 transition duration-500 will-change-transform hover:bg-white/[0.075]',
          trailingIcon: 'group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135'
        }"
      />
    </div>
  </UPageSection>
</template>
