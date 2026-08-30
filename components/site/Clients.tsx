"use client";

import { useRef } from "react";

const clients = [
  { name: "Walkthrough Nepal", href: "https://walkthroughnepal.com/", shot: "walkthrough-nepal" },
  { name: "Lovely Trips", href: "http://lovelytrips.com.np/", shot: "lovely-trips" },
  { name: "HI Nepal Treks", href: "https://hinepaltreks.com/", shot: "hi-nepal-treks" },
  { name: "Summit Luxury Treks", href: "http://summitluxurytreks.com/", shot: "summit-luxury-treks" },
  { name: "Essence Treks Nepal", href: "https://essencetreksnepal.com/", shot: "essence-treks" },
  { name: "Limestone Treks", href: "https://limestonetreks.com/", shot: "limestone-treks" },
  { name: "Into Nepal Treks", href: "https://new.intonepaltreks.com/", shot: "into-nepal-treks" },
];

export function Clients() {
  const scroller = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) =>
    scroller.current?.scrollBy({ left: dir * scroller.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <section className="overflow-x-clip border-b border-border bg-background py-24">
      <div className="flex items-center justify-between px-6">
        <h2 className="text-3xl text-twilight sm:text-4xl">Made for tour operators like you</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll(-1)} aria-label="Scroll left" className="rounded-full border px-3 py-2 text-twilight transition-colors hover:border-primary hover:text-primary">←</button>
          <button onClick={() => scroll(1)} aria-label="Scroll right" className="rounded-full border px-3 py-2 text-twilight transition-colors hover:border-primary hover:text-primary">→</button>
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-xl px-6 text-center text-lg text-twilight/70">
        Real agency websites, live and selling on TripEleven.
      </p>
      <div ref={scroller} className="mt-14 flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2">
        {clients.map((c) => (
          <a
            key={c.href}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="relative group mx-4 block h-[90vh] w-50 shrink-0 snap-start overflow-hidden rounded-md border bg-card transition-colors hover:border-primary"
          >
            <div className="absolute top-90 left-40 hidden group-hover:block p-2  text-white rounded-sm hover:opacity-90 bg-primary">Visit Website</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/product-images/clients/${c.shot}.jpg`}
              alt={`${c.name} website`}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
