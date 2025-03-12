<script setup lang="ts">
import { titleCase } from 'scule'

const { type } = defineProps({
  type: {
    type: String as PropType<'blog' | 'changelog'>,
    required: true
  }
})

const route = useRoute()

const { data } = await useAsyncData(route.path, () => Promise.all([
  queryCollection('posts').path(route.path).first(),
  queryCollectionItemSurroundings('posts', route.path, { fields: ['title', 'description'] }).order('date', 'DESC')
]), {
  transform: ([page, surround]) => ({ page, surround })
})
if (!data.value || !data.value.page) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const post = computed(() => data.value?.page)
const surround = computed(() => data.value?.surround)

useSeoMeta({
  title: post.value?.seo.title,
  description: post.value?.seo.description,
  ogTitle: post.value?.seo.title,
  ogDescription: post.value?.seo.description
})

const links = [
  {
    icon: 'i-simple-icons-x',
    label: 'Follow on X',
    to: 'https://x.com/nuxtstudio',
    target: '_blank'
  },
  {
    icon: 'i-simple-icons-bluesky',
    label: 'Follow on Bluesky',
    to: 'https://go.nuxt.com/bluesky',
    target: '_blank'
  },
  {
    icon: 'i-simple-icons-discord',
    label: 'Chat on Discord',
    to: 'https://discord.gg/sBXDm6e8SP',
    target: '_blank'
  }
]
</script>

<template>
  <UContainer>
    <UPage v-if="post">
      <UPageHeader
        :title="post.title"
        :description="post.description"
      >
        <template #headline>
          <div class="flex flex-col gap-6">
            <UBreadcrumb
              :items="[
                { label: titleCase(type),
                  icon: 'i-lucide-newspaper',
                  to: `/${type}` },
                { label: post.title }
              ]"
            />
            <div class="flex items-center gap-3">
              <UBadge
                v-if="post.badge"
                :label="titleCase(post.badge.label)"
                variant="outline"
                color="neutral"
              />
              <time class="text-[var(--ui-text)]">{{ formatDateByLocale(post.date) }}</time>
            </div>
          </div>
        </template>

        <div class="flex gap-4 mt-6">
          <UUser
            v-for="author in post.authors"
            :key="author.name"
            :name="author.name"
            :description="author.username ? `@${author.username}` : ''"
            :avatar="author.avatar"
            :to="author.to"
          />
        </div>
      </UPageHeader>

      <UPageBody>
        <ContentRenderer
          v-if="post.body"
          :value="post"
        />

        <div class="flex items-center justify-between mt-12">
          <UButton
            :to="`/${type}`"
            variant="link"
            color="neutral"
            :aria-label="`Back to ${type}`"
            :padded="false"
          >
            ← Back to {{ type }}
          </UButton>
        </div>

        <hr
          v-if="surround?.length"
          class="text-gray-200 dark:text-gray-800"
        >

        <UContentSurround
          :surround="surround"
          :ui="{ linkTitle: 'text-wrap' }"
        />
      </UPageBody>

      <template #right>
        <UContentToc
          v-if="post.body && post.body.toc"
          :links="post.body.toc.links"
        >
          <template #bottom>
            <div class="hidden lg:block">
              <UPageLinks
                title="Links"
                :links="links"
              />
            </div>
          </template>
        </UContentToc>
      </template>
    </UPage>
  </UContainer>
</template>
