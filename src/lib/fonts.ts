/**
 * Font utilities for consistent typography across the application
 *
 * Available font classes:
 * - font-sans: Google Sans (primary UI font)
 * - font-body: Open Sans (body text font)
 * - font-heading: Roboto Slab (headings and titles)
 *
 * Usage in components:
 * - className="font-sans" - for UI elements and buttons
 * - className="font-body" - for paragraphs and body text
 * - className="font-heading" - for headings and titles
 */

export const fontClasses = {
  sans: 'font-sans',
  body: 'font-body',
  heading: 'font-heading',
} as const;

export type FontClass = keyof typeof fontClasses;
