import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Cta } from "@/components/site/Cta";
import { pageMetadata } from "@/lib/seo";
import { SIGNUP_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About — Why we built TripEleven",
  description:
    "TripEleven is an all-in-one platform for travel agencies: trip management, AI itineraries, bookings, payments and SEO in one dashboard. Learn why we built it.",
  path: "/about",
});

const stats = [
  { value: "11", label: "steps in the trip builder" },
  { value: "10", label: "topics per AI generation batch" },
  { value: "1200×630", label: "Open Graph media per trip" },
  { value: "USD/NPR", label: "multi-currency payments" },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Agencies deserve better than spreadsheets."
        subtitle="TripEleven started with a simple observation: tour and trekking operators run their entire business on the wrong tools. We built the platform they'd design for themselves."
      />

      <section className="bg-background px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <h2 className="max-w-xl text-4xl text-twilight sm:text-5xl">
              All-in-one, multi-tenant, and opinionated about your work.
            </h2>
            <div className="mt-6 space-y-5 text-lg text-twilight/75">
              <p>
                TripEleven is a platform for tour operators, trekking companies, DMCs and boutique
                travel agencies to build, manage and sell trips online — plus a fully customizable
                public website template.
              </p>
              <p>
                Every agency gets its own isolated workspace: its own catalog, content, bookings,
                payments and branding. Behind one shared dashboard, your team runs the whole
                operation — trip management, AI generation, a rich content engine, a production-grade
                media library, commerce, and an SEO toolkit that&apos;s built in, not bolted on.
              </p>
              <p>
                Our pitch in one line: <em>launch a complete travel agency website — catalog,
                bookings, payments, SEO, content and AI trip generation — without writing a line of
                code.</em>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-8 text-center">
                <p className="text-4xl font-bold text-twilight">{s.value}</p>
                <p className="mt-2 text-sm text-twilight/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band-cyan px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-twilight sm:text-4xl">See it live, not in a deck.</h2>
          <p className="mt-4 text-lg text-twilight/75">
            essencetreksnepal.com is a real agency running on TripEleven — catalog, bookings and
            content all driven from the dashboard.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <a href="https://essencetreksnepal.com" target="_blank" rel="noreferrer">
                View live agency
              </a>
            </Button>
            <Button variant="outlineDark" size="xl" asChild>
              <a href={SIGNUP_URL}>Start free</a>
            </Button>
          </div>
        </div>
      </section>

      <div className="bg-background">
        <Cta />
      </div>
    </main>
  );
}
