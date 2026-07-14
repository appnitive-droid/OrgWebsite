import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyPolicyPage } from "@/src/components/privacy/PrivacyPolicyPage";
import { siteConfig } from "@/src/config/site";
import {
  getPrivacyPolicy,
  validPrivacyPolicies,
} from "@/src/data/privacyPolicies";

type PrivacyPolicyRouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return validPrivacyPolicies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PrivacyPolicyRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const policy = getPrivacyPolicy(slug);

  if (!policy) {
    return { title: "Privacy Policy Not Found", robots: { index: false } };
  }

  const pageTitle = `${policy.appName} Privacy Policy`;
  const fullTitle = `${pageTitle} | ${siteConfig.companyName}`;
  const description = policy.summary;
  const canonicalUrl = `${siteConfig.siteUrl}/privacy/${policy.slug}`;

  return {
    title: pageTitle,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      siteName: siteConfig.companyName,
      title: fullTitle,
      description,
      url: canonicalUrl,
    },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPolicyRoute({
  params,
}: PrivacyPolicyRouteProps) {
  const { slug } = await params;
  const policy = getPrivacyPolicy(slug);

  if (!policy) notFound();

  return <PrivacyPolicyPage policy={policy} />;
}
