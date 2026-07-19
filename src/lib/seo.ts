import { Metadata } from "next";

const SITE_URL = "https://aravindhakumar.com";

const SITE_NAME = "Aravindhakumar G";

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = "/og-image.jpg",
  url = SITE_URL,
}: {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}): Metadata {
  return {
    title,

    description,

    keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,

      description,

      url,

      siteName: SITE_NAME,

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],

      locale: "en_US",

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [image],
    },
  };
}