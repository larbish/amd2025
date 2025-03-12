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
  }),
  posts: defineCollection({
    type: 'page',
    source: 'posts/*.md',
    schema: z.object({
      authors: z.array(z.object({
        username: z.string(),
        name: z.string(),
        to: z.string(),
        avatar: z.object({
          src: z.string(),
          alt: z.string()
        })
      })),
      badge: z.object({
        label: z.string()
      }),
      date: z.date(),
      image: z.object({
        src: z.string().editor({ input: 'media' }),
        alt: z.string()
      })
    })
  })
}
