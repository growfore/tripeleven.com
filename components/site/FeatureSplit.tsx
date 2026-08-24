import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FeatureSplit({
  id,
  eyebrow,
  title,
  body,
  points,
  cta = "Explore more",
  ctaHref = "#cta",
  visual,
  reverse = false,
  tone = "light",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  body: string;
  points: string[];
  cta?: string;
  ctaHref?: string;
  visual: ReactNode;
  reverse?: boolean;
  tone?: "light" | "tint";
}) {
  return (
    <section
      id={id}
      className={cn("overflow-x-clip px-6 py-20 lg:py-28", tone === "tint" ? "bg-cyan-lite/50" : "bg-background")}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className={cn(reverse && "lg:order-2")}>
          {eyebrow && (
            <p className="mb-4 text-sm font-bold tracking-widest text-teal-blue uppercase">
              {eyebrow}
            </p>
          )}
          <h2 className="max-w-xl text-4xl text-twilight sm:text-5xl">{title}</h2>
          <p className="mt-6 max-w-xl text-lg text-twilight/75">{body}</p>
          <ul className="mt-10 space-y-5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-4">
                <ChevronRight className="mt-0.5 size-5 shrink-0 text-twilight" strokeWidth={3} />
                <span className="max-w-lg text-twilight/85">{p}</span>
              </li>
            ))}
          </ul>
          <Button variant="hero" size="lg" className="my-10" asChild>
            <a href={ctaHref}>{cta}</a>
          </Button>
        </div>
        <div className={cn("relative ", reverse && "lg:order-1")}>{visual}</div>
      </div>
    </section>
  );
}
