import type { AppDefinition } from "@/src/types/app";

export function ScreenshotGallery({ app }: { app: AppDefinition }) {
  return <div className="screenshot-gallery" aria-label={`${app.name} screenshot placeholders`}>{["Overview", "Primary feature", "Details"].map((label, index) => <div className={`screenshot-placeholder shot-${index + 1}`} key={label}><div className="shot-bar" /><div className="shot-mark">{app.name.split(" ").map((word) => word[0]).join("").slice(0, 2)}</div><div className="shot-lines"><span /><span /><span /></div><p>{label}</p><small>Replace with /public/apps/{app.slug}/screenshot-{index + 1}.webp</small></div>)}</div>;
}
