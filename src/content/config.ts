import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.string(),
    desc: z.string(),
    cover: z.string(),
    altCover: z.string(),
    releaseDate: z.string(),
    siteTitle: z.optional(z.string()),
    site: z.optional(z.string()),
    github: z.optional(z.string()),
    stacks: z.array(z.string()),
  }),
})

export const collections = { projects }
