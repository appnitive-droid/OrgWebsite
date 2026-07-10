import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import { footerNavigation, primaryNavigation } from "@/src/data/navigation";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Logo />
          <p>{siteConfig.description}</p>
          <p className="footer-meta"><MapPin size={16} /> Independent Android software studio based in {siteConfig.location}</p>
        </div>
        <div>
          <h2>Company</h2>
          <ul>{primaryNavigation.slice(1, 4).map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Resources</h2>
          <ul>{footerNavigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Contact</h2>
          <a className="footer-meta" href={`mailto:${siteConfig.businessEmail}`}><Mail size={16} />{siteConfig.businessEmail}</a>
          <p className="small-copy">For app support, privacy questions, business enquiries, and security reports.</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</span>
        <span>Made with care in India.</span>
      </div>
    </footer>
  );
}
