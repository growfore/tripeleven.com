# Marketing site (Voyari)

Next.js 16 App Router, React 19, Tailwind CSS 4, TypeScript. Single static landing page.

```sh
pnpm dev              # next dev (first free port — likely 3002 while BE/dashboard hold 3000/3001)
pnpm build            # next build
pnpm lint             # eslint (next/core-web-vitals)
```

- No `.env` — static site, no backend calls.
- All design tokens live in `app/globals.css` (twilight, teal-blue, surf, frost, cyan-lite + shadcn tokens). Do not inline colors.
- Pricing: `components/ui/pricing-4.tsx` (`PricingSection`, client) + `components/ui/pricing-4-utils/frequency-toggle.tsx`. Mounted via thin wrapper `components/site/Pricing.tsx` which exports `Pricing` — keep that export signature so `app/page.tsx`'s `<Pricing />` mount works.
- `section id="pricing"` must stay — `Nav.tsx` anchors to `#pricing`.
- Uses `@number-flow/react` (price animation) and `motion` (layout pill, scroll reveal).
