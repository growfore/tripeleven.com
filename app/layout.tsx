import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-display",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Voyari — Trip platform for travel agencies",
  description:
    "White-label platform for tour operators and DMCs: trip catalog, AI itineraries, inquiries, payments and SEO.",
  icons: "/favicon.ico",
  openGraph: {
    type: "website",
    title: "Voyari — White-label trip platform for travel agencies",
    description:
      "Launch a complete travel agency website: trip catalog, AI itineraries, inquiries, Stripe payments and SEO — no code required.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${jakarta.variable}`}>{children}</body>
    </html>
  );
}
