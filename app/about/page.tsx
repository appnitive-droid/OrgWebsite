import type { Metadata } from "next";
import { Code2, Eye, HeartHandshake, LockKeyhole } from "lucide-react";
import { PageHero, SectionHeading } from "@/src/components/ui";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = { title: "About the studio", description: `Learn how ${siteConfig.companyName}, an independent Android studio in India, approaches practical design and privacy-conscious engineering.`, alternates: { canonical: "/about" } };

const values = [
  { icon: Eye, title: "Focused experiences", body: "Start with the user problem, remove avoidable friction, and keep the main task easy to understand." },
  { icon: Code2, title: "Modern Android craft", body: "Use maintainable architecture, native platform tools, and interfaces designed for Android devices." },
  { icon: LockKeyhole, title: "Privacy-conscious engineering", body: "Prefer local processing where practical and explain sensitive access before the user enables it." },
  { icon: HeartHandshake, title: "Sustainable improvement", body: "Release carefully, support clearly, and make measured updates in response to real feedback." },
];
const process = [["Understand the user problem", "Define the job the app should perform and the boundaries it should respect."], ["Design a focused experience", "Shape a clear path through the product with accessible, familiar Android patterns."], ["Build with modern Android tools", "Choose maintainable technologies and only the services the product genuinely needs."], ["Test permissions and device behaviour", "Check permission flows, background work, battery restrictions, and manufacturer differences."], ["Release carefully", "Review the build, policy, store listing, disclosures, and support material together."], ["Improve through feedback", "Prioritise useful fixes and sustainable product improvements after release."]];

export default function AboutPage() { return <><PageHero eyebrow="About the studio" title={`Independent by design. Serious about the details.`} description={`${siteConfig.companyName} is an independent Android software studio based in ${siteConfig.location}, creating useful mobile products with thoughtful design and clear privacy decisions.`} /><section className="section"><div className="container"><SectionHeading eyebrow="What matters" title="Practical products built to last" description="No inflated history or borrowed credibility — just a clear standard for how products should be made." /><div className="info-grid">{values.map((value) => <article className="info-card" key={value.title}><div className="area-icon"><value.icon size={21} /></div><h3>{value.title}</h3><p>{value.body}</p></article>)}</div></div></section><section className="section section-tint"><div className="container"><SectionHeading eyebrow="Development approach" title="From a useful problem to a careful release" description="A repeatable process keeps product, platform, permissions, and policy aligned." /><ol className="process-list">{process.map(([title, body]) => <li key={title}><strong>{title}</strong>{body}</li>)}</ol></div></section></>; }
