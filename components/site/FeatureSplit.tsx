"use client";

import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function FeatureSplit({
  id,
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
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: textFrom }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className={cn(reverse && "lg:order-2")}
        >
          <h2 className="max-w-xl text-5xl leading-tight tracking-tight text-twilight sm:text-6xl">{title}</h2>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-twilight/75">{body}</p>
          <ul className="mt-10 space-y-4">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="mt-2 size-2 shrink-0 rounded-full bg-teal-blue" />
                <span className="max-w-lg text-twilight/85">{p}</span>
              </motion.li>
            ))}
          </ul>
          <a
            href={ctaHref}
            className="mt-10 inline-flex items-center gap-1.5 text-base font-semibold text-teal-blue hover:underline"
          >
            {cta}
            <ChevronRight className="size-4" strokeWidth={2.5} />
          </a>
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
