# kevinamitshah.com — personal site

The source for my portfolio: a minimal, content-first, storytelling-over-résumé site.
Built with **Astro + MDX**, deployed to **GitHub Pages** via GitHub Actions, and (once DNS is
pointed) served at **kevinamitshah.com**.

> If you're future-me picking this back up: read [`docs/status-and-roadmap.md`](docs/status-and-roadmap.md) first.
> It's the handoff — what's done, what was decided, and what's next.

---

## Quickstart

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build into dist/
npm run preview    # preview the production build locally
```

Requires Node 18.20+, 20.3+, or 22+ (developed on Node 26 / npm 11).

## Project structure

```
src/
  config/site.ts        # name, nav, and social links — single source of truth
  styles/global.css     # design tokens (change --accent to re-theme) + all styles
  layouts/
    Base.astro          # HTML shell: head, theme init, header, footer
    Article.astro       # shared layout for case studies + blog posts
  components/
    SiteHeader.astro     # sticky nav + wordmark
    SocialLinks.astro    # data-driven social icons (reads config/site.ts)
    ThemeToggle.astro    # light/dark toggle (no flash-of-wrong-theme)
  content.config.ts     # content collection schemas (work, blog)
  content/
    work/*.mdx          # case studies — drop in a file, it appears on /work
    blog/*.md|mdx       # writing — drop in a file, it appears on /blog
  pages/
    index.astro         # landing
    about.astro         # journey timeline + distilled philosophy + "beyond the work"
    philosophy.astro    # the full manifesto
    work/               # /work index + /work/[slug] renderer
    blog/               # /blog index + /blog/[slug] renderer
public/
  favicon.svg
  resume.pdf            # placeholder = single-pager variant; swap when finalized
docs/                   # reference material & handoff (see docs/README.md)
```

## Adding content (the whole point of the setup)

**A case study** — create `src/content/work/my-study.mdx`:

```mdx
---
title: Short, specific title
tagline: One sentence on what it is and why it mattered.
proves: Judgment            # Judgment · Ownership · Leverage · Range
role: Design & implementation
timeframe: aiRA · Capillary
stack: [DSL design, RAG, Python]
order: 5                    # lower sorts first on /work
# links: [{ label: Live, href: https://... }]   # optional
---

## The problem
...
```

**A blog post** — create `src/content/blog/my-post.md`:

```md
---
title: Title
description: One-line summary shown in the feed.
date: 2026-07-20
kind: note                  # "note" (short) or "essay" (deep-dive)
tags: [ai, systems]
---

Body in Markdown.
```

Set `draft: true` in frontmatter to keep something out of the build.

## Design

Everything is token-driven. To re-theme, edit the variables at the top of
`src/styles/global.css` — most importantly `--accent`. Fonts are Fraunces (serif
headings) + Inter (body), self-hosted via `@fontsource`. Light/dark is automatic
with a manual toggle.

## Deployment

Push to `main` → GitHub Actions builds and deploys to Pages. See
[`DEPLOYMENT.md`](DEPLOYMENT.md) for the full pipeline and the custom-domain steps.
