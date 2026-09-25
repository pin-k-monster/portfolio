import type { Metadata } from "next";
import { site } from "./config";

/**
 * Maps the SEO inputs from `lib/site/config.tsx` onto Next.js metadata.
 *
 * `metadataBase` is what lets Next resolve the relative `ogImage` path into an
 * absolute URL; without it social platforms cannot fetch the preview image.
 */
export const siteMetadata: Metadata = {
  metadataBase: new URL(site.seo.url),
  title: site.seo.title,
  description: site.seo.description,
  keywords: site.seo.keywords,
  authors: [{ name: site.name, url: site.seo.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.seo.url,
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
    images: [{ url: site.seo.ogImage, width: 1200, height: 630, alt: site.seo.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};
