import type { Metadata } from "next";
import { FileSearch, Network, Share2, RefreshCcw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Faq } from "@/components/site/Faq";
import { Cta } from "@/components/site/Cta";
import { ChannelVisual } from "@/components/site/Visuals";
import { pageMetadata } from "@/lib/seo";
import { SIGNUP_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "SEO Toolkit — SEO built in, not bolted on",
  description:
    "TripEleven's built-in SEO toolkit: per-trip meta and JSON-LD schema, Open Graph 1200×630, auto-slugs with 301 redirects, and a redirect manager with cycle detection.",
  path: "/seo",
});

const highlights = [
  {
    icon: FileSearch,
    title: "Per-trip SEO",
    body: "Meta title, description, keywords, author, canonical and JSON-LD structured data on every trip — plus a live search preview so you know how it will rank.",
  },
  {
    icon: RefreshCcw,
    title: "Auto slugs & 301s",
    body: "Slugs generate automatically, and when one changes a permanent 301 redirect is created so old links and rankings never break.",
  },
  {
    icon: Network,
    title: "Redirect manager",
    body: "Manage redirects in one place with cycle detection — no accidental redirect loops, no broken inbound links.",
  },
  {
    icon: Share2,
    title: "Open Graph & media",
    body: "Featured media rendered at 1200×630 for social sharing, and alt text baked into every uploaded image for accessibility and image search.",
  },
];

const faqs = [
  {
    q: "Do I need a separate SEO plugin?",
    a: "No. Schema markup, Open Graph, canonicals, slugs and redirects are all built in and content-driven — shaped by what you curate in the dashboard.",
  },
  {
    q: "What schema does TripEleven output?",
    a: "JSON-LD structured data per trip so search engines understand durations, pricing, itinerary and availability without extra work.",
  },
  {
    q: "Are my images SEO-ready?",
    a: "Uploads are converted to WebP, compressed, and you can add alt text and captions that get baked into the file metadata — accessibility and image SEO in one step.",
  },
];

export default function SeoPage() {
  return (
    <main>
      <PageHero
        eyebrow="SEO & growth"
        title="SEO-first, everywhere."
        subtitle="Schema markup, Open Graph, redirects and alt-text automation — the growth toolkit is built into the platform, not bolted on."
      >
        <Button variant="hero" size="xl" asChild>
          <a href={SIGNUP_URL}>Start for free</a>
        </Button>
        <Button variant="outlineDark" size="xl" asChild>
          <Link href="/features">All features</Link>
        </Button>
      </PageHero>

      <section className="bg-background px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold tracking-widest text-teal-blue uppercase">
              Growth toolkit
            </p>
            <h2 className="max-w-xl text-4xl text-twilight sm:text-5xl">
              SEO built in, not bolted on.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-twilight/75">
              Every trip ships with structured data, canonicals and Open Graph media. Combined with
              curated featured tags, popular-trip widgets, newsletters and review syndication, your
              site is built to grow without a growth hire.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Featured tags and curated collections for internal linking and \u201Cbest of\u201D pages",
                "Reviews & testimonials with Google and Tripadvisor links, ratings and counts",
                "Newsletter subscriber management with activation, unsubscribe and email blasts",
                "Views & popularity tracking powering \u201Cmost popular\u201D widgets",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-twilight/85">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-teal-blue" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <ChannelVisual />
        </div>
      </section>

      <section className="bg-muted px-6 py-20 lg:py-28">
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
          <h2 className="text-center text-3xl text-twilight sm:text-4xl">SEO FAQ</h2>
          <div className="mt-12">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
