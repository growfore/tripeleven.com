"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SIGNUP_URL } from "@/lib/site";

const proofs = [
  {
    bold: "Launch in days, not months:",
    rest: "every agency gets an isolated workspace, ready to brand.",
  },
  {
    bold: "Sell trips directly:",
    rest: "secure online checkout, departures, deposits and multi-currency built in.",
  },
  {
    bold: "SEO-first by default:",
    rest: "schema markup, Open Graph and 301 redirects handled for you.",
  },
];

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-10 pb-16 lg:grid-cols-2 lg:pt-16">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl leading-[1.05] text-twilight sm:text-6xl lg:text-7xl"
          >
            More trips sold.
            <br />
            Less admin.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-7 max-w-lg text-lg text-twilight/75"
          >
            TripEleven is the platform for tour operators, trekking companies and DMCs —
            build your catalog, publish a full website, and take bookings without writing a line of
            code.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button variant="hero" size="xl" asChild>
              <a href={SIGNUP_URL}>Start for free</a>
            </Button>
            <Button variant="outlineDark" size="xl" asChild>
              <a href="/trip-builder">See the trip builder</a>
            </Button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-4 text-sm italic text-twilight/70"
          >
            No credit card required
          </motion.p>
        </div>
        <div className="relative flex justify-center gap-4 lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/hero-trek.jpg"
                alt="Trekker on a Himalayan ridge at sunrise"
                width={900}
                height={1200}
                className="w-40 sm:w-56 lg:w-80 rounded-lg border border-border object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-14"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Image
                src="/images/hero-group.jpg"
                alt="Travelers with a local guide in a Kathmandu street"
                width={900}
                height={1200}
                loading="lazy"
                className="w-40 sm:w-56 lg:w-80 rounded-lg border border-border object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid overflow-hidden rounded-xl bg-border md:grid-cols-3">
          {proofs.map((p, i) => (
            <motion.div
              key={p.bold}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              className="flex gap-3 bg-card p-6"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-twilight">
                <Check className="size-4 text-primary-foreground" />
              </span>
              <p className="text-twilight/85">
                <strong className="font-bold text-twilight">{p.bold}</strong> {p.rest}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
