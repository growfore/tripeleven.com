"use client";

import { ChevronsRight, RefreshCw, LayoutTemplate } from "lucide-react";
import { motion } from "motion/react";

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
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl text-twilight sm:text-5xl"
        >
          Hello inquiries.
          <br />
          Bye-bye spreadsheet chaos.
        </motion.h2>
        <div className="mt-14 grid gap-px overflow-hidden bg-border md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="bg-card p-8"
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-teal-blue/10">
                <item.icon className="size-7 text-teal-blue" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-twilight">{item.title}</h3>
              <p className="mt-3 text-twilight/80">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
