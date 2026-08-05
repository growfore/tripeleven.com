import { ArrowRight, Mountain, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = ["Platform", "Trip builder", "AI", "Inquiries", "Pricing"];

export function Nav() {
  return (
    <header>
      <div className="bg-twilight text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-3 text-sm">
          <span>Launching soon: the fully customizable public website template</span>
          <a href="#template" className="inline-flex items-center gap-1 font-semibold underline">
            See what&apos;s coming <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
      <nav className="band-cyan">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-twilight">
            <Mountain className="size-7 text-teal-blue" />
            <span className="font-display">Voyari</span>
          </Link>
          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
                className="text-[15px] font-medium text-twilight/80 transition-colors hover:text-twilight"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="hidden text-[15px] font-medium text-twilight md:block">
              Login
            </a>
            <Button variant="hero" size="lg" className="hidden sm:inline-flex" asChild>
              <a href="#cta">Start free trial</a>
            </Button>
            <button className="lg:hidden" aria-label="Open menu">
              <Menu className="size-6 text-twilight" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
