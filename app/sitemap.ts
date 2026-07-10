import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/config/site";
import { apps } from "@/src/data/apps";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/apps", "/about", "/support", "/contact", "/privacy", "/terms", "/data-deletion", "/accessibility"]; return [...routes.map((route) => ({ url: `${siteConfig.siteUrl}${route}`, lastModified: siteConfig.legal.lastUpdated, changeFrequency: route === "" ? "monthly" as const : "weekly" as const, priority: route === "" ? 1 : .7 })), ...apps.flatMap((app) => [{ url: `${siteConfig.siteUrl}/apps/${app.slug}`, lastModified: app.updatedAt, changeFrequency: "monthly" as const, priority: .8 }, { url: `${siteConfig.siteUrl}/privacy/${app.slug}`, lastModified: siteConfig.legal.lastUpdated, changeFrequency: "monthly" as const, priority: .6 }])]; }
