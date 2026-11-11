import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, ShieldCheck } from "lucide-react";
import { astroSageDeletion } from "@/src/config/astrosage";
import { siteConfig } from "@/src/config/site";
import styles from "./page.module.css";

const title = "AstroSage Account Deletion Request";
const description = `Request deletion of your AstroSage Android account and associated data by emailing ${siteConfig.companyName}. No sign-in or app installation is required.`;
const canonical = "/astrosage/delete";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "website" },
  twitter: { card: "summary", title, description },
};

export default function AstroSageDeletionPage() {
  const { supportEmail, processingTimeframe, transactionRetentionPeriod } = astroSageDeletion;
  const requestHref = `mailto:${supportEmail}?subject=${encodeURIComponent(title)}`;

  return (
    <div className={styles.page}>
      <div className={`container ${styles.content}`}>
        <section className={styles.intro} aria-labelledby="deletion-title">
          <div className={styles.app}>
            <Image src="/apps/astrosage/icon.webp" alt="" width={56} height={56} />
            <div>
              <p className={styles.appName}>AstroSage for Android</p>
              <p>{siteConfig.companyName}</p>
            </div>
          </div>
          <h1 id="deletion-title">Request Account Deletion</h1>
          <p className={styles.lede}>
            Ask {siteConfig.companyName} to delete your AstroSage account and
            associated data. You can send your request without signing in or
            installing the app.
          </p>
        </section>

        <section className={styles.request} aria-labelledby="request-heading">
          <div className={styles.instructions}>
            <h2 id="request-heading">How to submit your request</h2>
            <ol>
              <li>Email the AstroSage support address shown on this page.</li>
              <li>Use the subject <strong>{title}</strong>.</li>
              <li>
                Where possible, send the request from the Google email address
                associated with your AstroSage account.
              </li>
              <li>Our support team may contact you to verify account ownership.</li>
              <li>After verification, we’ll process your deletion request.</li>
            </ol>
          </div>
          <div className={styles.contact}>
            <h3>Send your request by email</h3>
            <a className={`button ${styles.cta}`} href={requestHref} aria-describedby="email-help">
              <Mail size={19} aria-hidden="true" />
              Request Account Deletion
            </a>
            <p id="email-help">
              This opens an email draft. If your email app doesn’t open, copy the
              support address and follow the steps above.
            </p>
            <p className={styles.email}>{supportEmail}</p>
          </div>
        </section>

        <div className={styles.details}>
          <section className={styles.card} aria-labelledby="deleted-heading">
            <h2 id="deleted-heading">What data will be deleted</h2>
            <p>Deletion covers your AstroSage account and associated data where stored, including:</p>
            <ul>
              <li>Account and profile information</li>
              <li>Saved birth details and Kundli records</li>
              <li>Stored AI conversations and associated history</li>
              <li>Remaining account credit balance</li>
              <li>Other personal data associated with your AstroSage account</li>
            </ul>
            <p>
              You can remove device-only AstroSage data by clearing the app’s
              storage in Android settings. Deleting your AstroSage account does
              not delete your personal Google account.
            </p>
          </section>

          <div className={styles.followUp}>
            <section className={styles.card} aria-labelledby="retention-heading">
              <h2 id="retention-heading"><ShieldCheck size={20} aria-hidden="true" /> Data retention</h2>
              <p>
                We may need to retain certain transaction records for legal,
                tax, fraud-prevention, or regulatory purposes.
              </p>
              <p><strong>Retention period</strong> {transactionRetentionPeriod}</p>
            </section>
            <section className={styles.card} aria-labelledby="timeframe-heading">
              <h2 id="timeframe-heading"><Clock3 size={20} aria-hidden="true" /> Processing timeframe</h2>
              <p>{processingTimeframe}</p>
            </section>
          </div>
        </div>

        <Link href="/privacy/astrosage" className={`arrow-link ${styles.privacy}`}>
          AstroSage Privacy Policy <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
