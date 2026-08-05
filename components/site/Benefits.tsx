import { ChevronsRight, RefreshCw, LayoutTemplate } from "lucide-react";

const items = [
  {
    icon: ChevronsRight,
    title: "Sell more trips",
    body: "Featured collections, curated tags, reviews, wishlists and popularity tracking put your best departures in front of travelers.",
  },
  {
    icon: RefreshCw,
    title: "Do less admin",
    body: "Departures, capacity, pricing tiers, PDF itineraries and traveler emails all run from one dashboard.",
  },
  {
    icon: LayoutTemplate,
    title: "Get online fast",
    body: "Drag-and-drop menus, a block editor and a brandable website template. No developers, no code.",
  },
];

export function Benefits() {
  return (
    <section id="platform" className="bg-background px-6 py-20">
      <div className="mx-auto max-w-7xl rounded-4xl band-cyan px-8 py-16 sm:px-14">
        <h2 className="text-center text-4xl text-twilight sm:text-5xl">
          Hello inquiries.
          <br />
          Bye-bye spreadsheet chaos.
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="text-center">
              <i.icon className="mx-auto size-11 text-twilight" strokeWidth={2.4} />
              <h3 className="mt-6 text-xl font-bold text-twilight">{i.title}</h3>
              <p className="mt-3 text-twilight/80">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
