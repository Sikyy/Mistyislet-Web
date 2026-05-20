# Product Brief

## One-Line Definition

Mistyislet is a cloud access-control platform for modern buildings, combining door readers, edge gateways, mobile credentials, physical cards, event auditing, and enterprise integrations.

## Product Category

Mistyislet competes in the same broad category as Kisi: cloud-managed physical access control for offices, buildings, campuses, and tenant-operated spaces.

## Core Product Pillars

### Hardware

- Readers at the door for NFC, BLE, QR, mobile credentials, and physical cards.
- Edge gateways/controllers that keep local decisions, offline cache, device heartbeat, and event sync close to each door.
- Hardware lifecycle and visibility through readers, controllers, terminals, gateways, serial inventory, and OTA/config commands.

### Cloud SaaS

- Browser-based console for places, doors/locks, floors, areas, users, groups, teams, schedules, access rights, cards, shares, and events.
- Real-time event review and audit trails for access events, device events, admin changes, and revocations.
- Organization and place-level management for multi-site operators.

### Mobile Access

- Mobile credentials for phones, including BLE/NFC/QR access paths.
- Apple Wallet and Google Wallet issuance flows are documented in the product repo.
- Visitor passes and digital credentials support temporary or short-term access.

### Integrations

- API and webhook surface for access events and workflow integration.
- Enterprise identity features include SAML, OIDC, SCIM/HRIS-oriented workflows, WebAuthn, and multi-tenant team hierarchy.
- OpenAPI baseline is available from `/api/v1/openapi.json` in the product backend.

## Audiences

- Building operators who need a calmer cloud console for daily access operations.
- Property teams and multi-site operators who care about auditability and rollout speed.
- Integrators who deploy readers, gateways, wiring, commissioning, and handover.
- Technical evaluators who need API, webhook, identity, and hardware compatibility details.

## Positioning

Mistyislet should feel quieter and more infrastructure-grade than a generic SaaS page. The website should emphasize:

- Doors keep working when the network is unstable.
- Access rules live in the cloud but decisions can stay close to the door.
- Mobile credentials reduce plastic-card operational friction.
- Events and admin changes are searchable and auditable.
- Existing building ecosystems should be integrated carefully, not replaced blindly.

## Claims To Use Carefully

The website can mention compatibility and ecosystem support, but should avoid implying formal partnerships unless confirmed.

Good:

- "Hikvision ecosystem"
- "Camera and building-security hardware compatibility"
- "Compatible hardware and integration partners"

Avoid:

- "Official Hikvision partner"
- "Certified by Hikvision"
- "Works with all existing hardware"

## Product Vocabulary

Use these public-facing terms:

- Product
- Reader
- Edge Gateway
- Cloud Console
- Mobile Credentials
- Access Integrations
- Visitor Access
- Places
- Doors
- Users
- Groups
- Schedules
- Audit Trails
- Events

Use API/internal terms only in technical resource pages:

- locks
- controllers
- readers
- terminals
- role assignments
- shares
- cards
- card assignments
- event sets

## Website Goal

The first site should not be a generic landing page. It should be the actual public website for Mistyislet: a concise product narrative, a clear nav, product/solution coverage, partner credibility, pricing intent, FAQs, and a final preview CTA.
