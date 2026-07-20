# Case studies — detailed reference

Two kinds of entries below:

1. **Live on the site** — already written as full case studies in `src/content/work/`. Listed here
   with their angle so the set is easy to see in one place.
2. **Drafted for later** — projects not yet on the site, captured in enough detail to become case
   studies when wanted. Public-safe (ownership labelled honestly; no interview-only material).

---

## Live on the site (`src/content/work/`)

| File | Title | Proves |
|------|-------|--------|
| `audience-dsl.mdx` | A compiler for audiences, not another text-to-SQL | Judgment |
| `journey-canvas.mdx` | Automating the hardest module — then giving it away | Ownership |
| `config-agent-plugin.mdx` | Turning two years of config work into a plugin the team builds on | Leverage |
| `prabhu-premi-trust.mdx` | A full platform for an NGO, shipped solo | Range |

Each follows: **problem → constraints → decision/trade-offs → outcome → reflection.** The angle is
the reasoning, not a metrics list.

---

## Drafted for later (candidate future case studies)

### Config Automation Agent — the Engage module (the foundation)

_Why it's worth its own study: it's the origin system the DSL and the plugin both build on._

- **Problem:** configuring campaigns, messages, creatives, offers, and audiences in the Engage module
  was manual and slow; the ambition was to drive it all from natural language.
- **What was built:** the Config Automation Bot workflow. Core agentic pipeline —
  LLM-generated Python → sandbox execution → JSON inference → post-processing → API payload
  generation → UI automation. Personally implemented the hardest modules (Audience, Coupon Series)
  and delivered the rest with 2 mentees.
- **Outcome:** 2,000+ configs auto-resolved across 40+ brands (Asia, Europe, India, US, SEA); 500+
  configs created; 100+ users; 3,000+ sessions. _(These are usage numbers for this feature, not
  aiRA's business metrics.)_
- **Angle if written:** the pipeline design — how you make LLM-written code safe and repeatable
  (sandbox + inference + validation) instead of trusting raw generation.

### Platform infrastructure & security

_Angle: reliability and safety underneath an agent platform, with honest ownership boundaries._

- **Distributed rate limiting (owned):** atomic, sliding-window limiting via Redis + Lua enforcing
  frequency- and cost-based limits across distributed services; a type-safe async Python decorator
  for consistent enforcement, eliminating race conditions. This one is fully his — state plainly.
- **Multi-LLM provider layer & sandboxed execution (contributed, with tech lead):** provider-agnostic
  client across OpenAI + Anthropic with cost tracking, streaming, and Redis caching; the secure
  Python execution sandbox. He worked on brainstorming and testing; did not build these end to end.
  Frame as collaboration + deep understanding, **not** sole ownership.
- **Security & production ops (owned):** CVE triage and remediation tracking on the ask-aira service;
  frontend security hardening; resolved Kubernetes pod-health / Prometheus OOM incidents. Backend
  sandbox hardening and multi-tenant B2B isolation were done **with a senior engineer**.
- **Angle if written:** "boring reliability is a feature" — rate limits, isolation, and incident
  response as the unglamorous work that lets an agent platform be trusted in production.

### Connectors & orchestration layer (work in progress)

_Angle: the platform bet — turning a product into an orchestration layer._

- **Direction:** extend aiRA beyond Capillary into an orchestration layer with a **data arm** and an
  **action arm**, orchestrating across third-party vendors.
- **Auth:** Nango (self-hosted, open-source) for auth, credential lifecycle, and token vault.
- **Connectors:** Atlassian, Google Drive. **Data arm:** Snowflake, Databricks, BigQuery.
  **Action arm:** Braze.
- **Angle if written:** designing for a stack you don't control — credentials, failure modes, and
  the abstraction that lets one agent reach across a customer's tools. Best written once it's further
  along.

### Research — LLM code-similarity (FSE 2024 poster)

- Probed how robust code-generating LLMs are to prompt mutations (Radamsa), scoring Gemini and GPT
  outputs with CodeBERTScore and CrystalBLEU. Poster at ACM FSE 2024.
- **Angle if written:** an early, concrete version of the question that still drives the work — how do
  these models actually behave, and where do they break?

---

## Notes for whoever writes these next

- Keep the **client anonymized** and **team metrics out** (see `README.md`).
- Where a number can't be shown, make the **reasoning** the artifact — depth of thinking carries a
  study more than a stat.
- Prefer first person, plain voice, honest about shared ownership. No résumé cadence.
