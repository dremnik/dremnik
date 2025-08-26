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

export default defineConfig({
  collections: [posts],
});
