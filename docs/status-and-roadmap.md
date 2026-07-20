# Status & roadmap — the handoff

_Last updated: 2026-07-20. Read this first when picking the project back up._

## TL;DR

A minimal, storytelling-first Astro site is **built and deploying to GitHub Pages**. Content is real
(4 case studies, full About/journey, philosophy, blog scaffold + 1 post). Design is intentionally
"good default, not final." The custom domain is **prepared but not yet attached** (waiting on
Cloudflare DNS — see `../DEPLOYMENT.md`).

---

## What's done

**Site & content**
- Astro + MDX project, content collections for `work` and `blog` (drop-in files).
- **Landing** (`/`) — identity line, positioning, explore links, socials.
- **About / Journey** (`/about`) — career timeline (IIT-GN → Analyst → SDE-1 → SDE-2), six distilled
  principles, and an understated **"Beyond the work"** (two ACL reconstructions, three
  half-marathons, RTS rehab; Indian classical vocals + keyboard).
- **Philosophy** (`/philosophy`) — the full manifesto, first person.
- **Work** (`/work`) — 4 case studies: Audience DSL (judgment), Journey Canvas (ownership),
  Config-Agent Plugin (leverage), Prabhu Premi Trust NGO (range).
- **Writing** (`/blog`) — collection wired, one seed note, Substack subscribe link.
- Design system: tokens in `src/styles/global.css` (`--accent` re-themes everything), Fraunces +
  Inter fonts, light/dark toggle. Socials/nav in `src/config/site.ts`.

**Infra**
- `.github/workflows/deploy.yml` — build + deploy on push to `main`.
- Pages source switched to **GitHub Actions**.
- Old hand-rolled site preserved on the **`old-site`** branch.
- `public/resume.pdf` = the single-pager variant (placeholder).

## Decisions locked (from the kickoff conversation)

- **Voice:** human, first person, storytelling-first — explicitly not résumé/AI cadence.
- **Writing:** on-site MDX blog **and** a Substack subscribe link (own the content + SEO; Substack is
  a funnel).
- **Athletics/music:** understated "Beyond the work" on About — present and felt, not the headline.
- **Persona:** the site leans the **full-arc / founding-engineer** framing (Analyst → SDE-2).
- **Socials standardized to `/kevinamitshah`:** GitHub, X, LinkedIn, Substack (`@kevinamitshah`),
  email `kevinamitshah@gmail.com` (note: the résumé PDFs use a different address).
- **Boundaries:** client anonymized; no team-level metrics as individual work; shared work labelled
  "with tech lead/senior"; Journey Canvas production-incident details kept off the repo (interview
  only).

## Open questions — need your input

1. **Accuracy pass on the case studies** (highest priority): confirm the timeline years
   (SDE-1 = 2025, SDE-2 = 2026 are inferred), the **~40% revenue lift**, "150+ journeys in ~3 days",
   and the config build-time numbers. Fix anything wrong in `src/content/work/*.mdx`.
2. **Design/theme:** deferred to a later session (possibly other Claude Code instances). Levers:
   serif-vs-all-sans headings, the `--accent` color, overall warmth. Nothing here is precious.
3. **Résumé:** which variant should live at `public/resume.pdf` (currently the single-pager)?
4. **Substack URL:** confirm `substack.com/@kevinamitshah` is correct.
5. **"Beyond the work" details:** confirm the two named half-marathons and the ACL dates; add the
   photos (see below).

## Next steps (suggested order)

1. **Point DNS at Cloudflare + attach the domain** (`../DEPLOYMENT.md`) → go live at
   `kevinamitshah.com`.
2. Do the **accuracy pass** on the case studies.
3. **Design/theme** pass.
4. Add **photos** to "Beyond the work" (drop into `public/`, reference from `src/pages/about.astro`;
   consider an `astro:assets` optimized `<Image>` if they're large).
5. Optional new content, already scoped in `case-studies.md`: a Platform/Security study, the Engage
   Config Automation Agent study, `/now`, `/uses`, more posts.
6. Wire in future socials when ready (Reddit, Telegram, Discord, Google Scholar) — one line each in
   `src/config/site.ts`.

## How to continue (fresh machine or session)

```bash
git clone https://github.com/kevinamitshah/kevinamitshah.github.io.git
cd kevinamitshah.github.io
npm install
npm run dev        # http://localhost:4321
```

Then read this file + `../README.md`. Edit content in `src/content/`, design in
`src/styles/global.css`, structure in `src/pages/`. Push to `main` to deploy.

## Source material (local, not in this repo)

The originals we worked from live at `~/Documents/gigs/portfolio/`: `master_narrative.md` (full,
including interview-only material), `engineering_philosophy.md`, and three résumé PDFs
(`single_pager`, `startup_focused`, `company_specific`). The brief was `~/Downloads/portfolio_brief.md`.
