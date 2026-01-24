import { defineCollection, z } from 'astro:content';

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    author: z.string().default('WooPlugin'),
    category: z.enum(['google-shopping', 'woocommerce', 'general']),
    keywords: z.array(z.string()).optional(),
    readingTime: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedAt: z.date().optional(),
  }),
});

export const collections = {
  guides,
  docs,
};
