export type AppStatus =
  | "Released"
  | "In Development"
  | "Planned"
  | "Prototype"
  | "Concept";

export type DataPractice = {
  category: string;
  purpose: string;
  optional: boolean;
  leavesDevice: string;
  retention: string;
};

export type AppDefinition = {
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  status: AppStatus;
  category: string;
  filterCategories: string[];
  icon: string;
  iconGradient: string;
  heroImage?: string;
  screenshots?: string[];
  features: string[];
  technology: string[];
  platform: string;
  packageName?: string;
  privacyPolicyPath: string;
  supportPath: string;
  playStoreUrl?: string;
  releasedAt?: string;
  updatedAt: string;
  permissions: string[];
  dataPractices: DataPractice[];
  roadmap?: string[];
  disclaimer?: string;
  ipDisclaimer?: string;
  thirdPartyServices?: string[];
  featured: boolean;
  sortOrder: number;
};
