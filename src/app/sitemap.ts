import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

    const baseUrl = "https://aravindhakumar.com";

    return [

        {
            url: baseUrl,
            lastModified: new Date(),
            priority: 1,
            changeFrequency: "weekly",
        },

        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            priority: 0.9,
        },

    ];
}