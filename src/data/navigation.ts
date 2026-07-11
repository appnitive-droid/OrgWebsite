export type NavigationItem = { label: string; href: string };
export type FooterGroup = { title: string; links: NavigationItem[] };

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "#home" }, { label: "Services", href: "#services" },
  { label: "Work", href: "#work" }, { label: "Products", href: "#products" },
  { label: "Process", href: "#process" }, { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" }, { label: "Contact", href: "#contact" },
];

export const footerNavigation: FooterGroup[] = [
  { title: "Company", links: [{ label: "About", href: "#about" }, { label: "Process", href: "#process" }, { label: "Work", href: "#work" }, { label: "Contact", href: "#contact" }] },
  { title: "Services", links: [{ label: "Mobile apps", href: "#services" }, { label: "Websites", href: "#services" }, { label: "Web applications", href: "#services" }, { label: "AI integration", href: "#services" }, { label: "UI/UX", href: "#services" }, { label: "SEO", href: "#services" }] },
  { title: "Products", links: [{ label: "Released apps", href: "#work" }, { label: "Products in development", href: "#products" }] },
  { title: "Resources", links: [{ label: "Insights", href: "#insights" }, { label: "Technology approach", href: "#insights" }] },
];
