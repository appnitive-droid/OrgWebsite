# Appnitive Technologies — Phase 1

A production-focused homepage and front-end foundation for Appnitive Technologies, a full-service software development and digital solutions company. Phase 1 deliberately contains one complete route: the homepage. Future destinations remain safe homepage anchors until their content is ready.

## Technology

- Next.js App Router, React, and strict TypeScript
- Tailwind CSS v4 with a project-specific token and component layer
- Framer Motion for purposeful interaction and reduced-motion aware reveals
- Lucide icons
- Static generation, metadata API, sitemap, robots, and structured data
- Vinext/Vite support for Cloudflare-compatible builds

## Local setup

```bash
npm install
npm run dev
```

Open the local URL printed by the development server.

## Validation and production

```bash
npm run typecheck
npm run lint
npm run build
```

`npm run build:next` creates the standard Next.js static export. `npm run build` creates the Cloudflare-compatible Vinext output used by the included hosting setup.

## Project structure

```text
app/
  layout.tsx             Global metadata, schema, header, and footer
  page.tsx               Homepage section composition
  globals.css            Tokens, themes, layouts, visuals, and responsive rules
src/
  components/
    sections/            Reusable homepage sections
    ui/                  Shared visual primitives and motion wrappers
  config/site.ts         Company details, feature flags, links, and theme default
  data/                   Services, projects, process, technology, reviews, insights
  lib/contact.ts         Contact delivery abstraction
public/
  brand/ projects/ products/ insights/ patterns/
```

## Editing company information

Update `src/config/site.ts`. Every unknown email, URL, phone number, and social profile is explicitly marked as a placeholder. Do not repeat company details inside components.

Navigation and footer groups live in `src/data/navigation.ts`. Homepage section order is controlled in `app/page.tsx`.

## Services and projects

- Add or edit services in `src/data/services.ts`.
- Add project records in `src/data/projects.ts` using the typed `Project` model.
- Homepage projects are intentionally limited to six. The `futureProjects` list prepares later expansion.
- To add real screenshots, place optimized WebP/AVIF files in `public/projects/<project-slug>/`, add an optional image field to the model, and render it through `next/image` with the existing CSS mockup as the fallback.

## Verified testimonials

1. Add only supplied, verifiable reviews to `src/data/testimonials.ts`.
2. Set `verified: true` on reviewed records.
3. Change `SHOW_TESTIMONIALS` to `true` in `src/config/site.ts`.

If the flag is off or no verified records exist, the homepage automatically shows “What clients can expect.” It never creates fake reviews or ratings.

## Future insights / MDX blog

Sample concepts live in `src/data/insights.ts` with `sample: true` and `published: false`. They are visible only in development because `SHOW_SAMPLE_INSIGHTS` is false in production. Phase 2 can add an `content/insights/` MDX collection, generate typed frontmatter, and replace the sample array with published content. Until then, production shows the designed “Insights coming soon” state.

## Connecting the contact form

`src/lib/contact.ts` is the only delivery adapter. Replace `submitContactForm` with one of:

- a Cloudflare Worker endpoint;
- a Next.js/Netlify function using Resend;
- Formspree;
- a custom API.

Keep validation in `ContactSection.tsx`, add server-side validation and abuse protection to the endpoint, then return a real `ContactResult`. The current adapter clearly reports that online delivery is not configured and offers a mailto fallback; it never claims submission succeeded.

## Deployment

### Vercel

Import the repository, use the Next.js preset, and deploy with the default build command. Replace `siteUrl` before launch.

### Cloudflare Pages / Workers

Use the included Vinext/Vite build with `npm run build`. Configure the output expected by the chosen Cloudflare adapter or deploy with the included Sites hosting metadata when present.

### Netlify

Import the repository, select the Next.js runtime, and use `npm run build:next`. No backend is required for Phase 1.

## Placeholders to replace

- Production domain / `siteUrl`
- Business, support, and privacy emails
- Phone and WhatsApp URL
- Booking URL
- Social profile URLs
- Brand icon/favicon and final logo assets
- Real project screenshots
- Contact delivery endpoint
- Verified testimonials and published insights when supplied

## Recommended Phase 2 order

1. Contact delivery endpoint and production company details
2. Service detail pages
3. Case studies and product detail pages
4. MDX insights index and article pages
5. About page and FAQs
6. Support centre and app-specific privacy policies
7. Legal, data deletion, accessibility, and careers pages

The shared tokens, section primitives, typed data models, metadata foundation, navigation, footer, and CSS mockup patterns are intentionally reusable for those pages.
