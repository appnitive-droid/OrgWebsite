import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/config/site";
import { validPrivacyPolicies } from "@/src/data/privacyPolicies";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const privacyRoutes: MetadataRoute.Sitemap = validPrivacyPolicies.map((policy) => ({
    url: `${siteConfig.siteUrl}/privacy/${policy.slug}`,
    lastModified: new Date(policy.lastUpdated),
    changeFrequency: "yearly",
    priority: .6,
  }));
  return [
    { url: siteConfig.siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.siteUrl}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: .7 },
    ...privacyRoutes,
  ];
}
