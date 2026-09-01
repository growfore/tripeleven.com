"use client";

import { motion } from "motion/react";

const steps = [
  "Basic info",
  "Trip facts",
  "Itinerary",
  "Inclusions",
  "Meetings",
  "Media",
  "Pricing",
  "Extra info",
  "FAQs",
  "SEO",
  "Featured",
];

export function BuilderVisual() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex flex-wrap gap-2">
        {steps.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className={
              i < 3
                ? "rounded-full bg-twilight px-3 py-1.5 text-xs font-semibold text-primary-foreground"
                : "rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-twilight/70"
            }
          >
            {i + 1}. {s}
          </motion.span>
        ))}
      </div>
      <div className="mt-6 rounded-2xl bg-cyan-lite/60 p-5">
        <p className="text-xs font-bold tracking-widest text-teal-blue uppercase">
          Altitude profile
        </p>
        <svg viewBox="0 0 400 120" className="mt-3 w-full" role="img" aria-label="Altitude profile chart">
          <defs>
            <linearGradient id="alt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--surf)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--surf)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0 100 L50 88 L100 70 L150 74 L200 42 L250 28 L300 46 L350 62 L400 84 L400 120 L0 120 Z"
            fill="url(#alt)"
          />
          <path
            d="M0 100 L50 88 L100 70 L150 74 L200 42 L250 28 L300 46 L350 62 L400 84"
            fill="none"
            stroke="var(--teal-blue)"
            strokeWidth="3"
          />
        </svg>
        <div className="mt-2 flex justify-between text-[11px] font-medium text-twilight/60">
          <span>Lukla 2,860m</span>
          <span>Kala Patthar 5,644m</span>
          <span>Namche 3,440m</span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          ["Duration", "14 days"],
          ["Difficulty", "Moderate"],
          ["Group size", "2\u201312"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl border border-border p-3">
            <p className="text-[11px] tracking-wide text-muted-foreground uppercase">{k}</p>
            <p className="mt-1 font-bold text-twilight">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChannelVisual() {
  const chips = [
    "Trip inquiries",
    "Google Things to do",
    "Tripadvisor",
    "Viator",
    "Your website",
    "Newsletter",
    "Print itineraries",
    "Reviews",
    "Wishlists",
  ];
  return (
    <div className="relative rounded-3xl bg-cyan-lite p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="mx-auto flex max-w-xs flex-col items-center rounded-2xl bg-twilight p-6 text-center text-primary-foreground"
      >
        <p className="text-sm tracking-widest text-surf uppercase">One workspace</p>
        <p className="mt-2 text-2xl font-bold">Your agency</p>
      </motion.div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {chips.map((c, i) => (
          <motion.span
            key={c}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}
            className="rounded-full bg-card px-4 py-2 text-sm font-medium text-twilight shadow-sm"
          >
            {c}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
