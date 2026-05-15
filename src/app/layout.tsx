import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://aravindhakumar.com"),

  title: "Aravindhakumar G | Full-Stack Web Developer",

  description:
    "Full-Stack Web Developer specializing in WordPress, Shopify, Next.js and performance engineering.",

  verification: {
    google:
      "_ZwI5ZVyMSPxHJRU1d98xTZ-a8dQQDLhcxIUCIMzUBQ",
  },

  keywords: [
    "WordPress Developer",
    "Shopify Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "WooCommerce Developer",
    "React Developer",
  ],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Aravindhakumar G",
    description:
      "Full-Stack Web Developer Portfolio",

    url: "https://aravindhakumar.com",

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <GoogleTagManager gtmId="GTM-5M9Q7KGN" />
      </body>
    </html>
  );
}