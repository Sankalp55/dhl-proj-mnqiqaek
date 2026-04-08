/**
 * Utility functions for DHL Logistics Corporate Site
 */

/**
 * Joins class names conditionally.
 * @param classes - list of class names
 * @returns joined className string
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Formats a year range for copyright.
 * @param startYear - e.g. 2024
 * @returns string, e.g. "2024" or "2024–2025"
 */
export function copyrightYear(startYear: number): string {
  const now = new Date().getFullYear();
  return startYear === now ? `${now}` : `${startYear}–${now}`;
}
