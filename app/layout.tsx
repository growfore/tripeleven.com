import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Livvic, Sora } from "next/font/google";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Cta";
import { ClarityAnalytics } from "@/components/site/Clarity";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

// const sora = Sora({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-sans",
// });

const livvic = Livvic({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Trip platform for travel agencies`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Launch a complete travel agency website: trip catalog, AI itineraries, bookings, secure online payments and SEO — no code required.",
  icons: "/favicon.ico",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Trip platform for travel agencies`,
    description:
      "Launch a complete travel agency website: trip catalog, AI itineraries, bookings, secure online payments and SEO — no code required.",
    url: SITE_URL,
    images: [{ url: "/images/hero-trek.jpg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      email: "hello@tripeleven.com",
      logo: `${SITE_URL}/favicon.ico`,
    },
    {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
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
      <body className={`${livvic.variable}`}>
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
