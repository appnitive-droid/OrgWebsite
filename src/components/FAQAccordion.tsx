"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useMemo, useState } from "react";
import type { FAQ } from "@/src/data/faqs";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");
  const visible = useMemo(() => items.filter((item) => `${item.question} ${item.answer} ${item.category}`.toLowerCase().includes(query.toLowerCase())), [items, query]);
  return <><label className="field" htmlFor="faq-search"><span>Search common questions</span><input id="faq-search" className="search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “battery”, “refund”, or “permission”" /></label><div className="faq-list" style={{ marginTop: 20 }}>{visible.map((item) => { const index = items.indexOf(item); const expanded = open === index; return <article className="faq-item" key={item.question}><h3><button type="button" aria-expanded={expanded} onClick={() => setOpen(expanded ? null : index)}><span><small className="card-kicker">{item.category}</small><br />{item.question}</span>{expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</button></h3>{expanded && <div className="faq-answer"><p>{item.answer}</p></div>}</article>; })}</div></>;
}
