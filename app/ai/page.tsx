import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { AiSection } from "@/components/site/AiSection";
import { Faq } from "@/components/site/Faq";
import { Cta } from "@/components/site/Cta";
import { pageMetadata } from "@/lib/seo";
import { SIGNUP_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "AI Trip Generation — From topic to ready-to-sell trip in minutes",
  description:
    "Generate full day-by-day trip itineraries with TripEleven AI. Type up to 10 topics, pick a style, and get complete itineraries ready for human polish and publishing.",
  path: "/ai",
});

const faqs = [
  {
    q: "Is the AI output ready to publish?",
    a: "It's a strong first draft, not a finished product. Every generated itinerary lands in the same 11-step builder so your team reviews, edits and polishes before publishing.",
  },
  {
    q: "How many trips can I generate at once?",
    a: "You can batch up to 10 topics per generation. Each one comes back with its day count and can be checked, retried on failure or edited individually.",
  },
  {
    q: "Does it know my destination?",
    a: "The generator works from your prompt and any focus or style you give it — from Nepal Himalaya treks to safaris, rafting and mountaineering.",
  },
];

export default function AiPage() {
  return (
    <main>
      <PageHero
        eyebrow="AI generation"
        title="From topic to ready-to-sell trip in minutes."
        subtitle="Batch-generate complete itineraries with AI, then refine them in the same 11-step builder your team already uses. AI drafts, humans polish, travelers book."
      >
        <Button variant="hero" size="xl" asChild>
          <a href={SIGNUP_URL}>Try AI trip generation</a>
        </Button>
        <Button variant="outlineDark" size="xl" asChild>
          <Link href="/trip-builder">See the builder</Link>
        </Button>
      </PageHero>

      <AiSection />

      <section className="bg-background px-6 pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl mt-12">
          <h2 className="text-center text-3xl text-twilight sm:text-4xl">AI generation FAQ</h2>
          <div className="mt-12">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
