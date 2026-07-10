"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import { apps } from "@/src/data/apps";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setSent(false);
    const data = new FormData(event.currentTarget);
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim(); const email = String(data.get("email") ?? "").trim(); const message = String(data.get("message") ?? "").trim();
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (message.length < 20) next.message = "Please provide at least 20 characters so we can understand the request.";
    setErrors(next); if (Object.keys(next).length) return;
    const subject = encodeURIComponent(`${data.get("topic")} — ${data.get("app") || "General enquiry"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nApp: ${data.get("app") || "Not specified"}\n\n${message}`);
    setSent(true); window.location.href = `mailto:${siteConfig.businessEmail}?subject=${subject}&body=${body}`;
  };
  return <form className="contact-form" onSubmit={submit} noValidate><div className="form-grid"><div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" aria-describedby={errors.name ? "name-error" : undefined} aria-invalid={!!errors.name} />{errors.name && <p id="name-error" className="field-error">{errors.name}</p>}</div><div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" aria-describedby={errors.email ? "email-error" : undefined} aria-invalid={!!errors.email} />{errors.email && <p id="email-error" className="field-error">{errors.email}</p>}</div><div className="field"><label htmlFor="topic">Topic</label><select id="topic" name="topic"><option>App support</option><option>Business enquiry</option><option>Privacy question</option><option>Security report</option><option>Legal enquiry</option></select></div><div className="field"><label htmlFor="app">App</label><select id="app" name="app"><option value="">General / not app-specific</option>{apps.map((app) => <option key={app.slug}>{app.name}</option>)}</select></div><div className="field full"><label htmlFor="message">Message</label><textarea id="message" name="message" aria-describedby={errors.message ? "message-error" : "message-help"} aria-invalid={!!errors.message} />{errors.message ? <p id="message-error" className="field-error">{errors.message}</p> : <p id="message-help" className="field-help">Do not include passwords, payment details, private documents, or sensitive conversation content.</p>}</div></div><p className="field-help">This static form opens your email app. Your message is not stored by this website. A future form service should add server-side validation, rate limiting, and a privacy review.</p>{sent && <p className="form-status" role="status">Your email app should open with a prepared message. If it does not, email us directly.</p>}<button className="button button-primary" type="submit">Prepare email <Send size={17} /></button></form>;
}
