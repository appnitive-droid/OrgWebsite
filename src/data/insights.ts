export type Insight = { slug: string; title: string; excerpt: string; category: string; readingTime: string; published: boolean; sample: boolean };
export const insights: Insight[] = [
  { slug: "ai-mobile-development", title: "How AI Is Changing Mobile Application Development", excerpt: "Where AI is already useful in mobile products—and where careful product decisions still matter most.", category: "Artificial Intelligence", readingTime: "6 min read", published: false, sample: true },
  { slug: "native-vs-cross-platform", title: "Native vs Cross-Platform Apps: What Should a Business Choose?", excerpt: "A practical framework for comparing performance, delivery speed, product complexity, and long-term cost.", category: "Mobile Development", readingTime: "8 min read", published: false, sample: true },
  { slug: "website-performance-seo", title: "Why Website Performance Matters for SEO", excerpt: "How faster loading, stable layouts, and responsive interactions support both search visibility and conversion.", category: "SEO", readingTime: "5 min read", published: false, sample: true },
];
export const futureInsightCategories = ["Technology News", "Mobile Development", "Web Development", "Artificial Intelligence", "SEO", "Product Development", "Software Architecture", "Startup Technology", "UI/UX", "Cloud and APIs"] as const;
