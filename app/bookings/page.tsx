import type { Metadata } from "next";
import { CreditCard, ShieldCheck, Users, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Faq } from "@/components/site/Faq";
import { Cta } from "@/components/site/Cta";
import { pageMetadata } from "@/lib/seo";
import { SIGNUP_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Bookings & Payments — Secure online checkout built in",
  description:
    "Take trip bookings with TripEleven: travelers register, book by departure and group size, and pay through secure online checkout. Deposits, multi-currency and a full lifecycle dashboard.",
  path: "/bookings",
});

const highlights = [
  {
    icon: CreditCard,
    title: "Secure online checkout",
    body: "Payment-intent checkout with verification and payment confirmation. Deposits or full payment, your choice per trip.",
  },
  {
    icon: ShieldCheck,
    title: "Full lifecycle",
    body: "Watch every booking move from pending payment → confirmed → completed, or cancelled and failed — with customer name, email and phone on every row.",
  },
  {
    icon: Users,
    title: "Customer accounts",
    body: "Travelers register, keep public profiles, leave ratings and reviews, and save wishlists. Your repeat customers become your strongest marketing.",
  },
  {
    icon: Globe,
    title: "Multi-currency",
    body: "Charge in USD or NPR. The payments dashboard shows amount, type, currency, status, provider, transaction ID and the linked payment intent.",
  },
];

const faqs = [
  {
    q: "How does checkout work?",
    a: "Travelers register, pick a departure date and group size, and pay through a secure online checkout. Payments are verified before a booking is confirmed.",
  },
  {
    q: "Can I take deposits?",
    a: "Yes. Set a 30% deposit for a trip, or require full payment — each booking records the amount, currency and payment intent.",
  },
  {
    q: "Which currencies are supported?",
    a: "USD and NPR today, with the amount, type, currency and provider tracked per payment in the dashboard.",
  },
  {
    q: "Do customers get confirmation emails?",
    a: "Yes. Booking-confirmed emails are sent automatically, and PDF itineraries can be emailed to travelers.",
  },
];

export default function BookingsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Bookings & payments"
        title="Your travelers, your bookings, your payments."
        subtitle="Travelers register, book a departure and pay through secure online checkout. You watch every booking move from pending to confirmed in one dashboard."
      >
        <Button variant="hero" size="xl" asChild>
          <a href={SIGNUP_URL}>Start for free</a>
        </Button>
        <Button variant="outlineDark" size="xl" asChild>
          <Link href="/contact">Talk to sales</Link>
        </Button>
      </PageHero>

      <section className="bg-background px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-border bg-card p-7">
                <h.icon className="size-8 text-teal-blue" strokeWidth={2.2} />
                <h3 className="mt-5 text-lg font-bold text-twilight">{h.title}</h3>
                <p className="mt-2 text-sm text-twilight/75">{h.body}</p>
              </div>
            ))}
          </div>
          <Image
            src="/images/dashboard-desk.jpg"
            alt="Travel agency admin dashboard open on a laptop"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-3xl shadow-[0_30px_80px_-40px_oklch(0.23_0.176_269/0.5)]"
          />
        </div>
      </section>

      <section className="bg-muted px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl text-twilight sm:text-4xl">Bookings & payments FAQ</h2>
          <div className="mt-12">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
