import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogs = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blogs" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default("Wadrib Mahmud"),
    tldr: z.string(),
    tags: z.array(z.string()).default([]),
    takeaways: z.array(z.string()).default([]),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = { blogs };
