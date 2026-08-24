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
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl text-twilight sm:text-4xl">Made for tour operators like you</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-twilight/70">
          Real agency websites, live and selling on TripEleven.
        </p>
        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {clients.map((c) => (
            <li key={c.href}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-xl border border-teal-blue/15 bg-background shadow-[0_30px_80px_-40px_oklch(0.23_0.176_269/0.5)] transition-transform hover:-translate-y-1"
              >
                <Image
                  src={`/product-images/clients/${c.shot}.jpg`}
                  alt={`${c.name} website`}
                  width={1440}
                  height={900}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-top"
                />
                <p className="border-t border-teal-blue/10 px-4 py-3 text-center font-bold text-twilight/80 transition-colors group-hover:text-teal-blue">
                  {c.name}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
