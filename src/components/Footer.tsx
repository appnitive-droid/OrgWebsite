import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import { Logo } from "./Logo";
export function Footer() {
  return <footer className="site-footer"><div className="container footer-top"><div className="footer-brand"><Logo /><p>{siteConfig.companyDescription}</p><a href={`mailto:${siteConfig.businessEmail}`}>{siteConfig.businessEmail}</a><span>{siteConfig.location}</span></div><div className="footer-links">{siteConfig.footerNavigation.map(group => <div key={group.title}><h3>{group.title}</h3>{group.links.map(link => <a key={link.label} href={link.href}>{link.label}</a>)}</div>)}</div></div><div className="container footer-bottom"><p>© {new Date().getFullYear()} {siteConfig.companyName}. Made in India.</p><div><a href="#contact">Privacy <span className="sr-only">policy future page</span></a><a href="#contact">Terms <span className="sr-only">future page</span></a><a href="#contact">Cookies <span className="sr-only">policy future page</span></a><a href="#contact">Accessibility <span className="sr-only">future page</span></a><a href="#home" aria-label="Back to top"><ArrowUpRight size={16} /></a></div></div></footer>;
}
