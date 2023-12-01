import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		desc: z.string(),
		image: z.string(),
		altImage: z.string(),
		releaseDate: z.string(),

		site: z.string(),
		stacks: z.array(z.string()),
	}),
})

export const collections = { projects }
