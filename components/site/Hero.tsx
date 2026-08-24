import { Check } from "lucide-react";
import Image from "next/image";
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
          <h1 className="text-5xl leading-[1.05] text-twilight sm:text-6xl lg:text-7xl">
            More trips sold.
            <br />
            Less admin.
          </h1>
          <p className="mt-7 max-w-lg text-lg text-twilight/75">
            TripEleven is the platform for tour operators, trekking companies and DMCs —
            build your catalog, publish a full website, and take bookings without writing a line of
            code.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <a href={SIGNUP_URL}>Start for free</a>
            </Button>
            <Button variant="outlineDark" size="xl" asChild>
              <a href="/trip-builder">See the trip builder</a>
            </Button>
          </div>
          <p className="mt-4 text-sm italic text-twilight/70">No credit card required</p>
        </div>
        <div className="relative flex justify-center gap-4 lg:justify-end">
          <Image
            src="/images/hero-trek.jpg"
            alt="Trekker on a Himalayan ridge at sunrise"
            width={900}
            height={1200}
            className="w-1/2 max-w-[300px] rounded-lg border border-border object-cover"
          />
          <Image
            src="/images/hero-group.jpg"
            alt="Travelers with a local guide in a Kathmandu street"
            width={900}
            height={1200}
            loading="lazy"
            className="mt-14 w-1/2 max-w-[300px] rounded-lg border border-border object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid overflow-hidden rounded-xl bg-border md:grid-cols-3">
          {proofs.map((p) => (
            <div key={p.bold} className="flex gap-3 bg-card p-6 [&:not(:last-child)]:border-b md:border-b-0 md:[&:not(:last-child)]:border-r border-border">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-twilight">
                <Check className="size-4 text-primary-foreground" />
              </span>
              <p className="text-twilight/85">
                <strong className="font-bold text-twilight">{p.bold}</strong> {p.rest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
