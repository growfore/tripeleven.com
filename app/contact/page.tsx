import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/site/PageHero";
import { Faq } from "@/components/site/Faq";
import { ContactForm } from "@/components/site/ContactForm";
import { pageMetadata } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact — Talk to the TripEleven team",
  description:
    "Contact TripEleven for a demo, Enterprise pricing or a question about the platform. Send us a message and we'll get back to you quickly.",
  path: "/contact",
});

const faqs = [
  {
    q: "How fast do you reply?",
    a: "We reply to every message within one business day, usually much faster.",
  },
  {
    q: "Can I get a walkthrough?",
    a: "Yes. Send us a message and we'll schedule a live walkthrough of the dashboard and trip builder.",
  },
  {
    q: "I already run an agency. How do I migrate?",
    a: "We help Enterprise customers import trips, set up custom branding and launch their website — dedicated onboarding is included.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Let's get your agency live."
        subtitle="Questions about the platform, a demo, or Enterprise pricing? Send us a message and we'll take it from there."
      />

      <section className="bg-background px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <ContactForm />

          <p className="mt-8 text-center text-twilight/60">
            Prefer email? Write to us directly at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal-blue underline">
              {CONTACT_EMAIL}
            </a>
          </p>

          <div className="mt-16">
            <div className="mx-auto max-w-3xl text-center">
              <Badge>FAQ</Badge>
              <h2 className="mt-4 text-3xl text-twilight sm:text-4xl">Before you write…</h2>
            </div>
            <div className="mt-12">
              <Faq items={faqs} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
