import type { Metadata } from "next";
import { ChevronsRight, Wand2, CreditCard, Globe, ImageIcon, Search, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/site/PageHero";
import { Cta } from "@/components/site/Cta";
import { pageMetadata } from "@/lib/seo";
import { SIGNUP_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Features — The complete travel agency platform",
  description:
    "Explore TripEleven's features: an 11-step trip builder, AI itinerary generation, bookings & payments, a brandable website template, and a built-in SEO toolkit.",
  path: "/features",
});

const features = [
  {
    icon: LayoutTemplate,
    title: "Trip builder",
    body: "An 11-step builder with tabbed itinerary variants, drag-and-drop days, altitude charts, FAQ groups and pricing tiers.",
    href: "/trip-builder",
  },
  {
    icon: Wand2,
    title: "AI trip generation",
    body: "Batch-generate full day-by-day itineraries with Claude, then polish them in the same builder your team already uses.",
    href: "/ai",
  },
  {
    icon: CreditCard,
    title: "Bookings & payments",
    body: "Secure online checkout with payment verification, deposits or full payment, multi-currency, and a full booking lifecycle dashboard.",
    href: "/bookings",
  },
  {
    icon: Globe,
    title: "Public website",
    body: "A launch-ready, fully brandable website powered by your catalog — curated from the dashboard with drag-and-drop menus.",
    href: "/seo",
  },
  {
    icon: Search,
    title: "SEO toolkit",
    body: "Per-trip meta and schema markup, Open Graph, auto-slugs with 301 redirects, and a redirect manager with cycle detection.",
    href: "/seo",
  },
  {
    icon: ImageIcon,
    title: "Media library",
    body: "Automatic WebP conversion, built-in cropping presets, and alt text baked into every file for accessibility and SEO.",
    href: "/features",
  },
];

export default function FeaturesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Platform"
        title="One dashboard. Your whole agency."
        subtitle="Trip management, content, media, bookings, payments and SEO — every moving part of a travel agency in a single, multi-tenant workspace."
      >
        <Button variant="hero" size="xl" asChild>
          <a href={SIGNUP_URL}>Start for free</a>
        </Button>
        <Button variant="outlineDark" size="xl" asChild>
          <Link href="/use-cases">Who it&apos;s for</Link>
        </Button>
      </PageHero>

      <section className="bg-background px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="group rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
              >
                <f.icon className="size-9 text-teal-blue" strokeWidth={2.2} />
                <h3 className="mt-6 text-xl font-bold text-twilight">{f.title}</h3>
                <p className="mt-3 text-twilight/75">{f.body}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal-blue">
                  Learn more
                  <ChevronsRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-4xl bg-muted px-8 py-14 text-center sm:px-14">
            <Badge>Under the hood</Badge>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl text-twilight sm:text-4xl">
              Built for real operators, not generic listings.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-twilight/75">
              Multi-tenant isolation, staff roles (Owner, Admin, Manager, Editor), a DRAFT →
              PUBLISHED pipeline, verification before publishing, and an 11-step builder tuned for
              trekking and adventure agencies — altitude profiles, departures and slots included.
            </p>
            <Button variant="hero" size="xl" className="mt-8" asChild>
              <Link href="/trip-builder">See the trip builder</Link>
            </Button>
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
