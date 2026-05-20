# Development Plan

This plan turns the Mistyislet website documentation into an executable build sequence. The first release should reproduce the current Framer `Message` adaptation as a coded, static-first public website.

## Build Goal

Create a single-page Mistyislet official website that follows the Framer layer hierarchy:

```text
Hero
Product
Solutions
How It Works
Benefits
Resources
Partners
Pricing
FAQ
Final CTA
Footer
```

The site should feel like the adapted `Message` template: dark, calm, full-bleed, cinematic, and editorial. The story should be Mistyislet: access-control readers, edge gateways, cloud SaaS, mobile credentials, integrations, partners, and pricing.

## Development Principles

- Keep version one static-first. No backend, account flow, CMS, or live Framer dependency is required.
- Preserve the Framer section order and responsive behavior before adding new pages.
- Keep all website copy in a typed content module so future copy changes do not require component rewrites.
- Build desktop, tablet, and phone behavior together instead of polishing desktop first and repairing mobile later.
- Use safe partner language unless formal partner claims are confirmed.
- Use `Preview` as the CTA text everywhere a primary action appears.

## Recommended Stack

```text
Vite
React
TypeScript
Tailwind CSS
lucide-react
```

The implementation can later grow into docs, API, partner, and pricing routes, but the initial release should ship as `/` with anchors.

## Milestones

### Phase 0: Project Foundation

Outcome: the repo has a runnable frontend project with formatting, build, and a minimal app shell.

Tasks:

- Initialize Vite React TypeScript project in `/Users/siky/code/web-misty`.
- Add Tailwind CSS and `lucide-react`.
- Add scripts for `dev`, `build`, and `preview`.
- Create base folders for `components`, `sections`, `content`, `styles`, and `assets`.
- Add initial metadata: `Mistyislet - Cloud access control for modern places`.

Expected files:

```text
package.json
index.html
vite.config.ts
tsconfig.json
tailwind.config.ts
postcss.config.js
src/main.tsx
src/App.tsx
src/styles/globals.css
```

### Phase 1: Design System And Shell

Outcome: the coded site has the visual frame of the Framer template.

Tasks:

- Define color tokens, typography scale, spacing, borders, focus states, and section rhythm.
- Build `SiteShell`, `Navbar`, and `Footer`.
- Implement sticky/fixed navigation with exact labels: `Product / Solutions / Resources / Partners / Pricing`.
- Add smooth anchor scrolling.
- Add a subtle noise layer and dark full-page background.
- Make the mobile nav collapse behind an icon button.

Expected files:

```text
src/components/SiteShell.tsx
src/components/Navbar.tsx
src/components/Footer.tsx
src/styles/globals.css
```

### Phase 2: Content Model

Outcome: all website copy from the documentation is represented as structured data.

Tasks:

- Create `src/content/site-content.ts`.
- Add typed exports for nav, hero, products, solutions, steps, benefits, partners, pricing, FAQ, final CTA, and footer.
- Keep CTA strings centralized so `Preview` remains consistent.
- Add a small text scan checklist for forbidden inherited template copy.

Expected exports:

```text
navItems
hero
productCards
solutionTabs
steps
benefits
partners
pricingPlans
faqItems
finalCta
footer
```

### Phase 3: Core Product Narrative

Outcome: the first half of the page tells the product story clearly.

Tasks:

- Build `HeroSection` with a full-bleed cinematic background treatment.
- Build `ProductSection` for reader, edge gateway, and credential layer.
- Build `SolutionsSection` with desktop/tablet tabs and mobile stacked cards.
- Build `HowItWorksSection` for configure, present, and audit.
- Keep section ids aligned with nav anchors.

Expected files:

```text
src/sections/HeroSection.tsx
src/sections/ProductSection.tsx
src/sections/SolutionsSection.tsx
src/sections/HowItWorksSection.tsx
src/sections/ResourcesSection.tsx
```

### Phase 4: Conversion And Trust Sections

Outcome: the lower page completes the operator, partner, pricing, and FAQ story.

Tasks:

- Build `BenefitsSection` from `WhyItWorks`.
- Build `PartnersSection` as carousel-like or horizontally stepped cards.
- Build `PricingSection` with Pilot, Building, and Enterprise plans.
- Keep the monthly/yearly toggle visually, even if the first copy remains quote-based.
- Build accessible `FAQSection` accordion.
- Build `FinalCTASection` with the `Preview` CTA.

Expected files:

```text
src/sections/BenefitsSection.tsx
src/sections/PartnersSection.tsx
src/sections/PricingSection.tsx
src/sections/FAQSection.tsx
src/sections/FinalCTASection.tsx
```

### Phase 5: Responsive QA And Polish

Outcome: the site is visually stable across desktop, tablet, and phone.

Tasks:

- Verify desktop around `1200px`.
- Verify tablet around `900px`.
- Verify phone around `390px`.
- Confirm no text overlap, clipped buttons, layout jumps, or unreadable hero copy.
- Confirm tab content and pricing cards keep stable dimensions.
- Confirm FAQ and pricing controls are keyboard accessible.
- Confirm no old template text remains.

Checks:

```text
npm run build
Desktop screenshot
Tablet screenshot
Phone screenshot
DOM/text scan for inherited template terms
```

### Phase 6: Release Packaging

Outcome: the site is ready to hand off or deploy.

Tasks:

- Add local run instructions to the project README.
- Record deployment assumptions.
- Keep docs as source of truth for future pages.
- List known follow-up pages: Docs, API, Partners, Pricing.

## Implementation Order

1. Scaffold the frontend project.
2. Build the global shell and navigation.
3. Move all copy into `src/content/site-content.ts`.
4. Implement sections in Framer order.
5. Add responsive behavior while each section is built.
6. Run build and visual QA.
7. Polish spacing, contrast, and interaction details.

## Acceptance Criteria

- Top navigation labels are exactly `Product / Solutions / Resources / Partners / Pricing`.
- Every primary CTA reads `Preview`.
- The first viewport clearly says `Mistyislet` and communicates cloud access control.
- Product content includes reader and edge gateway.
- Solutions content includes cloud SaaS integrations and mobile access control.
- Resources include Docs/API direction.
- Partners section describes ecosystem and support partners without overclaiming.
- Pricing includes Pilot, Building, and Enterprise.
- FAQ uses accessible accordion behavior.
- Footer mirrors the top nav and says `© 2026 Mistyislet | All rights reserved.`
- No inherited template terms such as `Message`, `Arthur`, AI coach copy, or unrelated pricing copy remain.

## Risks And Decisions

| Area | Decision | Risk |
|---|---|---|
| Visual assets | Start with a cinematic access-control background and replace later if a better brand asset appears. | A generic background can make the site feel less product-specific. |
| Partners | Use ecosystem wording for Hikvision and similar vendors. | Formal partnership claims need legal or business confirmation. |
| Pricing | Keep three package cards and visual billing toggle. | Exact public prices may change before launch. |
| Resources | Represent Docs/API as section content in v1. | Dedicated `/docs` and `/api` routes will still be needed later. |
| Framer parity | Match section hierarchy and rhythm, not every exact pixel. | Some motion and component behavior may differ from Framer. |

## Next Development Step

Begin Phase 0 by scaffolding the frontend project, then immediately implement Phase 1 shell components so the page has the same navigational structure as the Framer template.
