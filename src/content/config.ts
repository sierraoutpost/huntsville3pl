// Content Collection Configuration — Huntsville 3PL Blog
// Defines the Zod schema for blog post frontmatter.
// See _design-standards/skills/10-blog-system.md §6 for field rules.

import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(155),
    author: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string(),
    heroAlt: z.string(),
    category: z.enum([
      'warehousing',
      'fulfillment',
      'logistics',
      'industry',
      'company',
      'city',
    ]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
  }),
});

export const collections = { blog };
