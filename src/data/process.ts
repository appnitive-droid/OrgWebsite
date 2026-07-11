export type ProcessStep = { number: string; title: string; description: string };
export const processSteps: ProcessStep[] = [
  { number: "01", title: "Discovery", description: "Understand the business, audience, challenges, requirements, and desired outcome." },
  { number: "02", title: "Strategy", description: "Define product scope, feature priorities, technical architecture, and delivery direction." },
  { number: "03", title: "Design", description: "Create user flows, wireframes, interfaces, prototypes, and reusable visual systems." },
  { number: "04", title: "Development", description: "Build with maintainable code, modern tools, and scalable architecture." },
  { number: "05", title: "Testing", description: "Test usability, responsiveness, devices, performance, permissions, errors, and edge cases." },
  { number: "06", title: "Launch", description: "Prepare deployment, app-store submission, analytics, and monitoring." },
  { number: "07", title: "Growth", description: "Improve through feedback, maintenance, SEO, optimization, and new features." },
];
