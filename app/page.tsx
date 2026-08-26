import Image from "next/image";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { FeatureSplit } from "@/components/site/FeatureSplit";

import { AiSection } from "@/components/site/AiSection";
import { Testimonials } from "@/components/site/Testimonials";
import { Clients } from "@/components/site/Clients";
import { Pricing } from "@/components/site/Pricing";
import { Cta } from "@/components/site/Cta";

function Wave() {
  return (
    <div className="w-full overflow-hidden leading-[0]">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="h-10 w-full">
        <path
          d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z"
          fill="var(--cyan-lite)"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Wave />
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
        visual={
          <div className="relative ml-24 scale-160 rounded-md">
            <Image src={"/product-images/trip-editor-2.png"} width={1900} height={800} alt="trip builder" className="block w-full rounded-md" />
            <div className="pointer-events-none absolute inset-0 rounded-md bg-[radial-gradient(ellipse_at_center,transparent_55%,white_98%)]" />
          </div>
        }
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
              className="w-1/2 max-w-[290px] rounded-lg border border-border object-cover"
            />
            <Image
              src="/images/hero-group.jpg"
              alt="Group of travelers with their guide"
              width={900}
              height={1200}
              loading="lazy"
              className="mt-12 w-1/2 max-w-[290px] rounded-lg border border-border object-cover"
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
        visual={
          <div className="relative rounded-3xl bg-cyan-lite p-8 sm:p-12">
            <svg viewBox="0 0 480 360" className="w-full" role="img" aria-label="Drag-and-drop website builder preview">
              {/* Browser chrome */}
              <rect x="20" y="10" width="440" height="340" rx="12" fill="white" stroke="var(--twilight)" strokeOpacity="0.12" />
              <rect x="20" y="10" width="440" height="36" rx="12" fill="var(--cyan-lite)" />
              <rect x="20" y="34" width="440" height="12" fill="var(--cyan-lite)" />
              <circle cx="42" cy="28" r="5" fill="#f87171" />
              <circle cx="58" cy="28" r="5" fill="#fbbf24" />
              <circle cx="74" cy="28" r="5" fill="#34d399" />
              <rect x="100" y="21" width="180" height="14" rx="7" fill="white" fillOpacity="0.7" />
              <text x="190" y="32" textAnchor="middle" fontSize="9" fill="var(--twilight)" fillOpacity="0.4" fontFamily="system-ui">walkthroughnepal.com</text>

              {/* Navbar */}
              <rect x="36" y="56" width="408" height="32" rx="6" fill="var(--twilight)" />
              <rect x="48" y="66" width="60" height="10" rx="2" fill="white" fillOpacity="0.9" />
              <text x="78" y="74" textAnchor="middle" fontSize="8" fontWeight="600" fill="white" fontFamily="system-ui">Logo</text>
              <rect x="180" y="69" width="32" height="5" rx="2" fill="white" fillOpacity="0.5" />
              <rect x="222" y="69" width="32" height="5" rx="2" fill="white" fillOpacity="0.5" />
              <rect x="264" y="69" width="32" height="5" rx="2" fill="white" fillOpacity="0.5" />
              <rect x="306" y="69" width="32" height="5" rx="2" fill="white" fillOpacity="0.5" />
              <rect x="390" y="62" width="44" height="20" rx="5" fill="var(--teal-blue)" />
              <text x="412" y="75" textAnchor="middle" fontSize="7" fontWeight="600" fill="white" fontFamily="system-ui">Book</text>

              {/* Hero area */}
              <rect x="36" y="100" width="200" height="14" rx="3" fill="var(--twilight)" fillOpacity="0.8" />
              <rect x="36" y="122" width="160" height="8" rx="2" fill="var(--twilight)" fillOpacity="0.25" />
              <rect x="36" y="136" width="140" height="8" rx="2" fill="var(--twilight)" fillOpacity="0.15" />
              <rect x="36" y="156" width="60" height="22" rx="5" fill="var(--teal-blue)" />
              <text x="66" y="170" textAnchor="middle" fontSize="7" fontWeight="600" fill="white" fontFamily="system-ui">Explore</text>

              {/* Hero image placeholder */}
              <rect x="260" y="100" width="184" height="130" rx="8" fill="var(--surf)" fillOpacity="0.3" />
              <path d="M310 200 L340 150 L370 180 L400 130 L430 170 L430 230 L260 230 Z" fill="var(--surf)" fillOpacity="0.5" />
              <path d="M280 230 L320 170 L360 200 L400 155 L440 190 L444 230 Z" fill="var(--teal-blue)" fillOpacity="0.2" />

              {/* Trip cards */}
              <rect x="36" y="200" width="88" height="60" rx="6" fill="white" stroke="var(--twilight)" strokeOpacity="0.08" />
              <rect x="36" y="200" width="88" height="30" rx="6" fill="var(--surf)" fillOpacity="0.3" />
              <path d="M36 220 L60 208 L80 216 L100 204 L124 220 L124 230 L36 230 Z" fill="var(--surf)" fillOpacity="0.5" />
              <rect x="44" y="238" width="50" height="5" rx="2" fill="var(--twilight)" fillOpacity="0.3" />
              <rect x="44" y="248" width="36" height="4" rx="2" fill="var(--twilight)" fillOpacity="0.15" />

              <rect x="134" y="200" width="88" height="60" rx="6" fill="white" stroke="var(--twilight)" strokeOpacity="0.08" />
              <rect x="134" y="200" width="88" height="30" rx="6" fill="var(--teal-blue)" fillOpacity="0.15" />
              <path d="M140 225 L160 210 L180 220 L200 208 L222 225 L222 230 L134 230 Z" fill="var(--teal-blue)" fillOpacity="0.25" />
              <rect x="142" y="238" width="50" height="5" rx="2" fill="var(--twilight)" fillOpacity="0.3" />
              <rect x="142" y="248" width="36" height="4" rx="2" fill="var(--twilight)" fillOpacity="0.15" />

              <rect x="232" y="200" width="88" height="60" rx="6" fill="white" stroke="var(--twilight)" strokeOpacity="0.08" />
              <rect x="232" y="200" width="88" height="30" rx="6" fill="var(--surf)" fillOpacity="0.25" />
              <path d="M238 225 L258 210 L278 220 L298 208 L320 225 L320 230 L232 230 Z" fill="var(--surf)" fillOpacity="0.4" />
              <rect x="240" y="238" width="50" height="5" rx="2" fill="var(--twilight)" fillOpacity="0.3" />
              <rect x="240" y="248" width="36" height="4" rx="2" fill="var(--twilight)" fillOpacity="0.15" />

              {/* Footer */}
              <rect x="36" y="274" width="408" height="60" rx="6" fill="var(--twilight)" fillOpacity="0.06" />
              <rect x="48" y="284" width="50" height="8" rx="2" fill="var(--twilight)" fillOpacity="0.25" />
              <rect x="48" y="298" width="80" height="5" rx="2" fill="var(--twilight)" fillOpacity="0.12" />
              <rect x="48" y="308" width="70" height="5" rx="2" fill="var(--twilight)" fillOpacity="0.12" />
              <rect x="160" y="284" width="40" height="5" rx="2" fill="var(--twilight)" fillOpacity="0.18" />
              <rect x="160" y="294" width="55" height="4" rx="2" fill="var(--twilight)" fillOpacity="0.10" />
              <rect x="160" y="303" width="45" height="4" rx="2" fill="var(--twilight)" fillOpacity="0.10" />
              <rect x="160" y="312" width="50" height="4" rx="2" fill="var(--twilight)" fillOpacity="0.10" />
              <rect x="240" y="284" width="40" height="5" rx="2" fill="var(--twilight)" fillOpacity="0.18" />
              <rect x="240" y="294" width="50" height="4" rx="2" fill="var(--twilight)" fillOpacity="0.10" />
              <rect x="240" y="303" width="40" height="4" rx="2" fill="var(--twilight)" fillOpacity="0.10" />
              <rect x="370" y="284" width="60" height="20" rx="4" fill="var(--teal-blue)" fillOpacity="0.15" />
              <text x="400" y="297" textAnchor="middle" fontSize="6" fill="var(--teal-blue)" fontFamily="system-ui">Newsletter</text>

              {/* Drag handle indicator */}
              <rect x="450" y="106" width="8" height="28" rx="4" fill="var(--teal-blue)" fillOpacity="0.6" />
              <circle cx="454" cy="114" r="1.5" fill="white" fillOpacity="0.8" />
              <circle cx="454" cy="120" r="1.5" fill="white" fillOpacity="0.8" />
              <circle cx="454" cy="126" r="1.5" fill="white" fillOpacity="0.8" />
            </svg>
          </div>
        }
      />

      <Testimonials />
      <Pricing />
      <Cta />
    </main>
  );
}
