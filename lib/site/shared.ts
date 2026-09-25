import type { ComponentType } from "react";

/**
 * An image that lives in `/public`. Rendered with `next/image`; give `width` and
 * `height` whenever you know them so the browser can reserve space (CLS).
 */
export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/** A call-to-action link or button. */
export interface CtaLink {
  label: string;
  href: string;
  target?: string;
  rel?: string;
  download?: boolean;
}

/**
 * A social profile link. The icon is a component rather than a string so RTL
 * direction and SVG sizing stay correct, and so lucide icons can be used
 * directly from your data file.
 */
export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon?: ComponentType<{ className?: string }>;
}

/** A technology or keyword tag. `id` is the React key and must be unique. */
export interface TechTag {
  id: string;
  name: string;
}
