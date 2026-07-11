export type TechnologyGroup = { id: string; label: string; description: string; technologies: string[] };
export const technologyGroups: TechnologyGroup[] = [
  { id: "mobile", label: "Mobile", description: "Native depth or cross-platform reach, selected around the product.", technologies: ["Kotlin", "Jetpack Compose", "Android SDK", "Swift", "Flutter", "React Native"] },
  { id: "web", label: "Web", description: "Fast interfaces and maintainable systems for every modern screen.", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { id: "backend", label: "Backend & data", description: "Reliable APIs and data layers that can grow with the business.", technologies: ["Node.js", "Express", "REST APIs", "Firebase", "Supabase", "MongoDB", "PostgreSQL"] },
  { id: "cloud", label: "Cloud", description: "Deployment and delivery choices designed for resilience and speed.", technologies: ["Cloudflare", "Vercel", "Firebase", "Docker", "GitHub Actions", "Serverless platforms"] },
  { id: "ai", label: "AI", description: "Useful intelligence with clear boundaries, evaluation, and human control.", technologies: ["OpenAI APIs", "Gemini APIs", "Retrieval-augmented generation", "Vector databases", "On-device AI exploration", "Automation workflows"] },
  { id: "design", label: "Design & growth", description: "A connected system for experience quality, discovery, and iteration.", technologies: ["Figma", "Material Design", "Design systems", "Search Console", "Performance optimization", "SEO tools"] },
];
