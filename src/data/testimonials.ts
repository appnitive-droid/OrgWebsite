export type Testimonial = { quote: string; clientName: string; clientRole: string; company: string; country: string; avatar: string; rating: number | null; service: string; project: string; verified: boolean; featured: boolean };
export const testimonials: Testimonial[] = [];
export const clientExpectations = ["Clear project communication", "Transparent scope and priorities", "Thoughtful design decisions", "Maintainable development", "Realistic technical guidance", "Support after delivery"] as const;
