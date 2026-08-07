import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("band-cyan px-6 py-20 lg:py-28", className)}>
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-bold tracking-widest text-teal-blue uppercase">{eyebrow}</p>
        <h1 className="mt-4 text-4xl text-twilight sm:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-twilight/75">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">{children}</div>}
      </div>
    </section>
  );
}
