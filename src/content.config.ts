import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    lang: z.string(),
    desc: z.string(),
    cover: z.string(),
    altCover: z.string(),
    date: z.string(),
    stacks: z.array(z.string()).optional(),
    links: z
      .array(
        z.object({
          badgeLabel: z.string(),
          url: z.string(),
          urlLabel: z.string().optional(),
          badgeClass: z.string().optional(),
          icon: z.string().optional(),
        }),
      )
      .optional(),
  }),
})

export const collections = { projects }
