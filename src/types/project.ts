import type {
  GalleryImage,
  FeatureItem,
  MetricItem,
  SeoMeta,
} from "./common";

export interface CodeSnippet {
  language: string;
  code: string;
  caption?: string;
}

export interface ProjectSection {
  title: string;
  subtitle?: string;
  content: string;
  codeSnippet?: CodeSnippet;
  listItems?: string[];
}

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

  sections?: ProjectSection[];

  takeaways?: string[];
}
