export type Insight = {
  title: string;
  summary: string;
  category: string;
  takeaway: string;
  accent: "cyan" | "violet" | "green";
};

export type TechnologyArea = { title: string; description: string };

export const insights: Insight[] = [
  { title: "How AI Is Changing Mobile Application Development", summary: "AI can make mobile products more useful through smarter assistance, document understanding, recommendations, and automation—when each feature solves a clear user problem.", category: "Artificial Intelligence", takeaway: "Use AI to reduce friction while keeping people in control of meaningful decisions.", accent: "cyan" },
  { title: "Native vs Cross-Platform Apps: What Should a Business Choose?", summary: "The right approach depends on product complexity, platform-specific features, delivery priorities, and how the application will be maintained as it grows.", category: "Mobile Development", takeaway: "Choose the architecture around the product rather than a one-size-fits-all rule.", accent: "violet" },
  { title: "Why Website Performance Matters for SEO", summary: "Fast loading, stable layouts, and responsive interactions help search visibility while making visitors more likely to trust and engage with a business.", category: "SEO & Performance", takeaway: "Performance supports discovery, accessibility, conversion, and brand credibility.", accent: "green" },
];

export const technologyAreas: TechnologyArea[] = [
  { title: "AI-assisted workflows", description: "Useful automation with evaluation, privacy boundaries, and human oversight." },
  { title: "On-device intelligence", description: "Faster, more private experiences that can work closer to the user." },
  { title: "Cross-platform architecture", description: "Shared foundations without losing the interaction quality each platform needs." },
  { title: "Edge and serverless delivery", description: "Globally responsive systems with focused operational overhead." },
];
