import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    locale: z.enum(["es", "en", "fr", "pt", "ca"]),
    translationKey: z.string(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("AAK Developer"),
    featured: z.boolean().default(false)
  })
});

export const collections = { blog };
