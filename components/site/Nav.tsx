"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LOGIN_URL, SIGNUP_URL } from "@/lib/site";

const links = [
  { label: "Features", href: "/features" },
  { label: "Trip builder", href: "/trip-builder" },
  { label: "AI", href: "/ai" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 w-screen z-99">
      <div
        className={`bg-twilight text-primary-foreground transition-all duration-300 ${
          scrolled ? "h-0 overflow-hidden" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-3 text-sm">
          <span>See a live agency running on TripEleven</span>
          <a
            href="https://walkthroughnepal.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-semibold underline"
          >
            View demo <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
      <nav
        className={`border-b border-border bg-white/80 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-twilight">
            <span className="font-display">TripEleven</span>
          </Link>
          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`text-[15px] font-medium transition-colors ${
                  isActive(l.href)
                    ? "font-semibold text-teal-blue"
                    : "text-twilight/80 hover:text-twilight"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outlineDark" size="lg" className="hidden sm:inline-flex" asChild>
              <a href={LOGIN_URL} className="" target="_blank">
                Login
              </a>
            </Button>
            <Button variant="hero" size="lg" className="hidden sm:inline-flex" asChild>
              <a href={SIGNUP_URL} target="_blank">Start free</a>
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
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`text-base font-medium ${
                    isActive(l.href) ? "font-semibold text-teal-blue" : "text-twilight"
                  }`}
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
