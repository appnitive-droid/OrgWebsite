import { footerNavigation, primaryNavigation } from "@/src/data/navigation";

export const SHOW_TESTIMONIALS = false;

export const siteConfig = {
  companyName: "Appnitive Technologies",
  shortName: "Appnitive",
  tagline: "We build digital products that move businesses forward.",
  companyDescription: "Appnitive Technologies designs and develops high-performance applications, websites, software platforms, AI-powered tools, and digital experiences for businesses ready to grow.",
  siteUrl: "https://appnitive-technologies.vickyneji.chatgpt.site",
  location: "India",
  businessEmail: "technologiesappnitive@gmail.com",
  supportEmail: "technologiesappnitive@gmail.com",
  privacyEmail: "technologiesappnitive@gmail.com",
  phone: null,
  whatsappUrl: null,
  bookingUrl: null,
  socialLinks: {},
  primaryNavigation,
  footerNavigation,
  showTestimonials: SHOW_TESTIMONIALS,
  showInsights: true,
  showNewsletter: false,
  defaultTheme: "dark" as const,
} as const;
