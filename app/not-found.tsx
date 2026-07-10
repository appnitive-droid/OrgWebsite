import { Compass } from "lucide-react";
import { ButtonLink } from "@/src/components/ui";

export default function NotFound() { return <section className="page-hero" style={{ minHeight: "62vh", display: "grid", placeItems: "center" }}><div className="container narrow"><div className="area-icon" style={{ margin: "0 auto 24px" }}><Compass /></div><span className="eyebrow">404 — Page not found</span><h1>This page has moved out of view</h1><p>The address may be incorrect, or the page may not exist yet. Start with the app directory or return home.</p><div className="hero-actions"><ButtonLink href="/">Go home</ButtonLink><ButtonLink href="/apps" variant="secondary">Browse apps</ButtonLink></div></div></section>; }
