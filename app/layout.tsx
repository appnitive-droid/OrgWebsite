import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { StructuredData } from "@/src/components/StructuredData";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: `${siteConfig.companyName} — Thoughtful Android apps`, template: `%s | ${siteConfig.companyName}` },
  description: siteConfig.description,
  applicationName: siteConfig.companyName,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: siteConfig.companyName, title: `${siteConfig.companyName} — Thoughtful Android apps`, description: siteConfig.description, url: "/", locale: "en_IN" },
  twitter: { card: "summary_large_image", title: `${siteConfig.companyName} — Thoughtful Android apps`, description: siteConfig.description },
  icons: { icon: "/icon-192.png", shortcut: "/icon-192.png", apple: "/icon-192.png" },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f8fafc" }, { media: "(prefers-color-scheme: dark)", color: "#080d19" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><a className="skip-link" href="#main-content">Skip to main content</a><Header /><main id="main-content">{children}</main><Footer /><StructuredData data={{ "@context": "https://schema.org", "@type": "Organization", name: siteConfig.companyName, url: siteConfig.siteUrl, email: siteConfig.businessEmail, address: { "@type": "PostalAddress", addressCountry: "IN" }, description: siteConfig.description }} /></body></html>;
}
