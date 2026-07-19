export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}

export interface ButtonLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface FeatureItem {
  id: number;
  title: string;
  description?: string;
}

export interface MetricItem {
  id: number;
  label: string;
}

export interface TechnologyItem {
  id: number;
  name: string;
}