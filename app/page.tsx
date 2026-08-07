import Image from "next/image";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { FeatureSplit } from "@/components/site/FeatureSplit";
import { BuilderVisual, ChannelVisual } from "@/components/site/Visuals";
import { AiSection } from "@/components/site/AiSection";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { Cta } from "@/components/site/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />

      <FeatureSplit
        id="builder"
        eyebrow="Trip management"
        title="Built for real operators, not generic listings."
        body="An 11-step trip builder with tabbed itinerary variants, drag-and-drop days, altitude charts, FAQ groups and pricing tiers — everything a trekking or adventure operator actually needs."
        points={[
          "Multiple itinerary variants (Standard / Premium) with sortable days, meals, distance and ascent",
          "Live altitude profiles built from your own location and elevation points",
          "Departures and slots with capacity, available spots and per-date pricing",
        ]}
        cta="See the builder"
        ctaHref="/trip-builder"
        visual={<BuilderVisual />}
      />

      <AiSection />

      <FeatureSplit
        id="inquiries"
        tone="tint"
        reverse
        eyebrow="Bookings & payments"
        title="Your travelers, your bookings, your payments."
        body="Travelers register, request a departure and pay through our secure online checkout. You watch every booking move from pending to confirmed in one dashboard."
        points={[
          "Secure payment checkout with verification, deposits or full payment",
          "Full lifecycle: pending → confirmed → completed, cancelled or failed",
          "Customer accounts with reviews, ratings and wishlists, in USD or NPR",
        ]}
        cta="Explore bookings"
        ctaHref="/bookings"
        visual={
          <Image
            src="/images/dashboard-desk.jpg"
            alt="Travel agency admin dashboard open on a laptop"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-3xl shadow-[0_30px_80px_-40px_oklch(0.23_0.176_269/0.5)]"
          />
        }
      />

      <FeatureSplit
        id="content"
        eyebrow="Content & media"
        title="Forget spreadsheets. Focus on guests."
        body="A block-based editor with slash commands, live trip embeds and reading time — plus a production-grade media library that does the image work for you."
        points={[
          "Type / to insert headings, tables, trip embeds and featured-trip widgets",
          "Automatic WebP conversion, compression and built-in cropping presets",
          "Alt text and captions baked into the file for accessibility and SEO",
        ]}
        cta="Explore the editor"
        ctaHref="/features"
        visual={
          <div className="flex justify-center gap-4">
            <Image
              src="/images/lake.jpg"
              alt="Turquoise alpine lake with wooden boats"
              width={900}
              height={1100}
              loading="lazy"
              className="tilt-a w-1/2 max-w-[290px] rounded-sm border-8 border-background object-cover"
            />
            <Image
              src="/images/hero-group.jpg"
              alt="Group of travelers with their guide"
              width={900}
              height={1200}
              loading="lazy"
              className="tilt-b mt-12 w-1/2 max-w-[290px] rounded-sm border-8 border-background object-cover"
            />
          </div>
        }
      />

      <FeatureSplit
        id="template"
        tone="tint"
        reverse
        eyebrow="Public website"
        title="A complete agency website without developers."
        body="Our public API powers a launch-ready, fully brandable theme. Curate it from the dashboard — featured trips, menus, testimonials, team and reviews — and it shapes your live site."
        points={[
          "Drag-and-drop navbar and footer builder with nested dropdowns",
          "Per-trip SEO: meta, canonical, Open Graph 1200×630 and JSON-LD schema",
          "Auto slugs with permanent 301 redirects and a redirect manager with cycle detection",
        ]}
        cta="See the SEO toolkit"
        ctaHref="/seo"
        visual={<ChannelVisual />}
      />

      <Testimonials />
      <Pricing />
      <Cta />
    </main>
  );
}
