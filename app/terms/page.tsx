import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "TripEleven's terms of service for agencies using the travel platform.",
  path: "/terms",
});

const sections: { h: string; p: string }[] = [
  {
    h: "1. Agreement",
    p: "By creating an account or using TripEleven you agree to these terms. If you use the platform on behalf of an agency, you represent that you have authority to bind that agency.",
  },
  {
    h: "2. The service",
    p: "TripEleven provides a platform for travel agencies: trip management, AI itinerary generation, content publishing, media management, bookings, payments and a public website template. We may add, change or retire features over time with reasonable notice.",
  },
  {
    h: "3. Accounts & workspace",
    p: "Each agency operates in an isolated workspace. You are responsible for activity under your account, for maintaining accurate information, and for controlling staff access. Every agency is verified before publishing trips to the public.",
  },
  {
    h: "4. Your content",
    p: "You retain all rights to content you upload and create. You grant us the right to host, process and display it to operate the service. You confirm your content does not infringe others' rights or violate applicable law.",
  },
  {
    h: "5. Payments & bookings",
    p: "Bookings and payments are processed through our payment provider. Deposits, refunds and cancellation policies are set by your agency for its travelers. We are not a party to the travel contract between an agency and its customers.",
  },
  {
    h: "6. Acceptable use",
    p: "You may not misuse the platform, attempt to access other agencies' data, upload malware, scrape excessively, or use the service for unlawful activity. We may suspend accounts that violate these terms.",
  },
  {
    h: "7. Fees & plans",
    p: "Free and paid plans are described on our pricing page. Paid plans are billed as agreed at signup. We may change pricing with reasonable notice; changes to your plan take effect at renewal.",
  },
  {
    h: "8. AI generation",
    p: "AI-generated itineraries are drafts and must be reviewed by your team before publishing. You are responsible for the accuracy of published content.",
  },
  {
    h: "9. Disclaimers",
    p: "The service is provided “as is” without warranties of any kind. To the maximum extent permitted by law, TripEleven is not liable for indirect, incidental or consequential damages arising from use of the platform.",
  },
  {
    h: "10. Termination",
    p: "You may stop using the service at any time. We may terminate accounts for breach of these terms. On termination you may export your data within a reasonable period.",
  },
  {
    h: "11. Changes & contact",
    p: "We may update these terms and will post changes here. Questions? Email us at hello@tripeleven.com.",
  },
];

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Last updated: August 2026"
      />
      <section className="bg-background px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-2xl font-bold text-twilight">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-twilight/80">{s.p}</p>
            </div>
          ))}
          <p className="text-twilight/60">Contact: {CONTACT_EMAIL}</p>
        </div>
      </section>
    </main>
  );
}
