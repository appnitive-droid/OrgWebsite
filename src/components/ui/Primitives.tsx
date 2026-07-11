import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow: string; title: string; description?: string; align?: "left" | "center" }) {
  return <div className={`section-heading ${align === "center" ? "is-centered" : ""}`}><span className="eyebrow"><Sparkles size={14} aria-hidden="true" />{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
export function GradientText({ children }: { children: ReactNode }) { return <span className="gradient-text">{children}</span>; }
export function StatusBadge({ children }: { children: ReactNode }) { return <span className="status-badge"><i aria-hidden="true" />{children}</span>; }
export function ArrowLink({ href, children, label }: { href: string; children: ReactNode; label?: string }) { return <a className="arrow-link" href={href} aria-label={label}>{children}<span aria-hidden="true">↗</span></a>; }
