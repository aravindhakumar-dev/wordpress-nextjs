/**
 * Join class names together.
 */
export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Convert a string into a URL-friendly slug.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-");
}

/**
 * Format a date.
 */
export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

/**
 * Truncate long text.
 */
export function truncate(text: string, length = 150) {
  if (text.length <= length) return text;

  return `${text.substring(0, length)}...`;
}