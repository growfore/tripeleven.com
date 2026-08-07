import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/site/PageHero";
import { Faq } from "@/components/site/Faq";
import { Pricing } from "@/components/site/Pricing";
import { Cta } from "@/components/site/Cta";
import { pageMetadata } from "@/lib/seo";
import { SIGNUP_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Pricing — Start free, upgrade when you're ready",
  description:
    "TripEleven pricing: start free with your trip catalog and website. Upgrade to Enterprise for AI generation, bookings, secure online payments and dedicated support.",
  path: "/pricing",
});

const faqs = [
  {
    q: "Do I need a credit card to start?",
    a: "No. The Free plan is free forever with no card required. Create your account, build your catalog and launch your website before you pay anything.",
  },
  {
    q: "What's included in the Free plan?",
    a: "The Free plan includes the full trip builder, itinerary variants, the content editor, the media library and your public website — everything you need to launch and start selling trips. AI itinerary generation is part of Enterprise.",
  },
  {
    q: "How do I switch to Enterprise?",
    a: "Contact us through the form and we'll scope a plan around your agency — number of trips, staff, storage and expected booking volume. Most agencies are live within days.",
  },
  {
    q: "Can I keep my own domain and branding?",
    a: "Yes. Enterprise includes a custom domain and removes TripEleven branding from your public site.",
  },
  {
    q: "Do you offer onboarding?",
    a: "Enterprise includes dedicated onboarding — we help you import trips, configure payments and launch your website.",
  },
];

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Start free. Scale when you're ready."
        subtitle="The Free plan launches your catalog and website. When your agency needs the full booking and payment system, move to Enterprise."
      >
        <Button variant="hero" size="xl" asChild>
          <a href={SIGNUP_URL}>Start for free</a>
        </Button>
        <Button variant="outlineDark" size="xl" asChild>
          <a href="/contact">Contact sales</a>
        </Button>
      </PageHero>

      <Pricing />

      <section className="bg-background px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>FAQ</Badge>
          <h2 className="mt-4 text-3xl text-twilight sm:text-4xl">Questions, answered.</h2>
        </div>
        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </section>

      <Cta />
    </main>
  );
}
