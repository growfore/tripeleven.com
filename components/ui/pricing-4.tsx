"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Check, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SIGNUP_URL } from "@/lib/site";

type Plan = {
  name: string;
  description: string;
  price: string;
  priceSuffix?: string;
  annual?: { price: string; priceSuffix?: string; totalLabel?: string };
  badge?: string;
  highlighted?: boolean;
  cta: { label: string; href: string };
  features: string[];
};

// ---------------------------------------------------------------------------
// Detailed feature comparison
// ---------------------------------------------------------------------------
const COMPARE_PLANS = ["Free", "Launch", "Scale", "Enterprise"] as const;

type CompareRow = { label: string; free: string; launch: string; scale: string; enterprise: string };
type CompareGroup = { title: string; rows: CompareRow[] };

const COMPARE_GROUPS: CompareGroup[] = [
  {
    title: "Site & Branding",
    rows: [
      { label: "Branded trip website & catalog", free: "Included", launch: "Included", scale: "Included", enterprise: "Included" },
      { label: "Custom domain", free: "—", launch: "Included", scale: "Included", enterprise: "Included" },
      { label: "Remove TripEleven branding", free: "—", launch: "—", scale: "Included", enterprise: "Included" },
      { label: "Custom template, palette & fonts", free: "—", launch: "Included", scale: "Included", enterprise: "Included" },
    ],
  },
  {
    title: "Content & Catalog",
    rows: [
      { label: "Trips", free: "5", launch: "45", scale: "300", enterprise: "Unlimited" },
      { label: "Blog posts", free: "3", launch: "200", scale: "2,500", enterprise: "Unlimited" },
      { label: "Large package catalogs", free: "—", launch: "—", scale: "Included", enterprise: "Included" },
      { label: "Per-trip SEO fields", free: "Included", launch: "Included", scale: "Included", enterprise: "Included" },
      { label: "Read-only API access", free: "—", launch: "—", scale: "Included", enterprise: "Included" },
    ],
  },
  {
    title: "Inquiries & Leads",
    rows: [
      { label: "Trip inquiries (email / WhatsApp)", free: "Included", launch: "Included", scale: "Included", enterprise: "Included" },
      { label: "Bookings & payments", free: "—", launch: "—", scale: "—", enterprise: "Included" },
    ],
  },
  {
    title: "Media & Storage",
    rows: [
      { label: "Media library with auto WebP", free: "Included", launch: "Included", scale: "Included", enterprise: "Included" },
      { label: "Media storage", free: "0.5 GB", launch: "5 GB", scale: "25 GB", enterprise: "Unlimited" },
    ],
  },
  {
    title: "AI",
    rows: [
      { label: "AI itinerary generation (BYO key)", free: "—", launch: "Included", scale: "Included", enterprise: "Included" },
      { label: "Receive payments via own Stripe keys", free: "—", launch: "—", scale: "—", enterprise: "Included" },
    ],
  },
  {
    title: "Team",
    rows: [
      { label: "Staff seats", free: "1", launch: "2", scale: "25", enterprise: "Unlimited" },
    ],
  },
  {
    title: "Support",
    rows: [
      { label: "Priority support", free: "—", launch: "Included", scale: "Included", enterprise: "Included" },
      { label: "Dedicated onboarding", free: "—", launch: "—", scale: "—", enterprise: "Included" },
      { label: "White-label", free: "—", launch: "—", scale: "—", enterprise: "Included" },
      { label: "Custom volume & terms", free: "—", launch: "—", scale: "—", enterprise: "Included" },
    ],
  },
];

const PLANS: Plan[] = [
  {
    name: "Free",
    description: "Launch your branded website and start getting inquiries — no card required.",
    price: "$0",
    priceSuffix: "forever",
    cta: { label: "Start for free", href: SIGNUP_URL },
    features: [
      "Branded trip website & catalog",
      "Up to 5 trips & 3 blog posts",
      "Trip inquiries (email / WhatsApp)",
      "Media library with auto WebP",
      "0.5 GB media storage",
      "Per-trip SEO fields",
      "1 staff seat",
      "TripEleven footer",
    ],
  },
  {
    name: "Launch",
    description: "Everything you need to grow a real travel business online.",
    price: "$29",
    priceSuffix: "month",
    annual: { price: "$23", priceSuffix: "month", totalLabel: "$276 billed yearly" },
    badge: "Most Popular",
    highlighted: true,
    cta: { label: "Upgrade to Launch", href: SIGNUP_URL },
    features: [
      "Everything in Free",
      "Up to 45 trips & 200 blog posts",
      "Custom domain",
      "Custom template, palette & fonts",
      "AI itinerary generation (BYO key)",
      "5 GB media storage",
      "2 staff seats",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    description: "For large agencies managing a big catalog of packages.",
    price: "$79",
    priceSuffix: "month",
    annual: { price: "$63", priceSuffix: "month", totalLabel: "$756 billed yearly" },
    cta: { label: "Upgrade to Scale", href: SIGNUP_URL },
    features: [
      "Everything in Launch",
      "300 trips & 2,500 blog posts",
      "Read-only API access",
      "Large package catalogs",
      "Remove TripEleven branding",
      "25 GB media storage",
      "25 staff seats",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description: "White-label, dedicated onboarding and custom terms.",
    price: "Custom",
    cta: { label: "Contact us", href: "/contact" },
    features: [
      "Everything in Scale",
      "White-label (remove TripEleven)",
      "Unlimited storage",
      "Dedicated onboarding",
      "Custom volume & terms",
    ],
  },
];

export function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="w-full py-20 lg:py-40">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex flex-col gap-2">
            <h2 className="max-w-xl text-center text-3xl font-regular tracking-tighter md:text-5xl">
              Start free. Scale when you&apos;re ready.
            </h2>
            <p className="max-w-xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground">
              Your branded website, trip catalog and inquiry engine — free. Add
              custom branding, AI itineraries and more when you grow.
            </p>
          </div>

          <div className="mt-4 inline-flex items-center gap-1 rounded-full border bg-card p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                !annual ? "bg-foreground text-background" : "text-muted-foreground",
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                annual ? "bg-foreground text-background" : "text-muted-foreground",
              )}
            >
              Yearly
              <span className={cn("ml-1.5 text-xs", annual ? "text-background" : "text-primary")}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="container mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => {
            const shown = annual && plan.annual ? plan.annual : plan;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "relative flex flex-col border bg-card p-6",
                  plan.highlighted && "border-primary shadow-[0_0_40px_-10px_rgba(29,78,216,0.3)]",
                )}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-tight">{shown.price}</span>
                  {shown.priceSuffix && (
                    <span className="text-sm text-muted-foreground">/ {shown.priceSuffix}</span>
                  )}
                </div>
                {annual && plan.annual?.totalLabel && (
                  <span className="mt-1 text-xs font-medium text-muted-foreground">
                    {plan.annual.totalLabel}
                  </span>
                )}

                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  className="mt-5 w-full"
                  asChild
                >
                  <Link href={plan.cta.href}>{plan.cta.label}</Link>
                </Button>

                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed comparison table */}
        <div className="mt-20">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h3 className="text-2xl font-regular tracking-tighter md:text-3xl">
              Compare every feature
            </h3>
            <p className="max-w-2xl text-center text-muted-foreground">
              A full breakdown of what each plan includes, from branding to
              storage and support.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto border">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Feature</th>
                  {COMPARE_PLANS.map((plan) => (
                    <th key={plan} className="px-4 py-3 text-left font-semibold">
                      {plan}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_GROUPS.map((group) => (
                  <RowGroup key={group.title} group={group} />
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            <span className="font-medium">TripEleven branding</span> is the credit line (footer
            + &ldquo;Powered by TripEleven&rdquo; notice) shown on your published site and linked to
            tripeleven.com. It is shown on Free and Launch, and fully removed on Scale and Enterprise.
          </p>
        </div>
      </div>
    </section>
  );
}

function RowGroup({ group }: { group: CompareGroup }) {
  return (
    <>
      <tr className="border-t bg-card">
        <td
          colSpan={COMPARE_PLANS.length + 1}
          className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          {group.title}
        </td>
      </tr>
      {group.rows.map((row) => (
        <tr key={row.label} className="border-t">
          <td className="px-4 py-2.5 font-medium">{row.label}</td>
          {COMPARE_PLANS.map((plan) => {
            const value = row[plan.toLowerCase() as "free" | "launch" | "scale" | "enterprise"];
            if (value === "Included") {
              return (
                <td key={plan} className="px-4 py-2.5">
                  <Check className="h-4 w-4 text-primary" />
                </td>
              );
            }
            if (value === "—") {
              return (
                <td key={plan} className="px-4 py-2.5">
                  <X className="h-4 w-4 text-muted-foreground/50" />
                </td>
              );
            }
            return (
              <td key={plan} className="px-4 py-2.5 text-foreground">
                {value}
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );
}