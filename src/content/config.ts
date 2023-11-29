import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		desc: z.string(),
		image: z.string(),
		altImage: z.string(),
	}),
});

export const collections = { projects };
