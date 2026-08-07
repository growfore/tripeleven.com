import type { Metadata } from "next";
import { CalendarRange, TrendingUp, Layers, Route } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Faq } from "@/components/site/Faq";
import { Cta } from "@/components/site/Cta";
import { BuilderVisual } from "@/components/site/Visuals";
import { pageMetadata } from "@/lib/seo";
import { SIGNUP_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Trip Builder — An 11-step builder for real operators",
  description:
    "TripEleven's 11-step trip builder: itinerary variants, drag-and-drop days, altitude charts, FAQ groups, pricing tiers and departures — built for tour and trekking operators.",
  path: "/trip-builder",
});

const highlights = [
  {
    icon: Layers,
    title: "Itinerary variants",
    body: "Run Standard and Premium variants of the same trip, each with its own drag-and-drop days, meals, accommodation, distance and ascent — up to five images per day.",
  },
  {
    icon: Route,
    title: "Altitude charts",
    body: "Build elevation profiles from your location and altitude points, with a live area-chart preview. A real differentiator for trekking and climbing agencies.",
  },
  {
    icon: CalendarRange,
    title: "Departures & slots",
    body: "Set start and end dates, capacity and available spots, with per-departure pricing and per-date show/hide controls on your public site.",
  },
  {
    icon: TrendingUp,
    title: "Featured & popular",
    body: "Flag trips as Best Value or Top Rated, hand-curate featured trips, and surface your most-viewed departures with real popularity tracking.",
  },
];

const faqs = [
  {
    q: "How is the trip builder different from a form?",
    a: "It's an 11-step guided flow: Basic Info → Trip Facts → Itinerary → Inclusions/Exclusions → Meetings → Media → Pricing → Additional Info → FAQs → SEO → Featured. Every step is purpose-built, not a dump of fields.",
  },
  {
    q: "Can I have multiple versions of one trip?",
    a: "Yes. Tabbed itinerary variants let you offer a Standard and a Premium experience of the same trip, each with its own days, inclusions and pricing.",
  },
  {
    q: "What happens when a trip slug changes?",
    a: "A permanent 301 redirect is created automatically, so old links and search rankings never break.",
  },
];

export default function TripBuilderPage() {
  return (
    <main>
      <PageHero
        eyebrow="Trip management"
        title="An 11-step builder, not a dump of form fields."
        subtitle="The core of TripEleven — built for the way trekking, touring and adventure agencies actually structure a product."
      >
        <Button variant="hero" size="xl" asChild>
          <a href={SIGNUP_URL}>Start building free</a>
        </Button>
        <Button variant="outlineDark" size="xl" asChild>
          <Link href="/pricing">See pricing</Link>
        </Button>
      </PageHero>

      <section className="bg-background px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold tracking-widest text-teal-blue uppercase">
              The flow
            </p>
            <h2 className="max-w-xl text-4xl text-twilight sm:text-5xl">
              Eleven steps. Zero spreadsheets.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-twilight/75">
              Basic info, trip facts, itinerary, inclusions, meetings and drop-offs, media and
              highlights, pricing, additional info, FAQs, SEO, and featured. Every step guides you
              toward a trip that&apos;s ready to sell — not a wall of optional fields.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Drag-and-drop sortable days with duration, distance, ascent/descent, meals and accommodation",
                "FAQ groups with 31 icon choices and sortable Q&A pairs",
                "Multiple price tiers with Best Value flags and curated tags",
                "Status lifecycle — Draft / Published — with safe deletion and SEO-safe redirects",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-twilight/85">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-teal-blue" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <BuilderVisual />
        </div>
      </section>

      <section className="band-cyan px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-border bg-card p-8">
                <h.icon className="size-9 text-teal-blue" strokeWidth={2.2} />
                <h3 className="mt-6 text-xl font-bold text-twilight">{h.title}</h3>
                <p className="mt-3 text-twilight/75">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl text-twilight sm:text-4xl">Trip builder FAQ</h2>
          <div className="mt-12">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
