import type {
  GalleryImage,
  FeatureItem,
  MetricItem,
  SeoMeta,
} from "./common";

export interface Project {
  id: number;

  slug: string;

  title: string;

  category: string;

  shortDescription: string;

  description: string;

  thumbnail: string;

  gallery: GalleryImage[];

  liveUrl: string;

  featured: boolean;

  technologies: string[];

  highlights: string[];

  metrics: MetricItem[];

  overview: string;

  challenge: string;

  solution: string;

  features: FeatureItem[];

  results: string[];

  seo: SeoMeta;
}