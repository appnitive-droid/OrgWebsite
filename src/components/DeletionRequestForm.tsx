"use client";

import { FormEvent, useState } from "react";
import { apps } from "@/src/data/apps";
import { siteConfig } from "@/src/config/site";

export function DeletionRequestForm() {
  const [status, setStatus] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); const data = new FormData(event.currentTarget); const app = String(data.get("app") || "Unspecified app"); const email = String(data.get("email") || "").trim(); if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setStatus("Enter a valid email address."); return; } const reference = String(data.get("reference") || "Not provided"); const subject = encodeURIComponent(`Data deletion request — ${app}`); const body = encodeURIComponent(`App: ${app}\nReply-to email: ${email}\nAccount or transaction reference: ${reference}\n\nPlease confirm what server-side personal data, if any, is associated with this information and the available deletion process.`); setStatus("Your email app should open with a prepared request."); window.location.href = `mailto:${siteConfig.privacyEmail}?subject=${subject}&body=${body}`; };
  return <form className="contact-form" onSubmit={submit}><div className="field"><label htmlFor="deletion-app">App</label><select id="deletion-app" name="app" required><option value="">Choose an app</option>{apps.map((app) => <option key={app.slug}>{app.name}</option>)}</select></div><div className="field"><label htmlFor="deletion-email">Email connected to the request</label><input id="deletion-email" name="email" type="email" autoComplete="email" required /></div><div className="field"><label htmlFor="deletion-reference">Account, order, or support reference (if one exists)</label><input id="deletion-reference" name="reference" /><p className="field-help">Do not enter a password, payment card, government ID, or unrelated sensitive information.</p></div>{status && <p className="form-status" role="status">{status}</p>}<button className="button button-primary" type="submit">Prepare deletion email</button></form>;
}
