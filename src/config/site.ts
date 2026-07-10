export const siteConfig = {
  companyName: "COMPANY_NAME",
  developerName: "COMPANY_NAME",
  description:
    "An independent Android software studio creating thoughtful, privacy-conscious apps for everyday life.",
  supportEmail: "support@example.com",
  privacyEmail: "privacy@example.com",
  businessEmail: "contact@example.com",
  accessibilityEmail: "support@example.com",
  location: "India",
  siteUrl: "https://example.com",
  responseTime: null as string | null,
  legal: {
    effectiveDate: "10 July 2026",
    lastUpdated: "10 July 2026",
    governingLaw: "[Insert governing law and jurisdiction after legal review]",
  },
  analytics: {
    enabled: false,
    provider: null as string | null,
  },
} as const;

export type SiteConfig = typeof siteConfig;
