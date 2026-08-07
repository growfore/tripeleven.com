# Marketing — TripEleven Marketing Site

Next.js marketing site for **TripEleven**, the travel-agency SaaS we built ourselves. Multi-page marketing site with full SEO (sitemap, robots, per-page metadata, JSON-LD, canonical/OG). No backend — static site only.

## Tech stack

- **Next.js 16** App Router, **React 19**, TypeScript
- **Tailwind CSS 4** (`@tailwindcss/postcss`)
- **shadcn/ui** primitives (new-york style, `@/*` alias → package root) — `button`, `badge`
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
├── layout.tsx       # fonts, metadata, JSON-LD, shared <Nav/> + <Footer/>
├── sitemap.ts       # sitemap.xml for all routes
├── robots.ts        # robots.txt
├── page.tsx         # home landing
├── not-found.tsx
├── pricing/ features/ trip-builder/ ai/ bookings/ seo/
├── use-cases/ about/ contact/ privacy/ terms/
└── public/          # favicon, images
components/
├── site/            # Nav, Hero, Benefits, FeatureSplit, AiSection, Testimonials, Pricing, Cta(+Footer), PageHero, Faq, Visuals
└── ui/              # shadcn primitives + pricing-4
    └── pricing-4.tsx            # PricingSection (see below)
lib/
├── site.ts          # brand constants (name, urls, signup url, contact email)
└── seo.ts           # pageMetadata() helper for per-page Metadata
```

## Pricing section (`components/ui/pricing-4.tsx`)

- `section id="pricing"` — keep the id; nav anchors and page CTA link to it on `/`.
- Plans: **Free $0** (trip catalog, AI, website — no bookings) and **Enterprise** (Custom, "Contact us" → `/contact`; adds bookings, secure online payments, custom domain, onboarding).
- Free CTA → `https://app.tripeleven.com/signup` (from `lib/site.ts` `SIGNUP_URL`). Enterprise CTA → `/contact`.
- No monthly/yearly toggle, no NumberFlow — two static cards.

## Design system

`globals.css` is the single source of truth for tokens. Section backgrounds alternate with utility classes like `band-cyan` (see `Hero.tsx`). Brand: `text-twilight` headings, `text-teal-blue` accents, `font-display` for display type.
