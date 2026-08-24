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
  badge?: string;
  highlighted?: boolean;
  cta: { label: string; href: string };
  features: string[];
};

const PLANS: Plan[] = [
  {
    name: "Free",
    description: "Build and launch your trip catalog — no card required.",
    price: "$0",
    cta: { label: "Start for free", href: SIGNUP_URL },
    features: [
      "Publish trips with the 11-step builder",
      "Itinerary variants with drag-and-drop days",
      "Blog & pages with block editor",
      "Media library with automatic WebP compression",
      "Your public website template",
      "Per-trip SEO fields",
      "2 staff members",
    ],
  },
  {
    name: "Enterprise",
    description: "The full system: bookings, payments and priority onboarding.",
    price: "Custom",
    badge: "Most Popular",
    highlighted: true,
    cta: { label: "Contact us", href: "/contact" },
    features: [
      "Everything in Free",
      "Bookings & payments with secure online checkout",
      "Deposits, full payment and multi-currency (USD / NPR)",
      "Custom domain & no branding",
      "Unlimited trips, staff and storage",
      "AI itinerary generation with unlimited batches",
      "PDF itineraries & email delivery",
      "Dedicated onboarding & support",
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
              Try the platform free for as long as you need — upgrade for the full
              booking and payment system.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-card p-8",
                plan.highlighted && "border-primary",
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

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                {plan.name === "Free" && (
                  <span className="text-sm text-muted-foreground">/ forever</span>
                )}
              </div>

              <Button
                variant={plan.highlighted ? "default" : "outline"}
                className="mt-6 w-full"
                asChild
              >
                <Link href={plan.cta.href}>{plan.cta.label}</Link>
              </Button>

              <ul className="mt-8 space-y-3">
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
