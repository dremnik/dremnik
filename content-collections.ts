import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "src/content/blog",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    date: z.string(), // We'll parse this as date for sorting
    slug: z.string(),
    description: z.string().optional(),
    ogImage: z.string(),
    published: z.boolean().default(true),
  }),
  transform(document, context) {
    // Parse date in PST to avoid timezone issues
    const parsedDate = new Date(document.date + "T00:00:00-08:00");
    return {
      ...document,
      // Override date with parsed date object
      date: parsedDate,
      // Add year for grouping
      year: parsedDate.getFullYear().toString(),
    };
  },
});

const projects = defineCollection({
  name: "projects",
  directory: "src/content/projects",
  include: "**/*.md",
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    year: z.number(),
    icon: z.string(), // We'll use the icon component name as a string
    tagline: z.string(),
    tags: z.array(z.string()),
    github: z.string().optional(),
    link: z.string().optional(),
    gallery: z.array(z.string()).optional(), // Array of image paths
    published: z.boolean().default(true),
  }),
});

export default defineConfig({
  collections: [posts, projects],
});
