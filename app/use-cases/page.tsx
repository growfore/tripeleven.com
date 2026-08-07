import type { Metadata } from "next";
import { Mountain, Compass, Map, Waves } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Cta } from "@/components/site/Cta";
import { pageMetadata } from "@/lib/seo";
import { SIGNUP_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Use Cases — Built for tour operators, trekkers, DMCs & adventure",
  description:
    "TripEleven is built for tour operators, trekking companies, destination management companies and adventure travel agencies. See how each runs their business on the platform.",
  path: "/use-cases",
});

const audiences = [
  {
    icon: Mountain,
    title: "Tour & trekking operators",
    body: "Altitude charts, itinerary variants, departures with capacity, and PDF itineraries make TripEleven the natural home for Himalaya and trekking operators — built for the way you actually structure a trek.",
  },
  {
    icon: Map,
    title: "Destination management companies",
    body: "Each client keeps its own catalog, content and bookings, cleanly separated. Manage every brand from one dashboard with full control over who can do what.",
  },
  {
    icon: Waves,
    title: "Adventure & specialty travel",
    body: "Safaris, rafting, hiking and mountaineering all get the same structured builder — trip facts, difficulty, best seasons, group size, and per-departure pricing.",
  },
  {
    icon: Compass,
    title: "Boutique travel agencies",
    body: "Launch a complete, bookable website with your own branding — no developers, no code. Curate featured trips, menus, testimonials and team from the dashboard.",
  },
];

export default function UseCasesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Who it's for"
        title="Built for real operators."
        subtitle="TripEleven is an all-in-one platform for tour & travel agencies that build, manage and sell trips online."
      >
        <Button variant="hero" size="xl" asChild>
          <a href={SIGNUP_URL}>Start for free</a>
        </Button>
        <Button variant="outlineDark" size="xl" asChild>
          <Link href="/features">See the platform</Link>
        </Button>
      </PageHero>

      <section className="bg-background px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {audiences.map((a) => (
              <div key={a.title} className="rounded-2xl border border-border bg-card p-9">
                <a.icon className="size-10 text-teal-blue" strokeWidth={2.2} />
                <h2 className="mt-6 text-2xl font-bold text-twilight">{a.title}</h2>
                <p className="mt-3 text-twilight/75">{a.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-4xl band-cyan px-8 py-14 text-center sm:px-14">
            <h2 className="mx-auto max-w-2xl text-3xl text-twilight sm:text-4xl">
              Every agency gets its own workspace.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-twilight/75">
              Your catalog, content, bookings and branding — all managed from one dashboard. Invite
              your team with different access levels, and publish trips whenever they&apos;re ready.
            </p>
            <Button variant="hero" size="xl" className="mt-8" asChild>
              <a href={SIGNUP_URL}>Claim your workspace</a>
            </Button>
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
