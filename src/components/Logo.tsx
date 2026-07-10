import Link from "next/link";
import { siteConfig } from "@/src/config/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label={`${siteConfig.companyName} home`}>
      <span className="brand-mark" aria-hidden="true">CN</span>
      {!compact && <span className="brand-name">{siteConfig.companyName}</span>}
    </Link>
  );
}
