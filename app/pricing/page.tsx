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
    "TripEleven pricing: start free with your trip catalog and website. Upgrade for custom branding, AI itinerary generation and more.",
  path: "/pricing",
});

const faqs = [
  {
    q: "Do I need a credit card to start?",
    a: "No. The Free plan is free forever with no card required. Create your account, build your catalog and launch your website before you pay anything.",
  },
  {
    q: "What's included in the Free plan?",
    a: "The Free plan includes the full trip builder, the content editor, the media library and your public website — everything you need to launch and start getting inquiries. AI itinerary generation and custom branding are available on paid plans.",
  },
  {
    q: "How do I switch to a paid plan?",
    a: "Start for free, then upgrade to Launch or Business when you need unlimited trips, custom branding or AI itinerary generation.",
  },
  {
    q: "Can I keep my own domain and branding?",
    a: "Yes. Launch and above include a custom domain and remove TripEleven branding from your public site.",
  },
  {
    q: "Does AI itinerary generation require setup?",
    a: "AI itinerary generation works with your own API key — bring your key, enable the feature, and generate day-by-day itineraries in minutes. It's included on Launch and above.",
  },
  {
    q: "What's in Enterprise?",
    a: "Enterprise adds white-label, dedicated onboarding and custom volume and terms. Contact us and we'll scope a plan around your agency.",
  },
];

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Start free. Scale when you're ready."
        subtitle="The Free plan launches your catalog and website. When you're ready for custom branding, AI itineraries and more, upgrade or talk to us."
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
