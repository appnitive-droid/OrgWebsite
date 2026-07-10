"use client";

import { useState } from "react";
import { apps } from "@/src/data/apps";

export function SupportAppSelector() {
  const [slug, setSlug] = useState("");
  return <div className="info-card"><label className="field" htmlFor="support-app"><span>Choose an app</span><select id="support-app" value={slug} onChange={(event) => { const value = event.target.value; setSlug(value); if (value) window.location.hash = value; }}><option value="">Select an app for its support anchor</option>{apps.map((app) => <option value={app.slug} key={app.slug}>{app.name} — {app.status}</option>)}</select></label><p className="field-help">Each app’s privacy policy and detail page contains more specific permission and data information.</p></div>;
}
