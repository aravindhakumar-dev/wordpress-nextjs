import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const siteUrl = "https://aravindhakumar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Aravindhakumar G | WordPress, Next.js, Flutter Mobile Apps & AI Consultant",
    template: "%s | Aravindhakumar G",
  },

  description:
    "Senior Freelance Full-Stack & Mobile App Developer specializing in WordPress architectures, Next.js applications, cross-platform Flutter (iOS & Android) mobile app development, and autonomous AI systems for global businesses.",

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
    "Flutter Developer",
    "Freelance Flutter Developer",
    "Flutter Mobile App Development",
    "Cross-Platform App Developer",
    "iOS and Android App Developer",
    "Hire Flutter Developer",
    "Dart Developer",
    "Mobile App Freelancer",
    "WordPress Developer",
    "WooCommerce Developer",
    "Next.js Developer",
    "React Developer",
    "AI Agent Developer",
    "Autonomous AI Agents",
    "Django Developer",
    "Python Web Development",
    "Full Stack Developer",
    "Remote Web Consultant",
    "Core Web Vitals",
    "Technical SEO",
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
    title: "Aravindhakumar G | Full-Stack Web & Flutter Mobile App Developer",

    description:
      "Professional portfolio showcasing WordPress architectures, WooCommerce, Next.js webapps, and cross-platform Flutter iOS/Android mobile apps.",

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

    title: "Aravindhakumar G | Web & Mobile App Developer",

    description:
      "WordPress architectures, Next.js applications, cross-platform Flutter mobile apps, and autonomous AI agents.",

    images: ["/og-image.jpg"],
  },

  appleWebApp: {
    capable: true,
    title: "Aravindhakumar Portfolio",
    statusBarStyle: "default",
  },

  referrer: "origin-when-cross-origin",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aravindhakumar G",
  url: siteUrl,
  jobTitle: "Senior Full-Stack & Mobile App Developer",
  sameAs: [
    "https://github.com/aravindhakumar-dev",
    "https://www.linkedin.com/in/aravindhakumar-g",
  ],
  knowsAbout: [
    "Flutter Mobile App Development",
    "Dart",
    "Cross-Platform iOS & Android Apps",
    "WordPress Development",
    "WooCommerce",
    "Next.js",
    "React",
    "Autonomous AI Agents",
    "Python",
    "Django REST Framework",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Freelance Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cross-Platform Flutter Mobile App Development",
          description:
            "High-performance native iOS and Android mobile applications built with Flutter and Dart, responsive UI/UX, REST API/Firebase integration, and App Store/Play Store deployment.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Complete WordPress & WooCommerce Engineering",
          description:
            "Custom themes, bespoke plugins, high-converting WooCommerce storefronts, and booking systems.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Next.js & React Web Applications",
          description:
            "Scalable full-stack web applications, headless commerce, SSR/SSG, and reactive UI architecture.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Autonomous AI Agents & Intelligent Automation",
          description:
            "Custom AI agent workflows, LLM tool-calling pipelines, automated data extraction, and intelligent systems.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <GoogleTagManager gtmId="GTM-5M9Q7KGN" />
      </body>
    </html>
  );
}