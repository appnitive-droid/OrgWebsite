import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import { validPrivacyPolicies } from "@/src/data/privacyPolicies";

const description =
  "Each Appnitive Technologies application has its own privacy policy describing the information and permissions used by that app.";

export const metadata: Metadata = {
  title: "Privacy Policies",
  description,
  alternates: { canonical: `${siteConfig.siteUrl}/privacy` },
  openGraph: {
    type: "website",
    siteName: siteConfig.companyName,
    title: `Privacy Policies | ${siteConfig.companyName}`,
    description,
    url: `${siteConfig.siteUrl}/privacy`,
  },
  robots: { index: true, follow: true },
};

export default function PrivacyCenterPage() {
  return (
    <div className="privacy-center">
      <section className="privacy-center-hero">
        <div className="container">
          <span className="eyebrow">
            <ShieldCheck size={15} aria-hidden="true" /> Privacy center
          </span>
          <h1>Privacy Policies</h1>
          <p>{description}</p>
        </div>
      </section>

      <section className="privacy-center-list" aria-labelledby="app-policies-heading">
        <div className="container">
          <div className="privacy-center-heading">
            <h2 id="app-policies-heading">Choose an application</h2>
            <p>Select an app to read its current privacy policy.</p>
          </div>
          <div className="privacy-card-grid">
            {validPrivacyPolicies.map((policy, index) => (
              <article className="privacy-card" key={policy.slug}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{policy.appName}</h3>
                <p>{policy.summary}</p>
                <Link className="arrow-link" href={`/privacy/${policy.slug}`}>
                  View Privacy Policy
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
