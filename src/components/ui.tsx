import Link from "next/link";
import { ArrowRight, CircleHelp, ExternalLink, Mail } from "lucide-react";
import type { ReactNode } from "react";
import type { AppStatus, DataPractice } from "@/src/types/app";

export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return <div className={`section-heading ${align === "center" ? "align-center" : ""}`}>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export function PageHero({ eyebrow, title, description, children }: { eyebrow?: string; title: string; description: string; children?: ReactNode }) {
  return <section className="page-hero"><div className="container narrow">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h1>{title}</h1><p>{description}</p>{children && <div className="hero-actions">{children}</div>}</div></section>;
}

export function ButtonLink({ href, children, variant = "primary", external = false }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "text"; external?: boolean }) {
  const className = variant === "text" ? "text-link" : `button button-${variant}`;
  if (external) return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}<ExternalLink size={16} /></a>;
  return <Link className={className} href={href}>{children}{variant === "text" && <ArrowRight size={16} />}</Link>;
}

export function StatusBadge({ status }: { status: AppStatus }) {
  return <span className={`status-badge status-${status.toLowerCase().replaceAll(" ", "-")}`}><span aria-hidden="true" />{status}</span>;
}

export function TechTag({ children }: { children: ReactNode }) { return <span className="tech-tag">{children}</span>; }

export function AppIcon({ name, gradient }: { name: string; gradient: string }) {
  const initials = name.split(" ").map((word) => word[0]).join("").slice(0, 2);
  return <div className={`app-icon bg-gradient-to-br ${gradient}`} aria-hidden="true"><span>{initials}</span></div>;
}

export function FeatureList({ features, limit }: { features: string[]; limit?: number }) {
  return <ul className="feature-list">{features.slice(0, limit).map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>;
}

export function PrivacyTable({ rows }: { rows: DataPractice[] }) {
  return <div className="table-wrap"><table className="privacy-table"><thead><tr><th>Permission or data</th><th>Why it is needed</th><th>Optional</th><th>Leaves device</th><th>Retention</th></tr></thead><tbody>{rows.map((row) => <tr key={`${row.category}-${row.purpose}`}><th scope="row">{row.category}</th><td>{row.purpose}</td><td>{row.optional ? "Yes" : "No"}</td><td>{row.leavesDevice}</td><td>{row.retention}</td></tr>)}</tbody></table></div>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><ol>{items.map((item, index) => <li key={item.label}>{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}{index < items.length - 1 && <span aria-hidden="true">/</span>}</li>)}</ol></nav>;
}

export function EmptyState({ title = "No apps found", description = "Try a different search or clear a filter." }: { title?: string; description?: string }) {
  return <div className="empty-state"><CircleHelp size={28} /><h3>{title}</h3><p>{description}</p></div>;
}

export function CallToAction({ title, description }: { title: string; description: string }) {
  return <section className="container"><div className="cta-panel"><div><span className="eyebrow">Next step</span><h2>{title}</h2><p>{description}</p></div><div className="cta-links"><ButtonLink href="/apps">View all apps</ButtonLink><ButtonLink href="/support" variant="secondary">Visit support</ButtonLink><ButtonLink href="/privacy" variant="text">Read privacy information</ButtonLink></div></div></section>;
}

export function ContactStrip() {
  return <div className="contact-strip"><Mail size={20} /><div><strong>Need a direct answer?</strong><span>Choose the right contact route and include the app name.</span></div><ButtonLink href="/contact" variant="secondary">Contact us</ButtonLink></div>;
}
