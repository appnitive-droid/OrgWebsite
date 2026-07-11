export function Logo({ compact = false }: { compact?: boolean }) {
  return <span className="brand-lockup"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>{!compact && <span><strong>Appnitive</strong><small>Technologies</small></span>}</span>;
}
