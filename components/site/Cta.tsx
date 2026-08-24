import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mountain } from "lucide-react";
import { SIGNUP_URL } from "@/lib/site";

export function Cta() {
  return (
    <section id="cta" className="px-6 pb-20">
      <div className="mx-auto max-w-7xl rounded-4xl bg-twilight px-8 py-20 text-center text-primary-foreground sm:px-14">
        <h2 className="mx-auto max-w-3xl text-4xl sm:text-5xl">
          Your logo, your site, your sales — out of the box.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/75">
          Start free, build your catalog, and see your agency live before the week is out.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="onDark" size="xl" asChild>
            <a href={SIGNUP_URL}>Start free</a>
          </Button>
          <Button
            size="xl"
            className="rounded-lg border-2 border-primary-foreground/40 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <Link href="/contact">Talk to sales</Link>
          </Button>
        </div>
        <p className="mt-4 text-sm text-primary-foreground/60">
          No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}

const cols = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "/features" },
      { label: "Trip builder", href: "/trip-builder" },
      { label: "AI generation", href: "/ai" },
      { label: "Bookings & payments", href: "/bookings" },
      { label: "SEO toolkit", href: "/seo" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Built for",
    links: [
      { label: "Tour operators", href: "/use-cases" },
      { label: "Trekking companies", href: "/use-cases" },
      { label: "DMCs", href: "/use-cases" },
      { label: "Adventure travel", href: "/use-cases" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-5">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 text-2xl font-bold text-twilight">
            <span className="font-display">TripEleven</span>
          </div>
          <p className="mt-4 text-sm text-twilight/70">
            The platform for travel agencies that sell their own trips.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="font-bold text-twilight">{c.title}</p>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-twilight/70 hover:text-twilight">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-border pt-6 text-sm text-twilight/60">
        © {new Date().getFullYear()} TripEleven. All rights reserved.
      </div>
    </footer>
  );
}
