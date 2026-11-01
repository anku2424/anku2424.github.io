import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    client: z.string(),
    kind: z.enum(["Client Work", "Side Project"]),
    summary: z.string(),
    image: z.string(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    stack: z.array(z.string()).optional(),
    outcomes: z.array(z.string()).optional()
  })
});

export const collections = { projects };
