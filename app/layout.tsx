import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Barlow_Semi_Condensed, Livvic } from "next/font/google";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Cta";
import { ClarityAnalytics } from "@/components/site/Clarity";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import {
  developer,
  developerPerson,
  growforeOrganization,
} from "@/lib/developer-attribution";
import "./globals.css";


const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
})

const livvic = Livvic({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Trip platform for travel agencies`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Launch a complete travel agency website: trip catalog, AI itineraries, trip inquiries, custom branding and SEO — no code required.",
  icons: "/favicon.ico",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Trip platform for travel agencies`,
    description:
      "Launch a complete travel agency website: trip catalog, AI itineraries, trip inquiries, custom branding and SEO — no code required.",
    url: SITE_URL,
    images: [{ url: "/images/hero-trek.jpg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
  },
  creator: developer.name,
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      email: "hello@tripeleven.com",
      logo: `${SITE_URL}/favicon.ico`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
      creator: [
        { "@id": growforeOrganization["@id"] },
        { "@id": developerPerson["@id"] },
      ],
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    growforeOrganization,
    developerPerson,
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      creator: { "@id": developerPerson["@id"] },
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${barlow.variable} ${livvic.variable}`}>
        <ClarityAnalytics />
        <Nav />
        <div className="pt-28">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
