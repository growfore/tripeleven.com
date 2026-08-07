"use client";

import { useState } from "react";
import { ArrowRight, Mountain, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SIGNUP_URL } from "@/lib/site";

const links = [
  { label: "Features", href: "/features" },
  { label: "Trip builder", href: "/trip-builder" },
  { label: "AI", href: "/ai" },
  { label: "Bookings", href: "/bookings" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="bg-twilight text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-3 text-sm">
          <span>See a live agency running on TripEleven</span>
          <a
            href="https://essencetreksnepal.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-semibold underline"
          >
            View demo <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
      <nav className="band-cyan">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-twilight">
            <Mountain className="size-7 text-teal-blue" />
            <span className="font-display">TripEleven</span>
          </Link>
          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[15px] font-medium text-twilight/80 transition-colors hover:text-twilight"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href={SIGNUP_URL} className="hidden text-[15px] font-medium text-twilight md:block">
              Login
            </a>
            <Button variant="hero" size="lg" className="hidden sm:inline-flex" asChild>
              <a href={SIGNUP_URL}>Start free</a>
            </Button>
            <button
              className="lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6 text-twilight" /> : <Menu className="size-6 text-twilight" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-twilight/10 px-6 pb-6 lg:hidden">
            <div className="flex flex-col gap-4 pt-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-twilight"
                >
                  {l.label}
                </Link>
              ))}
              <a href={SIGNUP_URL} className="text-base font-medium text-twilight">
                Login
              </a>
              <Button variant="hero" asChild>
                <a href={SIGNUP_URL}>Start free</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
