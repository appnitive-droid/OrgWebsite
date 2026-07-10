export type FAQ = { question: string; answer: string; category: string };

export const faqs: FAQ[] = [
  {
    category: "Permissions",
    question: "Why does an app request a particular permission?",
    answer:
      "Permissions enable specific features such as taking a photo, tracking an active route, sending notifications, or managing a user-enabled focus rule. The exact reason differs by app; review the app-specific privacy policy before granting access.",
  },
  {
    category: "Permissions",
    question: "How do I disable or revoke a permission?",
    answer:
      "Open Android Settings, choose Apps, select the app, then open Permissions. Android labels and paths vary by device. Revoking access can disable the feature that depends on it.",
  },
  {
    category: "Background features",
    question: "Why are background features not working?",
    answer:
      "Battery restrictions, notification permissions, background-data settings, and manufacturer power controls can pause timers, schedules, tracking, or protection features. Check the app's permission guidance and your device's battery settings.",
  },
  {
    category: "Background features",
    question: "How do I disable battery optimization?",
    answer:
      "Only do this when an app explains why it is needed. In Android Settings, search for Battery optimization or Background usage, select the app, and allow the appropriate background mode. The exact path varies by manufacturer.",
  },
  {
    category: "Data",
    question: "How do I delete locally stored information?",
    answer:
      "Use the app's own delete or reset controls where available, or open Android Settings > Apps > the app > Storage and choose Clear storage. This removes local settings and records and cannot usually be undone.",
  },
  {
    category: "Data",
    question: "How do I request deletion of server-stored information?",
    answer:
      "Use the data-deletion page and identify the app, account or transaction reference, and the email connected to your request. Some apps do not maintain accounts or server-side personal data.",
  },
  {
    category: "Data",
    question: "Does uninstalling delete local information?",
    answer:
      "Android normally removes an app's private local data when you uninstall it. Files you deliberately exported, downloaded, or saved into shared storage may remain and must be deleted separately.",
  },
  {
    category: "Support",
    question: "How do I report a bug?",
    answer:
      "Send the app name, Android version, device model, steps to reproduce, and what you expected. Do not send passwords, private documents, or sensitive conversation content.",
  },
  {
    category: "Purchases",
    question: "How do I request a refund?",
    answer:
      "Purchases are handled by the store or payment provider shown at checkout. Use that provider's receipt and refund process. Eligibility and timing are governed by its current terms.",
  },
  {
    category: "Purchases",
    question: "How do I cancel a subscription or restore a purchase?",
    answer:
      "Manage subscriptions through the account used to purchase the app. Restore options differ by app and store. Contact support with a non-sensitive order reference if the purchase is not recognized.",
  },
  {
    category: "AI features",
    question: "What happens when I use an AI feature?",
    answer:
      "Content needed to answer your request may be sent to the configured AI provider only after you initiate the feature. Review the relevant app policy for the exact data, provider, safeguards, and retention settings.",
  },
];
