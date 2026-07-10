import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppCard } from "@/src/components/AppCard";
import { ScreenshotGallery } from "@/src/components/ScreenshotGallery";
import { StructuredData } from "@/src/components/StructuredData";
import { AppIcon, Breadcrumbs, ButtonLink, FeatureList, PrivacyTable, StatusBadge, TechTag } from "@/src/components/ui";
import { siteConfig } from "@/src/config/site";
import { apps, getApp } from "@/src/data/apps";

export const dynamicParams = false;
export function generateStaticParams() { return apps.map((app) => ({ slug: app.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const app = getApp(slug); if (!app) return {};
  return { title: app.name, description: app.shortDescription, alternates: { canonical: `/apps/${app.slug}` }, openGraph: { title: `${app.name} | ${siteConfig.companyName}`, description: app.shortDescription, url: `/apps/${app.slug}`, type: "website" } };
}

export default async function AppDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const app = getApp(slug); if (!app) notFound();
  const related = apps.filter((item) => item.slug !== app.slug && item.filterCategories.some((category) => app.filterCategories.includes(category))).slice(0, 3);
  const appJsonLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: app.name, description: app.shortDescription, applicationCategory: app.category, operatingSystem: "Android", url: `${siteConfig.siteUrl}/apps/${app.slug}`, author: { "@type": "Organization", name: siteConfig.companyName }, dateModified: app.updatedAt };
  const breadcrumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl }, { "@type": "ListItem", position: 2, name: "Apps", item: `${siteConfig.siteUrl}/apps` }, { "@type": "ListItem", position: 3, name: app.name, item: `${siteConfig.siteUrl}/apps/${app.slug}` }] };
  return <>
    <section className="app-detail-hero"><div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Apps", href: "/apps" }, { label: app.name }]} /><div className="app-detail-head"><div><div className="app-title-row"><AppIcon name={app.name} gradient={app.iconGradient} /><div><StatusBadge status={app.status} /><h1>{app.name}</h1></div></div><p>{app.shortDescription}</p></div><div className="app-detail-actions">{app.playStoreUrl ? <ButtonLink href={app.playStoreUrl} external>View on Google Play</ButtonLink> : <span className="button button-secondary" aria-label="Google Play listing coming soon">Coming soon</span>}<ButtonLink href={app.supportPath} variant="text">Get support</ButtonLink></div></div></div></section>
    <section className="section"><div className="container"><ScreenshotGallery app={app} /></div></section>
    <section className="section section-tint"><div className="container detail-columns"><div><div className="detail-block"><span className="eyebrow">About the app</span><h2>A focused Android experience</h2><p>{app.fullDescription}</p>{app.disclaimer && <p className="notice">{app.disclaimer}</p>}{app.ipDisclaimer && <p className="notice">{app.ipDisclaimer}</p>}</div><div className="detail-block"><h2>Features</h2><FeatureList features={app.features} /></div>{app.roadmap && <div className="detail-block"><h2>Roadmap</h2><p>These capabilities are planned and are not presented as complete:</p><FeatureList features={app.roadmap} /></div>}<div className="detail-block"><h2>Privacy overview</h2><p>The exact behaviour of {app.name} must be verified against the released build, production manifest, enabled SDKs, and provider settings. Review its direct policy before use.</p><ButtonLink href={app.privacyPolicyPath} variant="secondary">Read app privacy policy</ButtonLink></div></div><aside><div className="detail-card"><h2>Product details</h2><dl><div><dt>Status</dt><dd>{app.status}</dd></div><div><dt>Category</dt><dd>{app.category}</dd></div><div><dt>Platform</dt><dd>{app.platform}</dd></div><div><dt>Package name</dt><dd>{app.packageName ?? "To be configured"}</dd></div><div><dt>Last updated</dt><dd>{new Date(`${app.updatedAt}T00:00:00`).toLocaleDateString("en-IN", { dateStyle: "long" })}</dd></div></dl><h3 style={{ marginTop: 28 }}>Technology</h3><div className="tag-row">{app.technology.map((tech) => <TechTag key={tech}>{tech}</TechTag>)}</div></div></aside></div></section>
    <section className="section"><div className="container"><div className="detail-block"><span className="eyebrow">Permissions & data</span><h2>What the app may access</h2><ul>{app.permissions.map((permission) => <li key={permission}>{permission}</li>)}</ul>{app.thirdPartyServices && <><h3>Potential third-party services</h3><ul>{app.thirdPartyServices.map((service) => <li key={service}>{service}</li>)}</ul></>}<PrivacyTable rows={app.dataPractices} /></div>{related.length > 0 && <><h2>Related apps</h2><div className="related-grid">{related.map((item) => <AppCard app={item} key={item.slug} />)}</div></>}</div></section>
    <StructuredData data={[appJsonLd, breadcrumbs]} />
  </>;
}
