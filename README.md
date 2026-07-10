# COMPANY_NAME Android studio website

A production-oriented public website for an independent Android app studio. It provides the company landing page, typed app portfolio, support and privacy information, data-deletion instructions, legal starter templates, accessibility information, and contact routes suitable for a Google Play organization profile.

> Before publishing: replace every placeholder, verify every app against its production build, and obtain appropriate legal review.

## Technology

- Next.js App Router, React, TypeScript, Tailwind CSS, and Lucide icons
- Static generation for app and privacy routes
- Vinext/Vite compatibility build for Cloudflare Sites
- No database, authentication, analytics, tracking, cookies, or paid services

## Setup and commands

Use Node.js 22.13 or newer.

```bash
npm install
npm run dev          # local development
npm run typecheck    # TypeScript validation
npm run lint         # ESLint
npm run build        # Cloudflare/Vinext production build
npm run build:next   # standard Next.js static export to out/
npm run check        # typecheck, lint, and production build
```

`next.config.ts` enables static export, trailing slashes, and portable images. For Cloudflare Pages, use `npm run build:next` with output directory `out` and Node 22+. For Vercel, import the repository as a Next.js project. No runtime environment variables are required by default.

## Central configuration

Edit `src/config/site.ts` to change the company/developer name, support/privacy/business/accessibility emails, location, canonical domain, optional response text, legal dates, governing-law placeholder, and future analytics state.

Search for `COMPANY_NAME`, `example.com`, and square-bracket placeholders before release. Do not publish with temporary contact details.

## Apps

All portfolio content lives in `src/data/apps.ts` and is typed by `src/types/app.ts`. Add one unique `AppDefinition` for a new app. Configure its filters, status, features, technology, permissions, data-practice table, policy path, support anchor, `featured`, and `sortOrder`. Leave `playStoreUrl` and `packageName` absent until confirmed; missing store URLs render “Coming soon.”

Future assets follow this convention:

```text
public/apps/[slug]/
  icon.png
  hero.webp
  screenshot-1.webp
  screenshot-2.webp
  screenshot-3.webp
```

The website renders original gradient placeholders when assets are absent. When wiring real assets into `ScreenshotGallery.tsx`, add explicit dimensions, optimized formats, and truthful alt text. Only publish artwork and screenshots you own or are licensed to distribute.

## Privacy and legal content

General notices are in `src/data/legal.ts`; app-specific statements are in `src/data/apps.ts`; the reusable template is `app/privacy/[appSlug]/page.tsx`.

For every released app:

1. Inspect the production Android manifest.
2. Verify permissions, SDKs, APIs, network hosts, analytics, crash reporting, advertising, purchases, and storage behaviour.
3. Update `permissions`, `dataPractices`, `thirdPartyServices`, AI disclosures, and retention text.
4. Update legal dates in `src/config/site.ts`.
5. Compare the policy with the Play Console Data safety declaration.
6. Remove descriptions of planned features that are not released.
7. Obtain owner/legal review.

Mandatory safeguards:

- Privacy policies must match actual app behaviour.
- Play Console Data safety declarations must match the app and privacy policy.
- SDK data practices must be verified from current SDK documentation.
- Permissions must be reviewed from each production manifest.
- Legal language should be reviewed before publishing.
- Placeholder contact information must be replaced.
- Effective dates must be updated.
- Policies should not mention features that are not released.

## Forms, analytics, cookies, and secrets

The contact and deletion forms validate in the browser and prepare a `mailto:` message. They do not send or store data on this website. A future hosted form must add server-side validation, rate limiting, abuse protection, accessible confirmation, and an updated privacy notice.

No analytics or non-essential cookies are loaded, so no cookie banner is shown. If analytics is enabled later, update the privacy/cookie disclosures, add consent where required, and never load it before required consent.

Never put API keys or provider secrets in this repository, `site.ts`, public files, or a `NEXT_PUBLIC_` variable. Store secrets with the hosting provider and use a reviewed backend proxy.

## Verification

Run `npm run build:next`, use a link checker against `out/`, and manually verify:

- header, mobile menu, footer, skip link, theme persistence, and reduced motion
- app search, category/status filters, and empty state
- every `/apps/[slug]/` and `/privacy/[appSlug]/` route
- support anchors, mailto forms, direct email fallbacks, robots, sitemap, manifest, favicon, and 404
- keyboard navigation, focus, 200% zoom, contrast, and screen-reader names

## Google Play checklist

- [ ] Legal organization name matches Play Console records.
- [ ] Domain and support emails are owner-controlled.
- [ ] The site and every policy load without sign-in.
- [ ] Each published app has a direct policy URL.
- [ ] Data-deletion instructions match account/server behaviour.
- [ ] Store listing, Data safety form, policy, permissions, and SDK behaviour agree.
- [ ] No unverified URL, package name, feature, affiliation, or privacy claim remains.
- [ ] Contact routes are monitored.

## Pre-launch checklist

- [ ] Replace company, emails, canonical domain, legal dates, and governing law.
- [ ] Add confirmed Play Store URLs, package names, icons, and screenshots.
- [ ] Review status labels, planned capabilities, and providers.
- [ ] Run type checking, linting, both builds, link checks, and responsive/accessibility testing.
- [ ] Confirm no secrets or private personal details are committed.
- [ ] Obtain legal review.

## Structure

```text
app/                    Routes, metadata, sitemap, manifest, and layouts
src/components/         Reusable UI, cards, filters, forms, and legal layout
src/config/site.ts      Central company, email, domain, and legal values
src/data/apps.ts        Portfolio and app-specific privacy data
src/data/faqs.ts        Support questions
src/data/legal.ts       Legal notices and privacy principles
src/data/navigation.ts  Header and footer navigation
src/types/app.ts        AppDefinition and privacy-table types
public/apps/            Future app asset convention
public/_headers         Recommended security and cache headers
```
