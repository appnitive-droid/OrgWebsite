import { footerNavigation, primaryNavigation } from "@/src/data/navigation";

export const SHOW_TESTIMONIALS = false;
export const SHOW_SAMPLE_INSIGHTS = process.env.NODE_ENV !== "production";

export const siteConfig = {
  companyName: "Appnitive Technologies",
  shortName: "Appnitive",
  tagline: "We build digital products that move businesses forward.",
  companyDescription: "Appnitive Technologies designs and develops high-performance applications, websites, software platforms, AI-powered tools, and digital experiences for businesses ready to grow.",
  siteUrl: "https://appnitive.example.com", // PLACEHOLDER: replace before launch.
  location: "India",
  businessEmail: "hello@appnitive.example.com", // PLACEHOLDER
  supportEmail: "support@appnitive.example.com", // PLACEHOLDER
  privacyEmail: "privacy@appnitive.example.com", // PLACEHOLDER
  phone: "+91 00000 00000", // PLACEHOLDER
  whatsappUrl: "https://wa.me/910000000000", // PLACEHOLDER
  bookingUrl: "#contact", // PLACEHOLDER: connect a scheduling URL.
  socialLinks: { linkedin: "", github: "", x: "", instagram: "" }, // PLACEHOLDERS
  primaryNavigation,
  footerNavigation,
  showTestimonials: SHOW_TESTIMONIALS,
  showInsights: true,
  showNewsletter: false,
  defaultTheme: "dark" as const,
} as const;
