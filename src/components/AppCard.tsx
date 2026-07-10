import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { AppDefinition } from "@/src/types/app";
import { AppIcon, FeatureList, StatusBadge, TechTag } from "./ui";

export function AppCard({ app }: { app: AppDefinition }) {
  return (
    <article className="app-card">
      <div className="app-card-top"><AppIcon name={app.name} gradient={app.iconGradient} /><StatusBadge status={app.status} /></div>
      <div><p className="card-kicker">{app.category}</p><h3>{app.name}</h3><p>{app.shortDescription}</p></div>
      <FeatureList features={app.features} limit={3} />
      <div className="tag-row">{app.technology.slice(0, 3).map((tech) => <TechTag key={tech}>{tech}</TechTag>)}</div>
      <Link className="card-link" href={`/apps/${app.slug}`}>View details <ArrowUpRight size={17} /><span className="sr-only"> about {app.name}</span></Link>
    </article>
  );
}
