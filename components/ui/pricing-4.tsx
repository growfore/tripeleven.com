"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SIGNUP_URL } from "@/lib/site";

type Plan = {
  name: string;
  description: string;
  price: string;
  priceSuffix?: string;
  badge?: string;
  highlighted?: boolean;
  cta: { label: string; href: string };
  features: string[];
};

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
    badge: "Most Popular",
    highlighted: true,
    cta: { label: "Start for free", href: SIGNUP_URL },
    features: [
      "Everything in Free",
      "Unlimited trips & posts",
      "Custom domain & no TripEleven branding",
      "Custom template, palette & fonts",
      "AI itinerary generation (BYO key)",
      "2 staff seats",
      "Priority support",
    ],
  },
  {
    name: "Business",
    description: "For operators running several brands or teams.",
    price: "$79",
    priceSuffix: "month",
    cta: { label: "Start for free", href: SIGNUP_URL },
    features: [
      "Everything in Launch",
      "Read-only API access",
      "Multi-site & multiple custom domains",
      "Unlimited staff seats",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description: "White-label, dedicated onboarding and custom terms.",
    price: "Custom",
    cta: { label: "Contact us", href: "/contact" },
    features: [
      "Everything in Business",
      "White-label (remove TripEleven)",
      "Dedicated onboarding",
      "Custom volume & terms",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <Badge>Pricing</Badge>
          <div className="flex flex-col gap-2">
            <h2 className="max-w-xl text-center text-3xl font-regular tracking-tighter md:text-5xl">
              Start free. Scale when you&apos;re ready.
            </h2>
            <p className="max-w-xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground">
              Your branded website, trip catalog and inquiry engine — free. Add
              custom branding, AI itineraries and more when you grow.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-card p-6",
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
                <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
                {plan.priceSuffix && (
                  <span className="text-sm text-muted-foreground">/ {plan.priceSuffix}</span>
                )}
              </div>

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
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}