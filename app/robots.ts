import type { MetadataRoute } from "next";
import { site } from "@/lib/site/config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${site.seo.url}/sitemap.xml`,
    host: site.seo.url,
  };
}
