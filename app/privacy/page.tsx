import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "TripEleven's privacy policy: how we collect, use and protect data for travel agencies and their travelers.",
  path: "/privacy",
});

const sections: { h: string; p: string }[] = [
  {
    h: "1. Who we are",
    p: "TripEleven provides an all-in-one, multi-tenant platform for travel agencies to build, manage and sell trips online. This policy explains what data we process for the platform itself and for the agencies that use it.",
  },
  {
    h: "2. Data we collect",
    p: "We collect account information (name, email, agency details) when you register; content you create in the platform (trips, blog posts, media, menus); and inquiry information submitted through agency websites, including traveler names and contact details.",
  },
  {
    h: "3. How we use data",
    p: "We use data to operate the platform, receive and store trip inquiries for agencies, deliver transactional emails, send newsletters you subscribe to, prevent abuse, and improve the product.",
  },
  {
    h: "4. Data separation",
    p: "TripEleven is multi-tenant. Agency data — trips, content, inquiries, customers and media — is isolated per workspace and is never shared between agencies.",
  },
  {
    h: "5. Cookies",
    p: "We use cookies and similar technologies for authentication, security and analytics. You can control cookies through your browser settings.",
  },
  {
    h: "6. Data retention & deletion",
    p: "We retain data only as long as needed to provide the service or as required by law. You can export or delete your workspace data by contacting us.",
  },
  {
    h: "7. Your rights",
    p: "Depending on your jurisdiction, you may have the right to access, correct, export or delete your personal data, and to object to or restrict certain processing. Contact us to exercise these rights.",
  },
  {
    h: "8. Security",
    p: "We use industry-standard safeguards including encryption in transit, secure authentication, and tenant isolation to protect your data.",
  },
  {
    h: "9. Changes & contact",
    p: "We may update this policy and will post changes here. Questions? Email us at hello@tripeleven.com.",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
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
