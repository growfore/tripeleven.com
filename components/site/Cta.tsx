"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SIGNUP_URL } from "@/lib/site";

export function Cta() {
  return (
    <section id="cta" className="px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="relative container overflow-hidden bg-twilight px-8 py-20 text-center text-primary-foreground sm:px-14"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(29,78,216,0.2), transparent 70%)",
          }}
        />
        <h2 className="mx-auto max-w-3xl text-4xl sm:text-5xl">
          Your logo, your site, your sales — out of the box.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/75">
          Start free, build your catalog, and see your agency live before the week is out.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="onDark" size="xl" asChild>
            <a href={SIGNUP_URL}>Start free</a>
          </Button>
          <Button
            size="xl"
            className="border-2 border-primary-foreground/40 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <Link href="/contact">Talk to sales</Link>
          </Button>
        </div>
        <p className="mt-4 text-sm text-primary-foreground/60">
          No credit card required | Cancel anytime
        </p>
      </motion.div>
    </section>
  );
}

const cols = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "/#builder" },
      { label: "AI generation", href: "/#ai" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Trip inquiries", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-16">
      <div className="container grid gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 text-2xl font-bold text-twilight">
            <span className="font-display">TripEleven</span>
          </div>
          <p className="mt-4 text-sm text-twilight/70">
            The platform for travel agencies that sell their own trips.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="font-bold text-twilight">{c.title}</p>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-twilight/70 hover:text-twilight">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mt-14 border-t border-border pt-6 text-sm text-twilight/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <span>&copy; {new Date().getFullYear()} TripEleven. All rights reserved.</span>
        <span className="inline-flex items-center gap-1.5">
          <a href="https://growfore.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
              <path
                d="M 29 72 C 17 59, 17 37, 29 25 C 38 16, 51 13, 64 17"
                fill="none"
                stroke="#1D4ED8"
                stroke-width="15"
              />
              <rect x="67" y="64" width="17" height="17" fill="#1D4ED8" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
