"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const quotes = [
  {
    text: "We moved 60 trekking itineraries across in a weekend. The altitude charts and itinerary variants alone saved us from building a custom site.",
    name: "Dipesh Rai",
    role: "Founder • Annapurna Base Trails",
  },
  {
    text: "AI drafts a 12-day itinerary, our editor polishes it, and it's live and ready to sell the same morning. Our catalog tripled in a month.",
    name: "Marta Oliveira",
    role: "Product Lead • Andes DMC",
  },
  {
    text: "Inquiries, deposits and payouts finally live in one place. No more spreadsheets, no more double-booked departures.",
    name: "Sam Whitfield",
    role: "Operations • Wild Coast Safaris",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const q = quotes[i]!;
  return (
    <section className="bg-background px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl text-twilight sm:text-5xl">From the people who&apos;ve been there…</h2>
        <Quote className="mx-auto mt-12 size-10 text-surf" />
        <blockquote className="mt-6 text-2xl leading-relaxed text-twilight">&quot;{q.text}&quot;</blockquote>
        <p className="mt-8 text-lg font-bold text-twilight">{q.name}</p>
        <p className="text-twilight/70">{q.role}</p>
        <div className="mt-10 flex justify-center gap-3">
          <button
            aria-label="Previous testimonial"
            onClick={() => setI((i - 1 + quotes.length) % quotes.length)}
            className="flex size-12 items-center justify-center rounded-lg bg-twilight text-primary-foreground transition-colors hover:bg-teal-blue"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => setI((i + 1) % quotes.length)}
            className="flex size-12 items-center justify-center rounded-lg bg-twilight text-primary-foreground transition-colors hover:bg-teal-blue"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
