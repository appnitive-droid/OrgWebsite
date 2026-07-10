import type { ReactNode } from "react";
import { PageHero } from "./ui";

export function LegalPageLayout({ eyebrow, title, description, notice, sections, children }: { eyebrow: string; title: string; description: string; notice?: string; sections?: { id: string; label: string }[]; children: ReactNode }) {
  return <><PageHero eyebrow={eyebrow} title={title} description={description} /><section className="section"><div className="container content-grid"><article className="prose">{notice && <p className="notice">{notice}</p>}{children}</article>{sections && <aside className="content-sidebar"><h2>On this page</h2><ul>{sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.label}</a></li>)}</ul></aside>}</div></section></>;
}
