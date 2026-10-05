import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const veranstaltungen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/veranstaltungen' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    time: z.string().optional(),
    location: z.string(),
    category: z.string(),
    status: z.enum(['upcoming', 'archive']),
    summary: z.string(),
  }),
});
export const collections = { veranstaltungen };
