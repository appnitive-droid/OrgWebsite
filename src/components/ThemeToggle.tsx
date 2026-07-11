"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(() => typeof window === "undefined" ? "dark" : (localStorage.getItem("appnitive-theme") as "dark" | "light" | null) ?? "dark");
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  function toggle() { const next = theme === "dark" ? "light" : "dark"; setTheme(next); localStorage.setItem("appnitive-theme", next); }
  return <button className="icon-button" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} suppressHydrationWarning>{theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}</button>;
}
