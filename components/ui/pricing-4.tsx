"use client";

import { useState } from "react";
import NumberFlow from "@number-flow/react";
import { motion } from "motion/react";
import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { FrequencyToggle, FREQUENCY } from "@/components/ui/pricing-4-utils/frequency-toggle";

type Plan = {
  name: string;
  description: string;
  price: { monthly: number; yearly: number } | null;
  badge?: string;
  highlighted?: boolean;
  cta: { label: string; href: string };
  features: string[];
};

const PLANS: Plan[] = [
  {
    name: "Free",
    description: "Get your first trips live and start selling — no card required.",
    price: { monthly: 0, yearly: 0 },
    cta: { label: "Get Started", href: "#cta" },
    features: [
      "5 published trips",
      "2 staff members",
      "5 AI itinerary generations / month",
      "1 GB media storage",
    ],
  },
  {
    name: "Starter",
    description: "For growing agencies that need more trips and AI help.",
    price: { monthly: 29, yearly: 24 },
    cta: { label: "Get Started", href: "#cta" },
    features: [
      "30 published trips",
      "5 staff members",
      "50 AI itinerary generations / month",
      "10 GB media storage",
      "Priority support",
    ],
  },
  {
    name: "Pro",
    description: "A serious operation: unlimited trips, AI and your own domain.",
    price: { monthly: 79, yearly: 66 },
    badge: "Most Popular",
    highlighted: true,
    cta: { label: "Get Started", href: "#cta" },
    features: [
      "Unlimited published trips",
      "15 staff members",
      "Unlimited AI itinerary generations",
      "100 GB media storage",
      "Custom domain & no branding",
      "Featured in marketplace",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description: "Custom limits, dedicated support and onboarding for large teams.",
    price: null,
    cta: { label: "Contact us", href: "#cta" },
    features: [
      "Unlimited published trips",
      "50 staff members",
      "Unlimited AI itinerary generations",
      "1 TB media storage",
      "Dedicated onboarding",
      "Priority support",
    ],
  },
];

export function PricingSection() {
  const [frequency, setFrequency] = useState<FREQUENCY>("monthly");

  return (
    <section id="pricing" className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <Badge>Pricing</Badge>
          <div className="flex flex-col gap-2">
            <h2 className="max-w-xl text-center text-3xl font-regular tracking-tighter md:text-5xl">
              Prices that make sense!
            </h2>
            <p className="max-w-xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground">
              Upgrade whenever you outgrow your limits — no setup fees, cancel
              anytime.
            </p>
          </div>
          <div className="mt-8">
            <FrequencyToggle frequency={frequency} setFrequency={setFrequency} />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => {
            const isHighlighted = plan.highlighted;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-card p-8 shadow-sm",
                  isHighlighted && "border-primary shadow-xl lg:scale-105",
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
                  {plan.price ? (
                    <>
                      <NumberFlow
                        key={`${plan.name}-${frequency}`}
                        value={
                          frequency === "monthly" ? plan.price.monthly : plan.price.yearly
                        }
                        format={{
                          style: "currency",
                          currency: "USD",
                          maximumFractionDigits: 0,
                        }}
                        className="text-4xl font-bold tracking-tight"
                      />
                      <span className="text-sm text-muted-foreground">/ month</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold tracking-tight">Custom</span>
                  )}
                </div>

                <Button
                  variant={isHighlighted ? "default" : "outline"}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
