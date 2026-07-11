export type ContactPayload = { fullName: string; email: string; company: string; service: string; summary: string; budget: string; timeline: string; contactPath: "project" | "general" };

export function createContactMailto(recipient: string, payload: ContactPayload): string {
  const enquiryType = payload.contactPath === "project" ? "Project enquiry" : "General enquiry";
  const subject = `${enquiryType}: ${payload.service}`;
  const body = [
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "Not provided"}`,
    `Service: ${payload.service}`,
    `Budget: ${payload.budget || "Not specified"}`,
    `Timeline: ${payload.timeline || "Not specified"}`,
    "",
    "Project summary:",
    payload.summary,
  ].join("\n");
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
