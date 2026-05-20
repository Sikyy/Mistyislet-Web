# Implementation Specification

This document turns the current Framer template into implementation requirements for the coded website.

## Target

Build a single-page Mistyislet public website that visually tracks the current Framer `Message` adaptation and can later be extended into a larger marketing/docs site.

## Suggested Stack

Because `/Users/siky/code/web-misty` is currently empty, use a modern frontend stack when implementation begins:

- Vite
- React
- TypeScript
- Tailwind CSS
- lucide-react for icons

The implementation should stay static-first. No backend integration is required for the first version.

## Routes

Initial version:

```text
/
```

Anchor targets:

```text
#product
#solutions
#resources
#partners
#pricing
#faq
```

Future routes:

```text
/docs
/api
/partners
/pricing
```

The first version can keep `Resources` as an anchor section or header link until dedicated docs/API pages are built.

## Component Tree

```text
App
  SiteShell
    Navbar
    HeroSection
    ProductSection
      ProductCard[]
    SolutionsSection
      SolutionTabs        # desktop/tablet
      SolutionCard[]      # mobile
    HowItWorksSection
      StepCard[]
    BenefitsSection
      BenefitCard[]
    PartnersSection
      PartnerCarousel
    PricingSection
      BillingToggle
      PricingCard[]
    FAQSection
      AccordionItem[]
    FinalCTASection
    Footer
```

## Data Structure

Put content in a single typed data module so copy and UI remain separate.

```text
src/content/site-content.ts
```

Suggested exports:

- `navItems`
- `hero`
- `productCards`
- `solutionTabs`
- `steps`
- `benefits`
- `partners`
- `pricingPlans`
- `faqItems`
- `finalCta`
- `footer`

## Layout Requirements

### Global

- Dark background with subtle noise/grain.
- Avoid nested cards.
- Use full-width sections with constrained inner content.
- Use a sticky or fixed top nav as in the template.
- Keep text legible over image/background surfaces.
- Use responsive constraints rather than viewport-scaled typography.

### Hero

- First viewport must immediately show `Mistyislet` and the access-control proposition.
- Use a full-bleed background image/video-like treatment similar to the template.
- H1 and body text sit directly over the visual, not inside a card.

### Product

- Preserve three-card structure for reader, gateway, and credential layer.
- Cards should feel like product modules, not marketing tiles.

### Solutions

- Desktop: tabbed interface.
- Mobile: stacked cards.
- The tab content must not cause layout jumps.

### Partners

- Desktop: carousel/slideshow or horizontally stepped cards.
- Mobile: swipe/stack behavior is acceptable.
- Avoid formal partner claims unless verified.

### Pricing

- Keep three plans: Pilot, Building, Enterprise.
- Keep monthly/yearly toggle visually. If yearly copy is not different yet, the toggle may be non-destructive and show the same plan structure with adjusted Building price when needed.
- Buttons all use `Preview`.

### FAQ

- Use accessible accordion markup.
- Questions are closed by default except optionally the first item.

### Footer

- Must use `Mistyislet`, not inherited template branding.
- Footer nav mirrors top nav.
- Copyright line: `© 2026 Mistyislet | All rights reserved.`

## Responsive Requirements

Breakpoints should mirror Framer intent:

| Framer breakpoint | Code equivalent |
|---|---|
| Desktop 1200 | `lg` and above |
| Tablet 1199-810 | `md` to `lg` |
| Phone 809 and below | below `md` |

Important mobile behavior:

- Navigation collapses to a menu button.
- Solutions switch from tabs to cards.
- Pricing cards stack vertically.
- FAQ remains usable with large tap targets.
- Footer should stack brand and navigation.

## Visual Assets

The Framer template currently uses a misty cinematic background. For the coded version:

- Prefer a real or generated bitmap background with a building/door/control-access mood.
- Keep the background inspectable and not overly blurred.
- Do not rely on SVG gradient orbs.
- Maintain a noise overlay if it supports the template style.

## Interaction Requirements

- Smooth anchor scrolling.
- Navbar links point to sections.
- Pricing toggle is keyboard accessible.
- FAQ accordion is keyboard accessible.
- Partner carousel should have non-autoplay controls or accessible pagination.

## SEO Metadata

Initial metadata:

```text
Title: Mistyislet - Cloud access control for modern places
Description: Cloud access control for readers, edge gateways, mobile credentials, and every place you operate.
```

Suggested keywords:

- cloud access control
- mobile credentials
- edge gateway
- door access control
- visitor access
- access control API

## Acceptance Checklist

- Top nav labels are exactly `Product / Solutions / Resources / Partners / Pricing`.
- Every primary CTA reads `Preview`.
- No leftover `Message`, `Arthur`, generic AI-template, or coach/performance text.
- Product section covers reader and edge gateway.
- Solutions section covers cloud SaaS integration and mobile access control.
- Resources are represented as Docs/API direction.
- Partners include ecosystem/supporting partners without overclaiming.
- Pricing has Pilot, Building, Enterprise plans.
- Desktop and mobile screenshots show no overlapping text.
- Footer mirrors top navigation and uses Mistyislet copyright.
