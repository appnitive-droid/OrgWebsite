"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Boxes, Gauge, HeartHandshake, MessagesSquare, Route, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/src/components/ui/Primitives";
const principles = [
  { title: "Strategy before development", body: "We define the product problem, target users, priorities, and technical direction before building.", icon: Route },
  { title: "Built for real-world use", body: "We consider usability, performance, maintainability, permissions, devices, and edge cases.", icon: Gauge },
  { title: "Designed to evolve", body: "We structure products so new features and integrations can arrive without rebuilding everything.", icon: Boxes },
  { title: "Long-term thinking", body: "We support products beyond the first release through maintenance, optimization, and iteration.", icon: HeartHandshake },
];
const satellites = [{ label: "Clear communication", icon: MessagesSquare }, { label: "Privacy awareness", icon: ShieldCheck }, { label: "Scalable architecture", icon: Boxes }];
export function WhyAppnitiveSection() { const reduced = useReducedMotion(); return <section className="section why-section"><div className="container why-layout"><div><SectionHeading eyebrow="Why Appnitive" title="Product thinking, carried through every layer" description="The strongest software comes from connected decisions—not isolated deliverables." /><div className="why-principles">{principles.map(({ title, body, icon: Icon }, i) => <motion.article key={title} initial={reduced ? false : { opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: reduced ? 0 : i * .08 }}><span>0{i + 1}</span><Icon size={21} /><div><h3>{title}</h3><p>{body}</p></div></motion.article>)}</div></div><div className="why-system" aria-label="Connected product system"><div className="system-core"><span>APPNITIVE</span><strong>PRODUCT<br />SYSTEM</strong><small>strategy → launch → growth</small></div>{satellites.map(({ label, icon: Icon }, i) => <div className={`system-node node-${i + 1}`} key={label}><Icon size={18} /><span>{label}</span></div>)}<div className="system-ring ring-a" /><div className="system-ring ring-b" /></div></div></section>; }
