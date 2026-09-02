import Image from "next/image";
import { Wand2, MessageCircle, Globe, ImageIcon, Search, LayoutTemplate } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { FeatureSplit } from "@/components/site/FeatureSplit";
import { AiSection } from "@/components/site/AiSection";
import { Faq } from "@/components/site/Faq";
import { Testimonials } from "@/components/site/Testimonials";
import { Clients } from "@/components/site/Clients";
import { Pricing } from "@/components/site/Pricing";
import { Cta } from "@/components/site/Cta";
import { SIGNUP_URL } from "@/lib/site";

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

const features = [
  {
    icon: LayoutTemplate,
    title: "Trip builder",
    body: "A structured builder with tabbed itinerary variants, drag-and-drop days, altitude charts, FAQ groups and pricing tiers.",
  },
  {
    icon: Wand2,
    title: "AI trip generation",
    body: "Batch-generate full day-by-day itineraries with Claude, then polish them in the same builder your team already uses.",
  },
  {
    icon: MessageCircle,
    title: "Trip inquiries",
    body: "Every trip gets an inquiry form and your WhatsApp link — leads land in one clean dashboard so you can respond fast.",
  },
  {
    icon: Globe,
    title: "Public website",
    body: "A launch-ready, fully brandable website powered by your catalog — curated from the dashboard with drag-and-drop menus.",
  },
  {
    icon: Search,
    title: "SEO toolkit",
    body: "Per-trip meta and schema markup, Open Graph, auto-slugs with 301 redirects, and a redirect manager with cycle detection.",
  },
  {
    icon: ImageIcon,
    title: "Media library",
    body: "Automatic WebP conversion and alt text baked into every file for accessibility and SEO.",
  },
];

const audiences = [
  {
    title: "Tour & trekking operators",
    body: "Altitude charts, itinerary variants, departures with capacity, and printable trip facts make TripEleven the natural home for Himalaya and trekking operators.",
  },
  {
    title: "Destination management companies",
    body: "Each client keeps its own catalog, content and inquiries, cleanly separated. Manage every brand from one dashboard.",
  },
  {
    title: "Adventure & specialty travel",
    body: "Safaris, rafting, hiking and mountaineering all get the same structured builder — trip facts, difficulty, seasons and per-departure pricing.",
  },
  {
    title: "Boutique travel agencies",
    body: "Launch a complete website with your own branding — no developers, no code. Curate and publish from the dashboard.",
  },
];

const faqs = [
  {
    q: "What is TripEleven?",
    a: "TripEleven is an all-in-one platform for tour and trekking agencies to build, manage and sell trips online — a structured trip builder, AI itinerary generation, a full public website, inquiries and SEO in one workspace.",
  },
  {
    q: "Do I need developers or coding skills?",
    a: "No. Everything runs from a dashboard — build your catalog, publish your website, and collect inquiries without writing a line of code.",
  },
  {
    q: "How is the trip builder different from a form?",
    a: "It\u2019s a guided flow: Basic Info, Trip Facts, Itinerary, Inclusions/Exclusions, Meetings, Media, Pricing, Additional Info, FAQs, SEO and Featured. Every step is purpose-built, not a dump of fields.",
  },
  {
    q: "Can I have multiple versions of one trip?",
    a: "Yes. Tabbed itinerary variants let you offer a Standard and a Premium experience of the same trip, each with its own days, inclusions and pricing.",
  },
  {
    q: "How does AI trip generation work?",
    a: "Drop in up to 10 trip topics and a style. Claude drafts full day-by-day itineraries in one batch, then every draft opens in the trip builder for your team to review, edit and publish.",
  },
  {
    q: "Is the AI output ready to publish?",
    a: "It's a strong first draft, not a finished product. Every generated itinerary lands in the same trip builder so your team reviews, edits and polishes before publishing.",
  },
  {
    q: "How do trip inquiries get to me?",
    a: "Every trip gets an inquiry form with your phone, email and WhatsApp in one place. Leads land in your dashboard as clean, trackable inquiries you respond to on your terms.",
  },
  {
    q: "Can I use my own domain?",
    a: "Yes. On Launch and higher you connect a custom domain, and your published site lives on it with full SEO — canonicals, sitemap and schema markup included.",
  },
  {
    q: "What does my published website include?",
    a: "A launch-ready, brandable website powered by your catalog — featured trips, menus, testimonials, team and reviews — curated from the dashboard with drag-and-drop tools.",
  },
  {
    q: "Is the SEO toolkit built in?",
    a: "Yes. Every trip ships with per-trip meta, canonical and Open Graph, JSON-LD schema, auto-slugs with permanent 301 redirects, and a redirect manager with cycle detection.",
  },
  {
    q: "What happens when a trip slug changes?",
    a: "A permanent 301 redirect is created automatically, so old links and search rankings never break.",
  },
  {
    q: "Can multiple team members work together?",
    a: "Yes. Every agency gets staff roles — Owner, Admin, Manager and Editor — with controlled access, plus a DRAFT \u2192 PUBLISHED pipeline and verification before publishing.",
  },
  {
    q: "Do you support multiple brands or agencies?",
    a: "If you run a destination management company, each client keeps its own catalog, content and inquiries, cleanly separated — all managed from one dashboard.",
  },
  {
    q: "Can I process payments with my own Stripe keys?",
    a: "Yes, on Enterprise you can receive payments through your own Stripe keys, and manage bookings and payments directly in the platform.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Start free with a branded website, up to 5 trips and trip inquiries — no credit card required. Upgrade when you grow.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Wave />
      <Benefits />

      <FeatureSplit
        id="builder"
        title="Built for real operators, not generic listings."
        body="A structured trip builder with tabbed itinerary variants, drag-and-drop days, altitude charts, FAQ groups and pricing tiers — everything a trekking or adventure operator actually needs."
        points={[
          "Multiple itinerary variants (Standard / Premium) with sortable days, meals, distance and ascent",
          "Live altitude profiles built from your own location and elevation points",
          "Departures and slots with capacity, available spots and per-date pricing",
        ]}
        cta="See pricing"
        ctaHref="/pricing"
        visual={
          <div className="relative ml-24 scale-160">
            <Image src={"/product-images/trip-editor-2.png"} width={1900} height={800} alt="trip builder" className="block w-full" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,white_98%)]" />
          </div>
        }
      />

      <section className="border-t border-border bg-background px-6 py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group border border-border bg-card p-8 transition-shadow hover:shadow-lg">
                <f.icon className="size-9 text-teal-blue" strokeWidth={2.2} />
                <h3 className="mt-6 text-xl font-bold text-twilight">{f.title}</h3>
                <p className="mt-3 text-twilight/75">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AiSection />

      <FeatureSplit
        id="inquiries"
        tone="tint"
        reverse
        title="Leads come to you. You close the way your guests already talk."
        body="Travelers send trip inquiries right from your site — through a simple form, email or straight to WhatsApp. You watch every lead land in one dashboard and respond on your terms."
        points={[
          "Inquiry form on every trip with your phone, email and WhatsApp in one place",
          "Every lead lands in your dashboard as a clean, trackable inquiry",
          "No payment friction, no abandoned checkout — your guests contact you directly",
        ]}
        cta="How inquiries work"
        ctaHref="/contact"
        visual={
          <Image
            src="/images/dashboard-desk.jpg"
            alt="Travel agency admin dashboard open on a laptop"
            width={1200}
            height={900}
            loading="lazy"
            className="shadow-[0_30px_80px_-40px_oklch(0.23_0.176_269/0.5)]"
          />
        }
      />

      <FeatureSplit
        id="content"
        title="Forget spreadsheets. Focus on guests."
        body="A block-based editor with slash commands, live trip embeds and reading time — plus a production-grade media library that does the image work for you."
        points={[
          "Type / to insert headings, tables, trip embeds and featured-trip widgets",
          "Automatic WebP conversion and compression, with alt text and captions baked in",
          "Alt text and captions baked into the file for accessibility and SEO",
        ]}
        cta="Start building free"
        ctaHref={SIGNUP_URL}
        visual={
          <div className="flex justify-center gap-4">
            <Image
              src="/images/lake.jpg"
              alt="Turquoise alpine lake with wooden boats"
              width={900}
              height={1100}
              loading="lazy"
              className="w-1/2 max-w-[290px] border border-border object-cover"
            />
            <Image
              src="/images/hero-group.jpg"
              alt="Group of travelers with their guide"
              width={900}
              height={1200}
              loading="lazy"
              className="mt-12 w-1/2 max-w-[290px] border border-border object-cover"
            />
          </div>
        }
      />

      <FeatureSplit
        id="template"
        tone="tint"
        reverse
        title="A complete agency website without developers."
        body="Our public API powers a launch-ready, fully brandable theme. Curate it from the dashboard — featured trips, menus, testimonials, team and reviews — and it shapes your live site."
        points={[
          "Drag-and-drop navbar and footer builder with nested dropdowns",
          "Per-trip SEO: meta, canonical, Open Graph 1200×630 and JSON-LD schema",
          "Auto slugs with permanent 301 redirects and a redirect manager with cycle detection",
        ]}
        cta="See pricing"
        ctaHref="/pricing"
        visual={
          <div className="relative bg-cyan-lite p-8 sm:p-12">
            <Image
              src="/product-images/custom-site.png"
              width={2870}
              height={1826}
              alt="Published trip website"
              className="block w-full border border-border bg-card p-3 shadow-[0_30px_60px_-30px_oklch(0.23_0.176_269/0.4)]"
            />
          </div>
        }
      />

      <section className="border-t border-border bg-background px-6 py-20 lg:py-28">
        <div className="container">
          <h2 className="max-w-xl text-4xl leading-tight tracking-tight text-twilight sm:text-5xl">
            Built for real operators.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-twilight/75">
            TripEleven is an all-in-one platform for tour & travel agencies that build, manage and promote trips online.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {audiences.map((a) => (
              <div key={a.title} className="border border-border bg-card p-9">
                <h3 className="mt-2 text-2xl font-bold text-twilight">{a.title}</h3>
                <p className="mt-3 text-twilight/75">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Pricing />

      <section className="border-t border-border bg-background px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl text-twilight sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-12">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
