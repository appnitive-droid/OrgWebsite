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

Update `src/config/site.ts`. The production domain and shared business email are configured there; unavailable optional contact channels use `null` or empty collections. Do not repeat company details inside components.

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

## Extending insights

Homepage mini-insights and technology exploration areas live in `src/data/insights.ts`. Each mini-insight is self-contained and uses the typed `Insight` model. A full blog can later add a `content/insights/` MDX collection and separate article routes without changing the current homepage presentation.

## Connecting server-side form delivery

`src/lib/contact.ts` currently creates a validated, prefilled email handoff. To add direct delivery, replace that handoff with a Cloudflare Worker, a Next.js/Netlify function using Resend, Formspree, or a custom API. Keep the client validation in `ContactSection.tsx` and add server-side validation plus abuse protection to the endpoint.

## Deployment

### Vercel

Import the repository, use the Next.js preset, and deploy with the default build command.

### Cloudflare Pages / Workers

Use the included Vinext/Vite build with `npm run build`. Configure the output expected by the chosen Cloudflare adapter or deploy with the included Sites hosting metadata when present.

### Netlify

Import the repository, select the Next.js runtime, and use `npm run build:next`. No backend is required for Phase 1.

## Optional additions

- Final brand icon and logo assets
- Real project screenshots
- Direct contact delivery endpoint
- Separate phone, WhatsApp, booking, and social channels when available
- Verified testimonials when supplied
- Full MDX articles when editorial publishing begins

## Recommended Phase 2 order

1. Contact delivery endpoint and production company details
2. Service detail pages
3. Case studies and product detail pages
4. MDX insights index and article pages
5. About page and FAQs
6. Support centre and app-specific privacy policies
7. Legal, data deletion, accessibility, and careers pages

The shared tokens, section primitives, typed data models, metadata foundation, navigation, footer, and CSS mockup patterns are intentionally reusable for those pages.
