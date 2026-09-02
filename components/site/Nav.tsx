"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LOGIN_URL, SIGNUP_URL } from "@/lib/site";

const links = [
  { label: "Features", href: "/#builder" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/#builder" ? pathname === "/" : pathname === href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 w-screen z-99">
      <a
        href="https://walkthroughnepal.com"
        target="_blank"
        rel="noreferrer"
        className={`block bg-twilight text-primary-foreground transition-all duration-300 ${
          scrolled ? "h-0 overflow-hidden" : ""
        }`}
      >
        <div className="container flex items-center justify-center gap-2 py-2 text-sm">
          <span>See a live agency running on TripEleven</span>
          <span className="inline-flex items-center gap-1 font-semibold underline">
            View demo <ArrowRight className="size-4" />
          </span>
        </div>
      </a>
      <nav
        className={`border-b border-border bg-white/80 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div
          className={`container flex items-center justify-between transition-all duration-300 ${
            scrolled ? "py-3" : "py-4"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-twilight">
            <span className="font-display">TripEleven</span>
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`text-[15px] transition-colors ${
                  isActive(l.href)
                    ? "font-semibold text-teal-blue"
                    : "font-medium text-twilight/80 hover:text-twilight"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="lg" className="hidden sm:inline-flex" asChild>
              <a href={LOGIN_URL} target="_blank">Login</a>
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
