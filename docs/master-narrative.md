# Master narrative (public-safe reference)

_The reservoir the site pulls from — trajectory, personas, project inventory, and skills._
_Interview-only / sensitive material has been removed for this public repo (see [`README.md`](README.md)).
The unabridged version lives locally at `~/Documents/gigs/portfolio/master_narrative.md`._

---

## Thesis

An early engineer on a live, in-production AI platform who moved from **building features → abstracting
them into tooling the team builds on → owning platform, orchestration, and production surface.**

Spine: **Feature → System → Platform.** Three flagship projects each prove a different thing:

| Proves | Project |
|--------|---------|
| Judgment (right abstraction, not newest) | Audience DSL |
| Leverage (made the team faster) | Config-Agent Plugin |
| Ownership + impact (owned through production) | Journey Canvas automation |

The site surfaces these as capabilities, not as war stories: state what was built and what it
enabled; keep granular case-study detail for interviews.

## Two target personas

- **Persona A — Conventional / AI Engineering** (mid-size & large companies). Conservative screens;
  they weigh metrics, clarity, tenure. Title presentation: **SDE-1 → SDE-2**. Voice: crisp,
  metric-led, minimal narrative.
- **Persona B — Founding Engineer** (early-stage / startups). They weigh range, ownership, 0→1, and
  customer-facing instinct. Title presentation: **full arc — Product Analyst → SDE-1 → SDE-2**. The
  "analyst who self-taught into founding engineer, promoted twice" arc is a genuine asset here.

**The portfolio site leans Persona B** — the journey/full-arc framing — because it's storytelling-first.

## Trajectory

Product Analyst @ Capillary (Aug 2024, one of ~5 on an AI PoC) → shipped conversational audience
agent, promotions, milestones → **SDE-1** (~2025) → **SDE-2** (2026).

Education: **B.Tech Chemical Engineering, IIT Gandhinagar (2020–2024)**, CPI 8.67/10, with **minors
in CS and AI** — a non-circuit branch, chosen route into computing.

## aiRA — product context

aiRA is Capillary's agentic AI layer for retail/consumer enterprises — a system of intelligence and
action. Brands query their data, create and run live configurations, and execute workflows through
AI agents. Built ground-up over ~2 years.

**No team-level metrics are claimed as individual work.** aiRA's overall traction (brand counts,
decisions/month, growth, deal value) is team-level and excluded. Kevin is an IC and team member, not
representing or heading the team.

**How he contributes as an IC:** cross-vertical ideation on how the product should be built; deep PR
reviews that go past style — is this the most optimal solution, how does the industry solve it, are
we over-engineering, what's the simpler first-principles option.

---

## Project inventory

### Tier 1 — the flagships

**Config Automation Agent — Engage module.** Built the natural-language config workflow for the
Engage module (campaigns, messages, creatives, offers, audiences). Core agentic pipeline:
LLM-generated Python → sandbox execution → JSON inference → post-processing → API payload generation
→ UI automation. Personally implemented the hardest modules (Audience, Coupon Series); delivered the
rest with 2 mentees. Impact: 2,000+ configs auto-resolved across 40+ brands; 500+ configs created;
100+ users; 3,000+ sessions.

**Audience Segmentation via Context Engineering — the DSL** _(judgment)_. Replaced a fragile,
hallucination-prone NL→SQL pipeline with a compiler-inspired DSL for deterministic audience
generation. Governed execution: AST → Thrift → SQL → async execution via Audience Manager.
Star-schema context layer for the LLM (fact tables, column metadata, entity/dimension relationships)
integrated into RAG; upload-based execution on Databricks with strict metadata validation. A typed
Python abstraction teaches the LLM _how to assemble_ DSL constructs rather than exposing raw grammar
— eliminating hallucinations while keeping composability. Two-agent MCP workflow (Analytics
Reasoning Agent → Configuration Agent). Impact: bulk audience definition dropped from ~2–3 hours to a
couple of minutes.

**Journey Canvas Automation** _(ownership + impact)_. A canvas/flow-based journey builder — the most
complex config module (entry → wait → multi-channel engagement via WhatsApp & push → offers →
milestone/task checks → conditional points → decision-split branching). Automated the entire canvas
flow from scratch and orchestrated it; 2 interns built the block-adding capability. Baseline it
replaced: ~2–3 hours per journey by hand, ~15–20 journeys/month of team capacity. Launch for an
anonymized client (one of India's largest wires, cables & FMEG manufacturers): 150+ personalized
journeys in ~3 days; embedded on-site ~4–5 days; multi-store/product/region variations; 4-stage
flows; personalized WhatsApp + push. Impact: ~40% revenue lift from the launch's loyalty journeys;
productionized so the **client now self-serves** (in-product image generation, image upload, custom
personalized HTML templates with mobile+web preview, customized messages, external integrations,
dynamic audiences via upload/DSL/SQL). _(Production-incident details from the launch are interview-only
and excluded here.)_

**Config-Agent Plugin** _(leverage)_. Abstracted ~2 years of config-agent patterns into a Claude
Code plugin — skills, agents, hooks, and framework internals (sandbox Python functions, inference
views, post-processing, payload generation). An engineer now writes only the Python functions and
mocks payloads in pytest; the agent recreates the full post-processing + payload pipeline by learning
from existing configs. Supports create / copy-config / edit / mid-task; enforces conventions at PR
review. Impact: end-to-end config build cut from ~3–4 weeks to ~1–2 weeks.

**Connectors & Orchestration Layer** _(platform — WIP)_. Turning aiRA from Capillary-bound into an
orchestration layer with a data arm + action arm across third-party vendors. Auth/credentials via
Nango (self-hosted). Connectors: Atlassian, Google Drive. Data arm: Snowflake, Databricks, BigQuery.
Action arm: Braze.

### Tier 2 — strong support

- **Distributed rate limiting (owned):** atomic, sliding-window rate limiting via Redis + Lua
  enforcing frequency- and cost-based limits across distributed services; type-safe async Python
  decorator eliminating race conditions.
- **Multi-LLM provider architecture & sandboxed execution (contributed, with tech lead):**
  provider-agnostic client (OpenAI + Anthropic, cost tracking, streaming, Redis caching) and the
  secure Python execution sandbox. Framed honestly as collaboration + solid understanding, not sole
  ownership.
- **Security & production ops (owned):** CVE triage/remediation on the ask-aira service; frontend
  security hardening; resolved Kubernetes pod-health / Prometheus OOM incidents. Backend sandbox
  hardening & multi-tenant B2B isolation done _with a senior engineer_.
- **AI Hackathon enablement:** helped expose aiRA as a CLI and supported hackathon teams building on
  it (sessions, FDE-style problem statements). Contributed to enablement; did not own the PoC.

### Tier 3 — leadership & influence

Mentoring 3 interns + 2 FTEs; hiring panels (SDE-2, SDE-1, 6-month intern, FDE); ran a Claude Code
workshop (plugins, MCP, skills, agents, workflows); 2 tech talks on agentic workflows (positive CTO
feedback); Spot Award; demoed to CEO/leadership; attended the Capillary IPO ceremony (BSE);
company-sponsored US B1 visa.

### Tier 4 — early career

- **SDE Intern, Capillary (Feb–Jul 2024):** RAG Slackbot for product roadmap (45+ users); CRD-based
  SQL/Python reporting in Databricks; UK call-centre billing analysis (−30% cost).
- **Data Science Intern, PUMA (2023):** demand forecasting (LSTM + Bayesian Opt, Neural Prophet; FTW
  deviation 50%→<20%; +24% forecasts); store clustering. PPO offered.
- **ML Intern, InfyU Labs (2022):** fruit-quality QA (92%) + plastic-type classification.
- **Research — LLM Code Similarity (FSE 2024 poster):** robustness of code-gen LLMs to prompt
  mutations (Radamsa), scored with CodeBERTScore & CrystalBLEU.
- **Blue Swan — startup idea:** Transformer-based demand prediction for bakeries; IIEC mentorship.

### Portfolio / side project — Prabhu Premi Trust (NGO)

- Live: https://www.prabhupremitrust.com/ · https://portal.prabhupremitrust.com/login
- A women-led Jain NGO. Kevin's portal runs their CC7 ("Jatra") pilgrimage program end-to-end.
- Built solo: static public marketing site + a portal running the full participant lifecycle
  (application → selection → credentials → profile/status → rooms/logistics → payment proofs) with
  automated WhatsApp + email at each step. Stack: Next.js 14 + FastAPI + Supabase (Postgres/Auth/
  Storage), Gupshup (WhatsApp), Gmail SMTP, Google Forms; three Docker services on Railway
  (marketing site behind Caddy).
- Positioning: "I own the whole stack, solo, in production" — auth, DB, storage, integrations,
  containerized deploy, DNS, real user lifecycle. Lead with the system and lifecycle; the social-good
  context is a bonus, not the pitch.

---

## Skills

- **Languages:** Python, SQL, JavaScript/TypeScript.
- **AI / Agentic:** LLM orchestration, RAG, MCP / FastMCP, agentic workflows, DSL design, sandboxed
  code execution, prompt-injection hardening.
- **Backend / Infra:** FastAPI, asyncio, WebSockets, Pydantic, Redis, MongoDB (Beanie), Kubernetes,
  Docker, S3.
- **Data / Connectors:** Databricks, Snowflake, BigQuery, Braze, Nango, Supabase.
- **Observability / Ops:** Prometheus, Grafana, New Relic _(confirm which were personally used)_.

## Recognition

1st Place — AWS × Capillary AI Hackathon (2025); 1st Place — IITGN Annual ML Hackathon HackRush
(2023); Dean's List (four semesters, 2022–23); Top-3 Finalist — IDE 4.0 National Bootcamp (2022).
