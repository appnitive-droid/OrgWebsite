"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/src/config/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
export function Header() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const reduced = useReducedMotion();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}><div className="nav-shell"><a href="#home" className="brand-link" aria-label="Appnitive Technologies home"><Logo /></a><nav className="desktop-nav" aria-label="Primary navigation">{siteConfig.primaryNavigation.map(item => <a href={item.href} key={item.label}>{item.label}</a>)}</nav><div className="nav-actions"><ThemeToggle /><a href="#contact" className="button button-small">Get a Quote</a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button></div></div><AnimatePresence>{open && <motion.div id="mobile-navigation" className="mobile-menu" initial={reduced ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}><nav aria-label="Mobile navigation">{siteConfig.primaryNavigation.map((item, index) => <motion.a key={item.label} href={item.href} onClick={() => setOpen(false)} initial={reduced ? false : { opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduced ? 0 : index * .035 }}><span>0{index + 1}</span>{item.label}</motion.a>)}<a href="#contact" className="button" onClick={() => setOpen(false)}>Start your project</a></nav></motion.div>}</AnimatePresence></header>;
}
