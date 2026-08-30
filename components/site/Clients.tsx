"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const scroll = (dir: number) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    let raf: number;
    let paused = false;
    const step = () => {
      if (!paused) {
        el.scrollLeft += 1;
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) el.scrollLeft = 0;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    const pause = () => (paused = true);
    const resume = () => (paused = false);
    el.addEventListener("pointerenter", pause);
    el.addEventListener("pointerleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerenter", pause);
      el.removeEventListener("pointerleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section className="overflow-x-clip border-b border-border bg-background py-24">
      <h2 className="px-6 text-center text-3xl text-twilight sm:text-4xl">Made for tour operators like you</h2>
      <p className="mx-auto mt-4 max-w-xl px-6 text-center text-lg text-twilight/70">
        Real agency websites, live and selling on TripEleven.
      </p>
      <div
        ref={scroller}
        className="mt-14 flex overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] no-scrollbar"
      >
        {clients.map((c) => (
          <a
            key={c.href}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="relative group mx-4 block h-[90vh] w-50 md:w-[30vw] max-w-7xl shrink-0 overflow-hidden rounded-md border bg-card transition-colors hover:border-primary"
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
