# Marketing site (TripEleven)

Next.js 16 App Router, React 19, Tailwind CSS 4, TypeScript. Multi-page marketing site for TripEleven.

```sh
pnpm dev              # next dev (first free port — likely 3002 while BE/dashboard hold 3000/3001)
pnpm build            # next build
pnpm lint             # eslint (next/core-web-vitals)
```

- No `.env` — static site, no backend calls.
- All design tokens live in `app/globals.css` (twilight, teal-blue, surf, frost, cyan-lite + shadcn tokens). Do not inline colors.
- Brand constants (name, signup URL, contact email) live in `lib/site.ts`. Use `SIGNUP_URL` for signup CTAs, `/contact` for Enterprise/sales.
- Per-page `Metadata` uses the `pageMetadata()` helper in `lib/seo.ts` (sets canonical + OG). Add new routes to `app/sitemap.ts`.
- Pricing: `components/ui/pricing-4.tsx` (`PricingSection`, client) — two plans, **Free** and **Enterprise**, no frequency toggle. Mounted via thin wrapper `components/site/Pricing.tsx` which exports `Pricing` — keep that export signature.
- `section id="pricing"` must stay — nav anchors and `/` CTA link to `#pricing`.
- Shared chrome: `<Nav/>` + `<Footer/>` are mounted in `app/layout.tsx`.
- Uses `motion` (layout pill, scroll reveal).
