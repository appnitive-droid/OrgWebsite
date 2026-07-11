import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest { return { name: "Appnitive Technologies", short_name: "Appnitive", description: "Software development and digital solutions.", start_url: "/", display: "standalone", background_color: "#05070c", theme_color: "#7357ff", icons: [{ src: "/icon-192.png", sizes: "192x192", type: "image/png" }, { src: "/icon-512.png", sizes: "512x512", type: "image/png" }] }; }
