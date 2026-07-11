export type ContactPayload = { fullName: string; email: string; company: string; service: string; summary: string; budget: string; timeline: string; contactPath: "project" | "general" };
export type ContactResult = { ok: boolean; configured: boolean; message: string };
export async function submitContactForm(payload: ContactPayload): Promise<ContactResult> {
  void payload;
  // Phase 2: replace this adapter with a Cloudflare Worker, Resend, Formspree, or custom API call.
  await new Promise(resolve => window.setTimeout(resolve, 700));
  return { ok: false, configured: false, message: "Online delivery is not configured yet. Please use the email option below to send your enquiry." };
}
