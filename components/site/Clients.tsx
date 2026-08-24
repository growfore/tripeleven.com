import Image from "next/image";

const clients = [
  { name: "Walkthrough Nepal", href: "https://walkthroughnepal.com/", shot: "walkthrough-nepal" },
  { name: "Essence Treks Nepal", href: "https://essencetreksnepal.com/", shot: "essence-treks" },
  { name: "Into Nepal Treks", href: "https://new.intonepaltreks.com/", shot: "into-nepal-treks" },
  { name: "Lovely Trips", href: "http://lovelytrips.com.np/", shot: "lovely-trips" },
  { name: "HI Nepal Treks", href: "https://hinepaltreks.com/", shot: "hi-nepal-treks" },
  { name: "Summit Luxury Treks", href: "http://summitluxurytreks.com/", shot: "summit-luxury-treks" },
  { name: "Limestone Treks", href: "https://limestonetreks.com/", shot: "limestone-treks" },
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
                  className="group mx-4 block w-[44rem] shrink-0 overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary"
                >
                  <Image
                    src={`/product-images/clients/${c.shot}.jpg`}
                    alt={`${c.name} website`}
                    width={1440}
                    height={900}
                    sizes="704px"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-top"
                  />
                  <p className="border-t border-border px-4 py-4 text-center text-lg font-bold text-twilight/80 transition-colors group-hover:text-primary">
                    {c.name}
                  </p>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
