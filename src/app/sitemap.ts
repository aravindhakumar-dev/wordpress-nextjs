import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aravindhakumar.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "weekly",
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...projectRoutes];
}
