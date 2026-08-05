# marketing — Voyari Marketing Site

Next.js marketing site for **Voyari**, the white-label travel-agency SaaS. Single landing page (`/`) with a full design system. No backend — static site only (anchors point to the product, buttons link to `#cta`).

## Tech stack

- **Next.js 16** App Router, **React 19**, TypeScript
- **Tailwind CSS 4** (`@tailwindcss/postcss`)
- **shadcn/ui** primitives (new-york style, `@/*` alias → package root) — `button`, `badge`
- **`@number-flow/react`** — animated price numbers (pricing section)
- **`motion`** (framer-motion 12) — layout animations, scroll reveal

## Commands

| Command | Description |
|---|---|
| `pnpm dev` | Next dev (first free port; may be 3002 if BE/dashboard hold 3000/3001) |
| `pnpm build` | `next build` |
| `pnpm lint` | ESLint (next/core-web-vitals) |

## Structure

```
app/
├── globals.css      # ALL theme tokens (twilight, teal-blue, surf, frost, cyan-lite + card/primary/accent/ring tokens)
├── layout.tsx       # fonts, metadata, body classes
├── page.tsx         # single landing page, sections in order
├── not-found.tsx
└── public/          # favicon, images, robots.txt
components/
├── site/            # page sections: Nav, Hero, Benefits, FeatureSplit, AiSection, Testimonials, Pricing, Cta(+Footer), Visuals
└── ui/              # shadcn primitives + pricing-4
    ├── pricing-4.tsx            # PricingSection (see below)
    └── pricing-4-utils/
        └── frequency-toggle.tsx # FREQUENCY type + FrequencyToggle
```

## Pricing section (`components/ui/pricing-4.tsx`)

`"use client"` component mounted by `components/site/Pricing.tsx` (thin wrapper re-exporting `PricingSection`). Facts worth knowing:

- `section id="pricing"` — the `#pricing` anchor in `Nav.tsx` (Login link, logo) targets this.
- Plans: Free $0 · Starter $29/mo → $24 yearly · Pro $79/mo → $66 yearly (highlighted, "Most Popular") · Enterprise (Custom, no number).
- Yearly = 10/12 monthly (2 months free) — shown as a teal "2 months free" label on the yearly toggle.
- Prices animate via `NumberFlow` keyed by `${plan.name}-${frequency}`; the toggle pill uses a `motion.span` with `layoutId="frequency-pill"`.
- CTAs are `Link` to `#cta`; Enterprise renders "Contact us".
- Design tokens come from `globals.css` — no inline colors.

## Design system

`globals.css` is the single source of truth for tokens. Section backgrounds alternate with utility classes like `band-cyan` (see `Hero.tsx`). Brand: `text-twilight` headings, `text-teal-blue` accents, `font-display` for display type.
