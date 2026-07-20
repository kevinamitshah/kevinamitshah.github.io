import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ── Work / case studies ──────────────────────────────────────────────
// Drop a new .mdx file into src/content/work/ and it appears on /work.
const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    // one-word "what this proves": Judgment · Ownership · Leverage · Range
    proves: z.string(),
    role: z.string(),
    timeframe: z.string(),
    stack: z.array(z.string()).default([]),
    // lower order sorts first on the /work index
    order: z.number().default(99),
    // optional external links (e.g. live NGO site)
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
    draft: z.boolean().default(false),
  }),
});

// ── Writing / blog ───────────────────────────────────────────────────
// Supports both long deep-dives and short notes. Drop in .md or .mdx.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // "note" renders compact; "essay" is a full deep-dive
    kind: z.enum(['note', 'essay']).default('essay'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, blog };
