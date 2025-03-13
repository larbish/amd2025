<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <img
          src="/vuejs-amd.svg"
          class="h-10 w-10"
        >
      </NuxtLink>
    </template>

    <template #right>
      <UButton
        label="Slides"
        variant="subtle"
        target="_blank"
        class="hidden lg:block"
        to="https://amd2025slides.vercel.app"
      />

      <UTooltip text="Open on GitHub">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/larbish/amd2025"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>

      <UColorModeButton />
    </template>

    <template #body>
      <UButton
        class="mt-4"
        label="Download App"
        variant="subtle"
        block
      />
    </template>
  </UHeader>
</template>
