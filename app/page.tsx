import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Brush, Dumbbell, Gamepad2, LockKeyhole, Smartphone, Sparkles, Workflow } from "lucide-react";
import { AppCard } from "@/src/components/AppCard";
import { DeviceMockup } from "@/src/components/DeviceMockup";
import { ButtonLink, CallToAction, SectionHeading } from "@/src/components/ui";
import { featuredApps } from "@/src/data/apps";

export const metadata: Metadata = { title: "Thoughtful Android apps for everyday life", description: "Explore privacy-conscious Android apps for productivity, creativity, health, device control, and everyday tasks.", alternates: { canonical: "/" } };

const principles = [
  ["Practical by design", "Every feature should solve a recognisable problem without adding needless complexity."],
  ["Privacy-conscious", "Data access is explained, scoped to a purpose, and kept on-device where practical."],
  ["Built for Android", "Products are designed around Android conventions, capabilities, and device behaviour."],
  ["Continuously improved", "Apps evolve carefully through testing, support feedback, and maintainable engineering."],
];
const productAreas = [
  { title: "Productivity", icon: Workflow, text: "Focused tools for files, documents, habits, and everyday workflows." },
  { title: "Health & fitness", icon: Dumbbell, text: "Clear activity tracking and progress tools with responsible estimates." },
  { title: "Creativity", icon: Brush, text: "Mobile-first ways to capture, edit, and share visual ideas." },
  { title: "Device utilities", icon: Smartphone, text: "Reliable utilities shaped around Android's real platform boundaries." },
  { title: "Privacy & wellbeing", icon: LockKeyhole, text: "User-controlled protections with careful permission explanations." },
  { title: "AI-assisted tools", icon: Bot, text: "Deliberate, transparent AI features that activate only when requested." },
  { title: "Games & personalization", icon: Gamepad2, text: "Polished experiences for play, progress, and personal expression." },
];

export default function Home() {
  return <>
    <section className="home-hero"><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow"><Sparkles size={14} /> Independent Android studio</span><h1>Thoughtful Android apps for everyday life</h1><p>We design privacy-conscious Android applications that make productivity, creativity, fitness, device control, and daily tasks simpler.</p><div className="hero-actions"><ButtonLink href="/apps">Explore our apps</ButtonLink><ButtonLink href="/support" variant="secondary">Get support</ButtonLink></div><p className="hero-note"><span aria-hidden="true">●</span> Released products, active development, and early concepts — clearly labelled.</p></div><DeviceMockup /></div></section>
    <section className="section principle-section"><div className="container"><SectionHeading eyebrow="How we work" title="Useful software, considered carefully" description="A small set of principles guides every product decision." /><div className="principle-grid">{principles.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section section-tint"><div className="container"><div className="section-heading-row"><SectionHeading eyebrow="Featured portfolio" title="Apps in the workshop" description="A selection of released and in-development Android products." /><Link className="text-link desktop-only" href="/apps">View all apps <ArrowRight size={16} /></Link></div><div className="app-grid">{featuredApps.map((app) => <AppCard app={app} key={app.slug} />)}</div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Product areas" title="One studio, a practical range" description="We explore ideas where thoughtful mobile software can remove friction or create a calmer experience." /><div className="area-grid">{productAreas.map((area) => <article key={area.title}><div className="area-icon"><area.icon size={21} /></div><h3>{area.title}</h3><p>{area.text}</p></article>)}</div></div></section>
    <section className="section privacy-callout"><div className="container"><div className="privacy-panel"><div className="privacy-symbol"><LockKeyhole size={30} /></div><div><span className="eyebrow">Privacy by explanation</span><h2>Clear practices for every app</h2><p>We aim to collect only the data required for each app to function. Every application has its own privacy policy explaining its exact permissions, data processing, third-party services, and deletion options.</p><ButtonLink href="/privacy" variant="text">Visit the privacy centre</ButtonLink></div></div></div></section>
    <CallToAction title="Find the app or answer you need" description="Explore the full portfolio, get help with an app, or review our privacy approach." />
  </>;
}
