/**
 * Content collections for this project. Write the schema by hand — it is the
 * one place where being explicit about a project's content shape pays off.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      /** Filtered out of production builds; still visible in `dev`. */
      draft: z.boolean().default(false),
      author: z.string().optional(),
      category: z.string().optional(),
      tags: z.array(z.string()).default([]),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
    }),
});

export const collections = { blog };
