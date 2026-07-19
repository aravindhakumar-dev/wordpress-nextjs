import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const siteUrl = "https://aravindhakumar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Aravindhakumar G | WordPress, Shopify & Next.js Developer",
    template: "%s | Aravindhakumar G",
  },

  description:
    "Professional Full-Stack Web Developer specializing in WordPress, Shopify, WooCommerce, Next.js, React and Performance Optimization. Helping businesses build fast, scalable, SEO-friendly websites.",

  applicationName: "Aravindhakumar Portfolio",

  authors: [
    {
      name: "Aravindhakumar G",
      url: siteUrl,
    },
  ],

  creator: "Aravindhakumar G",

  publisher: "Aravindhakumar G",

  category: "Technology",

  keywords: [
    "WordPress Developer",
    "WooCommerce Developer",
    "Shopify Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer",
    "Performance Optimization",
    "Headless WordPress",
    "Technical SEO",
    "Frontend Developer",
    "Web Performance Engineer",
    "Freelance WordPress Developer",
  ],

  verification: {
    google: "_ZwI5ZVyMSPxHJRU1d98xTZ-a8dQQDLhcxIUCIMzUBQ",
  },

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Aravindhakumar G | Full-Stack Web Developer",

    description:
      "Professional portfolio showcasing WordPress, Shopify, Next.js and Performance Engineering projects.",

    url: siteUrl,

    siteName: "Aravindhakumar Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aravindhakumar Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Aravindhakumar G",

    description:
      "Professional Full-Stack Web Developer Portfolio",

    images: ["/og-image.jpg"],
  },

  appleWebApp: {
    capable: true,
    title: "Aravindhakumar Portfolio",
    statusBarStyle: "default",
  },

  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleTagManager gtmId="GTM-5M9Q7KGN" />
      </body>
    </html>
  );
}