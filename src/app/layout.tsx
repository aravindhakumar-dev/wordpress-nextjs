import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aravindhakumar G | Full-Stack Web Developer",

  description:
    "Full-Stack Web Developer specializing in WordPress, Shopify, Next.js and performance engineering.",

  keywords: [
    "WordPress Developer",
    "Shopify Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "Frontend Developer",
  ],

  openGraph: {
    title: "Aravindhakumar G",
    description:
      "Full-Stack Web Developer Portfolio",
    url: "https://aravindhakumar.com",
    siteName: "Aravindhakumar Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}