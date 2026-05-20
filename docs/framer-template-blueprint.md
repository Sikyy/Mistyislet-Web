# Framer Template Blueprint

This document captures the current Framer structure after adapting the `Message` template for Mistyislet. The implementation should mirror this hierarchy where practical.

## Project

- Framer project: `Message AI (copy)`
- Source template: `Message`
- Primary page: `Home`
- Shared layout/template: `Main`
- Shared footer component: `Footer`

## Top-Level Page Structure

```text
Home
  Desktop
    Hero
    Features              # Product section
    Features              # Solutions section
    Features              # How It Works section
    WhyItWorks            # Benefits section
    Testimonials          # Partners section
    Pricing
    FAQ
    FinalCTA
  Tablet
  Phone
  Template Setup
    Testimonial 1
    Testimonial 2
    Testimonial 3
    Testimonial 4
    UseCaseCard (Mobile)
    UseCaseCard (Mobile)
    UseCaseCard (Mobile)
    UseCaseCard (Mobile)
```

## Shared Main Template

```text
Main
  Desktop
    Smooth Scroll
    NavBar
    Noise
    Placeholder
    Footer
  Tablet
  Phone
```

## Footer Component

```text
Footer
  Desktop
    Header Row
      LeftContent
        Top
          Logo
          Text
        Social Links
        Credits Row
      RightNavigation
        Column1
  Tablet
  Mobile
```

Footer copy has been changed to:

- Brand: `Mistyislet`
- Description: `Cloud access control for modern places.`
- Copyright: `© 2026 Mistyislet | All rights reserved.`
- Navigation: `Product / Solutions / Resources / Partners / Pricing`

## Navigation

```text
NavBar
  Brand: Mistyislet
  Links:
    Product
    Solutions
    Resources
    Partners
    Pricing
  CTA:
    Preview
```

The coded site should implement these as anchors on the first page:

| Label | Target section |
|---|---|
| Product | `#product` |
| Solutions | `#solutions` |
| Resources | `#resources` |
| Partners | `#partners` |
| Pricing | `#pricing` |

## Section Mapping

| Framer layer | Website section | Purpose |
|---|---|---|
| `Hero` | Hero | Brand promise and primary CTA |
| First `Features` | Product | Hardware products: reader, edge gateway, credential layer |
| Second `Features` | Solutions | SaaS, mobile access, integrations, visitor access |
| Third `Features` | How It Works | Configure, present, audit |
| `WhyItWorks` | Benefits | Operational benefits and trust signals |
| `Testimonials` | Partners | Ecosystem, integration, and operator proof |
| `Pricing` | Pricing | Pilot, Building, Enterprise plans |
| `FAQ` | FAQ | Deployment questions |
| `FinalCTA` | Final CTA | Closing preview invitation |
| `Footer` | Footer | Brand, copyright, section navigation |

## Component/Variant Notes

### Use Cases

Desktop uses tabbed variants:

- Cloud SaaS
- Mobile Access
- Access Integrations
- Visitor Access

Mobile uses repeated `UseCaseCard (Mobile)` instances. These should become stacked cards in code.

### Pricing

Framer component: `PricingPlans`

Variants:

- Monthly Desktop
- Yearly Desktop
- Monthly Mobile
- Yearly Mobile
- Monthly Tablet
- Yearly Tablet

Implementation should keep a monthly/yearly toggle even if all public pricing is quote-based or partially custom. The visual toggle is part of the template rhythm.

### FAQ

Framer component: `FAQ-layout`

Variants:

- Desktop
- Mobile

Each FAQ item is an expandable card. Code should use accessible accordion markup.

### Partners

Framer uses slideshow/testimonial-style cards. The coded version should preserve the slideshow or carousel feeling, but content should be partner/ecosystem oriented rather than customer quote oriented.

## Visual Direction

Keep:

- Dark, cinematic background.
- Full-width sections.
- Subtle noise/grain layer.
- Thin borders and muted dividers.
- Minimal, calm typography.
- Rounded buttons consistent with the template.

Avoid:

- Marketing-card-heavy layout.
- Big explanatory feature blocks that feel unrelated to the Message template.
- Overclaiming partner relationships.
- Dense admin-dashboard screenshots as the first viewport.
