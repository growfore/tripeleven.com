"use client";

import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FeatureSplit({
  id,
  eyebrow,
  title,
  body,
  points,
  cta = "Explore more",
  ctaHref = "#cta",
  visual,
  reverse = false,
  tone = "light",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  body: string;
  points: string[];
  cta?: string;
  ctaHref?: string;
  visual: ReactNode;
  reverse?: boolean;
  tone?: "light" | "tint";
}) {
  const textFrom = reverse ? 40 : -40;
  const visualFrom = reverse ? -40 : 40;

  return (
    <section
      id={id}
      className={cn("overflow-x-clip border-t border-border px-6 py-20 lg:py-28", tone === "tint" ? "bg-muted" : "bg-background")}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: textFrom }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className={cn(reverse && "lg:order-2")}
        >
          {eyebrow && (
            <p className="mb-4 text-sm font-bold tracking-widest text-teal-blue uppercase">
              {eyebrow}
            </p>
          )}
          <h2 className="max-w-xl text-4xl text-twilight sm:text-5xl">{title}</h2>
          <p className="mt-6 max-w-xl text-lg text-twilight/75">{body}</p>
          <ul className="mt-10 space-y-5">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
                className="flex items-start gap-4"
              >
                <ChevronRight className="mt-0.5 size-5 shrink-0 text-twilight" strokeWidth={3} />
                <span className="max-w-lg text-twilight/85">{p}</span>
              </motion.li>
            ))}
          </ul>
          <Button variant="hero" size="lg" className="my-10" asChild>
            <a href={ctaHref}>{cta}</a>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: visualFrom }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className={cn("relative ", reverse && "lg:order-1")}
        >
          {visual}
        </motion.div>
      </div>
    </section>
  );
}
