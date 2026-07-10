import type { Metadata } from "next";
import { AppCard } from "@/src/components/AppCard";
import { AppsDirectory } from "@/src/components/AppsDirectory";
import { PageHero, SectionHeading } from "@/src/components/ui";
import { featuredApps } from "@/src/data/apps";

export const metadata: Metadata = { title: "Android app portfolio", description: "Browse released, in-development, and prototype Android apps by category, status, feature, or technology.", alternates: { canonical: "/apps" } };

export default function AppsPage() {
  return <><PageHero eyebrow="Android portfolio" title="Apps built around real everyday needs" description="Browse released products, active builds, and early experiments. Status labels reflect where each project stands today." /><section className="section section-tint"><div className="container"><SectionHeading eyebrow="Selected work" title="Featured apps" description="Six products spanning useful utilities, creativity, wellbeing, and fitness." /><div className="app-grid">{featuredApps.map((app) => <AppCard app={app} key={app.slug} />)}</div></div></section><section className="section"><div className="container"><SectionHeading eyebrow="Full directory" title="Explore every app" description="Search app names, features, technologies, and categories. Filtering happens on your device." /><AppsDirectory /></div></section></>;
}
