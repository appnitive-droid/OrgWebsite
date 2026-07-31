import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  getEnabledThirdPartyServices,
  type PolicySection,
  type PrivacyPolicyConfig,
} from "@/src/data/privacyPolicies";

const tableOfContents = [
  ["introduction", "Introduction"],
  ["information", "Information processed"],
  ["permissions", "Permissions"],
  ["use", "How information is used"],
  ["storage", "Data storage and retention"],
  ["sharing", "Data sharing"],
  ["third-parties", "Third-party services"],
  ["security", "Security"],
  ["children", "Children's privacy"],
  ["rights", "Rights and choices"],
  ["changes", "Changes to this policy"],
  ["contact", "Contact"],
] as const;

function DetailCards({ items }: { items: readonly PolicySection[] }) {
  return (
    <div className="policy-detail-grid">
      {items.map((item) => (
        <article key={item.title} className="policy-detail-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

function PolicyList({ items }: { items: readonly string[] }) {
  return (
    <ul className="policy-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function PrivacyPolicyPage({
  policy,
}: {
  policy: PrivacyPolicyConfig;
}) {
  const thirdPartyServices = getEnabledThirdPartyServices(policy);

  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <div className="container privacy-hero-inner">
          <Link className="privacy-back-link" href="/privacy">
            <ArrowLeft size={16} aria-hidden="true" />
            All privacy policies
          </Link>
          <span className="eyebrow">{policy.appName}</span>
          <h1>{policy.appName} Privacy Policy</h1>
          <p>
            This policy describes how {policy.developerName} handles information
            in {policy.appName}.
          </p>
          <dl className="policy-dates">
            <div>
              <dt>Effective date</dt>
              <dd>{policy.effectiveDate}</dd>
            </div>
            <div>
              <dt>Last updated</dt>
              <dd>{policy.lastUpdated}</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="container privacy-layout">
        <aside className="policy-toc-shell">
          <nav className="policy-toc" aria-label="Privacy policy contents">
            <h2>On this page</h2>
            <ol>
              {tableOfContents.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="policy-content">
          <section id="introduction" aria-labelledby="introduction-heading">
            <h2 id="introduction-heading">Introduction</h2>
            <p>{policy.introduction}</p>
          </section>

          <section id="information" aria-labelledby="information-heading">
            <h2 id="information-heading">Information collected or processed</h2>
            <DetailCards items={policy.dataCollected} />
          </section>

          <section id="permissions" aria-labelledby="permissions-heading">
            <h2 id="permissions-heading">Permissions and their purposes</h2>
            {policy.permissions.length ? (
              <>
                <p>
                  You can review or change these permissions in Android settings.
                  Some features will not work when the permission they require is
                  unavailable.
                </p>
                <DetailCards items={policy.permissions} />
              </>
            ) : (
              <p>
                The current version does not request Android runtime permissions
                or special-access permissions for its core functionality.
              </p>
            )}
          </section>

          <section id="use" aria-labelledby="use-heading">
            <h2 id="use-heading">How information is used</h2>
            <PolicyList items={policy.dataUsage} />
          </section>

          <section id="storage" aria-labelledby="storage-heading">
            <h2 id="storage-heading">Data storage and retention</h2>
            <PolicyList items={policy.dataRetention} />
          </section>

          <section id="sharing" aria-labelledby="sharing-heading">
            <h2 id="sharing-heading">Data sharing</h2>
            <PolicyList items={policy.dataSharing} />
          </section>

          <section id="third-parties" aria-labelledby="third-parties-heading">
            <h2 id="third-parties-heading">Third-party services</h2>
            {thirdPartyServices.length ? (
              <div className="policy-detail-grid">
                {thirdPartyServices.map((service) => (
                  <article key={service.name} className="policy-detail-card">
                    <h3>{service.name}</h3>
                    <p>{service.purpose}</p>
                    {service.privacyPolicyUrl ? (
                      <a
                        className="arrow-link"
                        href={service.privacyPolicyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Provider privacy policy
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : (
              <p>
                This policy does not currently identify a third-party service
                that receives information from the app&apos;s core functionality.
                Android platform services remain subject to your device settings
                and the platform provider&apos;s terms.
              </p>
            )}
          </section>

          <section id="security" aria-labelledby="security-heading">
            <h2 id="security-heading">Security</h2>
            <PolicyList items={policy.security} />
          </section>

          <section id="children" aria-labelledby="children-heading">
            <h2 id="children-heading">Children&apos;s privacy</h2>
            <p>{policy.childrenPrivacy}</p>
          </section>

          <section id="rights" aria-labelledby="rights-heading">
            <h2 id="rights-heading">User rights and choices</h2>
            <PolicyList items={policy.userRights} />
          </section>

          <section id="changes" aria-labelledby="changes-heading">
            <h2 id="changes-heading">Changes to this policy</h2>
            <p>{policy.policyChanges}</p>
          </section>

          <section id="contact" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Contact</h2>
            <p>
              If you have questions about this policy or the privacy practices
              of {policy.appName}, contact {policy.developerName} at:
            </p>
            <a className="policy-contact" href={`mailto:${policy.contactEmail}`}>
              {policy.contactEmail}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </section>
        </article>
      </div>
    </div>
  );
}
