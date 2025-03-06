import { defineCollection, z } from '@nuxt/content'

export const collections = {
  home: defineCollection({
    source: 'home.md',
    type: 'page',
    schema: z.object({
      image: z.string().editor({ input: 'media' })
    })
  }),
  faq: defineCollection({
    type: 'data',
    source: 'faq.json',
    schema: z.object({
      title: z.string().nonempty(),
      subtitle: z.string().nonempty(),
      questions: z.array(z.object({
        label: z.string().nonempty(),
        content: z.string().nonempty()
      }))
    })
  })
}
