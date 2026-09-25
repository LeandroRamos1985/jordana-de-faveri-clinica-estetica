# Jordana de Fáveri Clinic Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium Portuguese-BR static website for Dra. Jordana de Fáveri's aesthetic clinic, including a grounded service narrative and an embedded atendimento simulator.

**Architecture:** Plain HTML, CSS, and browser JavaScript keep the GitHub Pages demo portable and transparent. The home page owns the visual narrative; `privacy.html` and `404.html` provide trust and fallback surfaces; the simulator is a local client-side flow that never claims a booking was made.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, inline SVG favicon, remote video with poster fallback, Node smoke tests.

**Spec:** `outputs/pesquisa-e-proposta.md`

## Global Constraints

- Language is Portuguese-BR only.
- Use only confirmed address, phone, opening hours, rating, and public review excerpts.
- Never invent credentials, services, patient outcomes, or testimonials.
- The first fold uses video with autoplay, muted, loop, playsinline, poster, and reduced-motion fallback.
- The simulator must distinguish a prepared summary from a real submission.
- No READY FOR PRODUCTION until browser desktop/mobile audit is recorded.

## Review Focus

- Video unavailable or reduced motion: poster and readable overlay must remain.
- Simulator validation: required fields must show inline errors and successful local summary.
- Contact form: success state must never imply external delivery.
- Small viewport: navigation, fixed CTA, cards, and form must not overflow.
- Unverified fact: UI must label the public rating as current snapshot rather than permanent claim.

### Task 1: Static shell and design system

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `script.js`
- Create: `public/favicon.svg`
- Create: `robots.txt`
- Create: `sitemap.xml`
- Create: `privacy.html`
- Create: `404.html`

- [ ] Write the semantic page structure, metadata, skip link, navigation, hero, services, process, reviews, location, forms, simulator, and footer.
- [ ] Apply editorial design tokens, responsive breakpoints, focus styles, reduced-motion behavior, and reserved media dimensions.
- [ ] Add the client-side interactions for scroll reveal, simulator steps, contact validation, mobile nav, and analytics event hooks.

### Task 2: Verification and handoff artifacts

**Files:**
- Create: `tests/site-smoke.mjs`
- Create: `docs/auditoria-72-itens.md`
- Create: `README.md`
- Create: `.nojekyll`

- [ ] Test required files, headings, metadata, video attributes, contact details, and simulator behavior hooks.
- [ ] Record each 72-item status as pending or attention until browser evidence exists.
- [ ] Document local preview, GitHub Pages setup, confirmed facts, and integration limits.
- [ ] Create a ZIP deliverable containing the site source and reports.

### Task 3: Real-browser audit

**Files:**
- Modify: `docs/auditoria-72-itens.md`

- [ ] Serve the static site locally.
- [ ] Inspect desktop and mobile viewports in a real browser.
- [ ] Correct visible defects, rerun smoke tests, and update the 72-item evidence table.
