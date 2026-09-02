"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SIGNUP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-border">
      <div className="container grid items-center gap-16 pt-16 pb-24 lg:grid-cols-2 lg:pt-24">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-6xl leading-[1.05] tracking-tight text-twilight sm:text-7xl lg:text-[5rem]"
          >
            More trips sold.
            <br />
            <span className="text-teal-blue">Less admin.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-xl text-xl leading-relaxed text-twilight/75"
          >
            Build your catalog, publish a full website, and collect trip
            inquiries — no code, no developers. From trekking agencies to DMCs,
            the platform for real operators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button variant="hero" size="xl" asChild>
              <a href={SIGNUP_URL}>Start for free</a>
            </Button>
            <Button variant="outlineDark" size="xl" asChild>
              <a href="/pricing">See pricing</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* layered gradient shaders behind the images */}
          <div className="pointer-events-none absolute inset-0 -z-10 grid place-items-center">
            <div className="absolute left-1/4 top-0 h-[70%] w-[45%] rounded-full bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.45),transparent_70%)] blur-3xl" />
            <div className="absolute bottom-0 right-0 h-[60%] w-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.28),transparent_70%)] blur-3xl" />
            <div className="absolute right-1/4 top-1/3 h-[40%] w-[30%] rounded-full bg-[conic-gradient(from_120deg,rgba(125,211,252,0.35),rgba(2,132,199,0.15),rgba(125,211,252,0.35))] blur-3xl" />
          </div>

          <motion.figure
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 mx-auto w-full -rotate-2 border border-border bg-card p-3 shadow-[0_40px_90px_-30px_oklch(0.23_0.176_269/0.5)]"
          >
            <Image
              src="/product-images/trip-editor.png"
              width={2916}
              height={1668}
              alt="Trip builder in TripEleven"
              priority
              className="block w-full"
            />
          </motion.figure>

          <motion.figure
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 -bottom-6 z-20 w-[85%] rotate-2 border border-border bg-card p-3 shadow-[0_40px_90px_-30px_oklch(0.23_0.176_269/0.5)]"
          >
            <Image
              src="/product-images/custom-site.png"
              width={2870}
              height={1826}
              alt="Published trip website"
              className="block w-full"
            />
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
}