import type { Metadata } from "next";
import { BriefcaseBusiness, LifeBuoy, LockKeyhole, Scale, ShieldAlert } from "lucide-react";
import { ContactForm } from "@/src/components/ContactForm";
import { PageHero, SectionHeading } from "@/src/components/ui";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = { title: "Contact", description: `Contact ${siteConfig.companyName} for app support, privacy, security, legal, or business enquiries.`, alternates: { canonical: "/contact" } };
const routes = [
  { icon: BriefcaseBusiness, title: "Business enquiries", email: siteConfig.businessEmail, body: "Partnerships, licensing, and professional enquiries." },
  { icon: LifeBuoy, title: "App support", email: siteConfig.supportEmail, body: "Bugs, product questions, and troubleshooting." },
  { icon: LockKeyhole, title: "Privacy questions", email: siteConfig.privacyEmail, body: "Policies, data practices, access, and deletion." },
  { icon: ShieldAlert, title: "Security reports", email: siteConfig.privacyEmail, body: "Responsible disclosure of a suspected security issue." },
  { icon: Scale, title: "Legal enquiries", email: siteConfig.businessEmail, body: "Legal notices and rights-related questions." },
];
export default function ContactPage() { return <><PageHero eyebrow="Contact" title="Reach the right inbox" description="Tell us which app and topic your message concerns. Do not include passwords, private documents, payment details, or other sensitive material." /><section className="section"><div className="container"><div className="info-grid">{routes.map((route) => <article className="info-card" key={route.title}><div className="area-icon"><route.icon size={21} /></div><h3>{route.title}</h3><p>{route.body}</p><a className="text-link" href={`mailto:${route.email}`}>{route.email}</a></article>)}</div></div></section><section className="section section-tint"><div className="container content-grid"><div><SectionHeading eyebrow="Prepare a message" title="Contact form" description="This static form validates the message in your browser and then opens your email application." /><ContactForm /></div><aside className="content-sidebar"><h2>Before sending</h2><ul><li>Include the app name and current version.</li><li>Add your Android version and device model for bugs.</li><li>Describe the steps that led to the issue.</li><li>Remove personal or sensitive data from screenshots.</li></ul><h2 style={{ marginTop: 24 }}>Spam prevention</h2><p className="small-copy">A future hosted form should use rate limits, a hidden honeypot, server-side validation, and abuse monitoring without behavioural tracking.</p></aside></div></section></>; }
