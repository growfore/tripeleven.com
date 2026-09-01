"use client";

import { useState, useEffect, useCallback } from "react";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const quotes = [
  {
    text: "We moved 60 trekking itineraries across in a weekend. The altitude charts and itinerary variants alone saved us from building a custom site.",
    name: "Dipesh Rai",
    role: "Founder \u2022 Annapurna Base Trails",
  },
  {
    text: "AI drafts a 12-day itinerary, our editor polishes it, and it's live and ready to sell the same morning. Our catalog tripled in a month.",
    name: "Marta Oliveira",
    role: "Product Lead \u2022 Andes DMC",
  },
  {
    text: "Inquiries from our website land in one dashboard, and WhatsApp handles the rest. No more spreadsheets, no more missed leads.",
    name: "Sam Whitfield",
    role: "Operations \u2022 Wild Coast Safaris",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const q = quotes[i]!;

  const next = useCallback(() => setI((v) => (v + 1) % quotes.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="bg-background px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-twilight sm:text-5xl"
        >
          From the people who&apos;ve been there\u2026
        </motion.h2>
        <Quote className="mx-auto mt-12 size-10 text-surf" />
        <div
          className="relative mt-6 min-h-[120px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="text-2xl leading-relaxed text-twilight"
            >
              &quot;{q.text}&quot;
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="mt-8 text-lg font-bold text-twilight">{q.name}</p>
            <p className="text-twilight/70">{q.role}</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-10 flex justify-center gap-2">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === i ? "w-8 bg-teal-blue" : "w-2 bg-twilight/20 hover:bg-twilight/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
