import Image from "next/image";
import { Button } from "../ui/button";

const clients = [
  { name: "Walkthrough Nepal", href: "https://walkthroughnepal.com/", shot: "walkthrough-nepal" },
  { name: "Lovely Trips", href: "http://lovelytrips.com.np/", shot: "lovely-trips" },
  { name: "HI Nepal Treks", href: "https://hinepaltreks.com/", shot: "hi-nepal-treks" },
  { name: "Summit Luxury Treks", href: "http://summitluxurytreks.com/", shot: "summit-luxury-treks" },
  { name: "Essence Treks Nepal", href: "https://essencetreksnepal.com/", shot: "essence-treks" },
  { name: "Limestone Treks", href: "https://limestonetreks.com/", shot: "limestone-treks" },
  { name: "Into Nepal Treks", href: "https://new.intonepaltreks.com/", shot: "into-nepal-treks" },
];

export function Clients() {
  return (
    <section className="overflow-x-clip border-b border-border bg-background py-24">
      <h2 className="px-6 text-center text-3xl text-twilight sm:text-4xl">Made for tour operators like you</h2>
      <p className="mx-auto mt-4 max-w-xl px-6 text-center text-lg text-twilight/70">
        Real agency websites, live and selling on TripEleven.
      </p>
      <div className="mt-14 overflow-hidden">
        <div className="flex w-max animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((half) => (
            <div key={half} aria-hidden={half === 1} className="flex">
              {clients.map((c) => (
                <a
                  key={`${half}-${c.href}`}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={half === 1 ? -1 : undefined}
                  className="relative group mx-4 block h-[90vh] w-50 md:w-[30vw] max-w-7xl shrink-0 overflow-hidden rounded-md border bg-card transition-colors hover:border-primary"
                >
                  <div className="absolute top-90 left-40 hidden group-hover:block p-2  text-white rounded-sm hover:opacity-90 bg-primary">Visit Website</div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/product-images/clients/${c.shot}.jpg`}
                    alt={`${c.name} website`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />

                  {/*<p className="border-t border-border px-4 py-4 text-center text-lg font-bold text-twilight/80 transition-colors group-hover:text-primary">
                    {c.name}
                  </p>*/}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
