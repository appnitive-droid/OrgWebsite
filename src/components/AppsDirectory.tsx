"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { apps, categories } from "@/src/data/apps";
import type { AppStatus } from "@/src/types/app";
import { AppCard } from "./AppCard";
import { EmptyState } from "./ui";

const statuses: AppStatus[] = ["Released", "In Development", "Prototype", "Planned", "Concept"];

export function AppsDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const [status, setStatus] = useState("All statuses");
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return apps.filter((app) => (!needle || [app.name, app.shortDescription, app.category, ...app.features, ...app.technology].join(" ").toLowerCase().includes(needle)) && (category === "All categories" || app.filterCategories.includes(category)) && (status === "All statuses" || app.status === status));
  }, [query, category, status]);
  const reset = () => { setQuery(""); setCategory("All categories"); setStatus("All statuses"); };
  return <>
    <div className="filter-panel" role="search"><div className="search-wrap"><Search size={18} aria-hidden="true" /><label className="sr-only" htmlFor="app-search">Search apps</label><input id="app-search" className="search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search names, features, or technology" /></div><label className="sr-only" htmlFor="category-filter">Filter by category</label><select id="category-filter" value={category} onChange={(event) => setCategory(event.target.value)}><option>All categories</option>{categories.map((item) => <option key={item}>{item}</option>)}</select><label className="sr-only" htmlFor="status-filter">Filter by status</label><select id="status-filter" value={status} onChange={(event) => setStatus(event.target.value)}><option>All statuses</option>{statuses.map((item) => <option key={item}>{item}</option>)}</select><button className="clear-button" type="button" onClick={reset}>Clear</button></div>
    <p className="results-meta" aria-live="polite">Showing {filtered.length} of {apps.length} apps</p>
    <div className="app-grid">{filtered.length ? filtered.map((app) => <AppCard app={app} key={app.slug} />) : <EmptyState />}</div>
  </>;
}
