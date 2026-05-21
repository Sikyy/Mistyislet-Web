export type SecondaryPageSection = {
  title: string;
  body: string;
  items: string[];
};

export type SecondaryPageValueProp = {
  title: string;
  body: string;
  visual?: "mobile-unlock" | "door-feedback" | "cloud-control";
};

export type SecondaryPageMetric = {
  value: string;
  label: string;
};

export type SecondaryPageDeviceShowcase = {
  eyebrow: string;
  title: string;
  body: string;
  visual: "reader" | "gateway";
  points: string[];
  specs: { label: string; value: string }[];
};

export type SecondaryPageSpecGroup = {
  title: string;
  rows: { label: string; value: string }[];
};

export type SecondaryPageFaq = {
  question: string;
  answer: string;
};

export type SecondaryPageFeatureBlock = {
  eyebrow: string;
  title: string;
  body: string;
  items: string[];
  image: string;
};

export type SecondaryPageProductHero = {
  tagline: string;
  subtitle: string;
  visual: "reader" | "gateway";
};

export type SecondaryPageProductBlueprint = {
  title: string;
  visual: "reader" | "gateway";
  dimensions: { label: string; value: string }[];
};

export type SecondaryPage = {
  path: string;
  category: string;
  title: string;
  intro: string;
  image: string;
  highlights: string[];
  sections: SecondaryPageSection[];
  valueProps?: SecondaryPageValueProp[];
  featureBlocks?: SecondaryPageFeatureBlock[];
  productHero?: SecondaryPageProductHero;
  productBlueprint?: SecondaryPageProductBlueprint;
  deviceShowcase?: SecondaryPageDeviceShowcase;
  metrics?: SecondaryPageMetric[];
  specGroups?: SecondaryPageSpecGroup[];
  faqs?: SecondaryPageFaq[];
};

const useCasePages: SecondaryPage[] = [
  ["factories", "Factories", "Control access across shifts, production zones, and restricted areas."],
  ["fitness-gyms", "Fitness & Gyms", "Give members mobile access while keeping staff, rooms, and service areas controlled."],
  ["office-buildings", "Office Buildings", "Unify tenant access, lobby flows, elevators, and operator oversight."],
  ["schools", "Schools", "Coordinate staff, student, visitor, and after-hours access with clear audit trails."],
  ["hospitals", "Hospitals", "Protect clinical, pharmacy, staff, visitor, and support areas with role-aware access."],
].map(([slug, title, intro]) => ({
  path: `/use-cases/${slug}`,
  category: "Use case",
  title,
  intro,
  image: "/assets/framer-final.png",
  highlights: ["Mobile credentials", "Door schedules", "Event audit"],
  sections: [
    {
      title: "Access model",
      body: "A use-case page maps the building context to doors, people, credentials, and time-based rules.",
      items: ["Zone-based permissions", "Temporary visitor passes", "Offline-ready edge decisions"],
    },
    {
      title: "Operational view",
      body: "Operators get the everyday controls they need without exposing unnecessary setup complexity.",
      items: ["Door and gateway status", "Searchable unlock events", "Fast access revocation"],
    },
  ],
}));

export const secondaryPages: SecondaryPage[] = [
  {
    path: "/product/misty-reader",
    category: "Hardware",
    title: "Misty Reader",
    intro: "A door reader for NFC, BLE, QR, card, and mobile credential workflows.",
    image: "/assets/framer-final.png",
    highlights: ["NFC and BLE", "QR access", "Mobile credentials"],
    sections: [],
    valueProps: [
      {
        title: "Credential flexibility",
        body: "Support phone-first access while keeping cards and QR passes available for sites that still need them.",
        visual: "mobile-unlock",
      },
      {
        title: "Clear door experience",
        body: "Give users a predictable reader interaction at entries, rooms, turnstiles, and shared spaces.",
        visual: "door-feedback",
      },
      {
        title: "Cloud-managed behavior",
        body: "Configure reader rules, feedback, and event visibility from Misty Cloud instead of isolated device tools.",
        visual: "cloud-control",
      },
    ],
    featureBlocks: [
      {
        eyebrow: "At the entrance",
        title: "A familiar tap point at every door",
        body: "Misty Reader gives staff and visitors a clear, predictable surface for presenting credentials — whether tapping a phone, holding up a card, or scanning a QR pass.",
        items: ["Compact wall-mounted form factor", "LED feedback for granted and denied access", "Designed for indoor and sheltered placements"],
        image: "/assets/framer-panel-01.jpg",
      },
      {
        eyebrow: "Multi-credential",
        title: "Phone, card, and QR — one reader surface",
        body: "Sites can start with cards and add mobile credentials when ready, or go phone-first from day one. The reader handles the credential mix each door needs.",
        items: ["NFC for phone and card tap", "BLE for hands-free mobile unlock", "QR scanning for visitor and temporary passes"],
        image: "/assets/framer-panel-02.jpg",
      },
    ],
    productHero: {
      tagline: "Compact design, clear interaction.",
      subtitle: "A wall-mounted reader built for phone-first credential workflows at every door.",
      visual: "reader",
    },
    productBlueprint: {
      title: "Product dimensions",
      visual: "reader",
      dimensions: [
        { label: "Height", value: "122 mm (4.8″)" },
        { label: "Width", value: "50 mm (2.0″)" },
        { label: "Depth", value: "15 mm (0.6″)" },
      ],
    },
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Height", value: "122 mm (4.8″)" },
          { label: "Width", value: "50 mm (2.0″)" },
          { label: "Depth", value: "15 mm (0.6″)" },
          { label: "Weight", value: "85 g" },
          { label: "Mounting", value: "Wall-mount, flush or surface" },
        ],
      },
      {
        title: "Credentials",
        rows: [
          { label: "NFC", value: "Mifare DESFire EV1/EV2/EV3, Mifare Classic, NTAG" },
          { label: "BLE", value: "iOS and Android mobile credentials" },
          { label: "QR", value: "Time-bound visitor and temporary passes" },
          { label: "Card", value: "13.56 MHz high-frequency contactless" },
        ],
      },
      {
        title: "Communication",
        rows: [
          { label: "Interface", value: "Wiegand 26/34, RS-485" },
          { label: "Edge link", value: "Connects to Misty Edge Gateway" },
          { label: "Read range", value: "NFC up to 40 mm, BLE up to 50 mm" },
        ],
      },
      {
        title: "Environment",
        rows: [
          { label: "Protection", value: "IP54, indoor and sheltered outdoor" },
          { label: "Operating temp", value: "−20 °C to +55 °C" },
          { label: "Power", value: "12 V DC via gateway or direct supply" },
          { label: "Indicator", value: "RGB LED ring and audible feedback" },
        ],
      },
    ],
  },
  {
    path: "/product/misty-edge-gateway",
    category: "Hardware",
    title: "Misty Edge Gateway",
    intro: "A local gateway that keeps door decisions responsive even when the network is unstable.",
    image: "/assets/framer-hero.png",
    highlights: ["Offline decisions", "Event sync", "Device heartbeat"],
    sections: [
      {
        title: "Local control",
        body: "The gateway keeps key access logic close to the door, reducing dependency on a live cloud round trip.",
        items: ["Cached access rules", "Offline event queue", "Door and reader heartbeat monitoring"],
      },
      {
        title: "Cloud connected",
        body: "Events and configuration sync back to Misty Cloud so operators can manage sites centrally.",
        items: ["Real-time event forwarding", "Remote rule updates", "Multi-site device visibility"],
      },
    ],
    deviceShowcase: {
      eyebrow: "Device overview",
      title: "A local gateway for reliable door control.",
      body: "Install Misty Edge Gateway near the door hardware so access stays responsive while events continue flowing back to the cloud.",
      visual: "gateway",
      points: ["Local access decisions", "Offline event queue", "Door and reader heartbeat"],
      specs: [
        { label: "Control role", value: "Local door decision and event relay" },
        { label: "Offline behavior", value: "Cached rules and queued events" },
        { label: "Cloud sync", value: "Events, status, and configuration updates" },
        { label: "Best for", value: "Entrances, rooms, gates, and controlled zones" },
        { label: "Managed by", value: "Misty Cloud" },
      ],
    },
    metrics: [
      { value: "Edge", label: "Door decisions stay close to the site" },
      { value: "Queue", label: "Events wait during unstable networks" },
      { value: "Sync", label: "Status returns to the cloud" },
    ],
    faqs: [
      {
        question: "Why does a site need an edge gateway?",
        answer: "The gateway keeps door behavior responsive and gives each reader a local layer for access decisions and event buffering.",
      },
      {
        question: "Can the gateway keep doors working during network interruptions?",
        answer: "Yes. The gateway can use cached access rules and queue events so the site does not depend on a constant cloud round trip.",
      },
    ],
  },
  {
    path: "/product/misty-cloud",
    category: "Platform",
    title: "Misty Cloud",
    intro: "The SaaS control plane for places, doors, users, credentials, rules, and events.",
    image: "/assets/framer-final.png",
    highlights: ["Sites and doors", "Credentials", "Audit events"],
    sections: [
      {
        title: "Control plane",
        body: "Misty Cloud gives operators one place to configure access without jumping between device tools.",
        items: ["People, groups, and roles", "Schedules and exceptions", "Reader and gateway configuration"],
      },
      {
        title: "Operations layer",
        body: "The same platform carries the daily workflows: issue access, review events, and revoke permissions.",
        items: ["Event search", "Admin audit trail", "API and webhook integration"],
      },
    ],
  },
  {
    path: "/solutions/cloud-saas",
    category: "Solution",
    title: "Cloud SaaS",
    intro: "Centralize physical access across buildings, doors, people, schedules, and credentials.",
    image: "/assets/framer-final.png",
    highlights: ["Central console", "Multi-site ready", "Audit-first"],
    sections: [
      {
        title: "For operators",
        body: "Cloud SaaS keeps access management understandable for teams that operate real buildings.",
        items: ["One console for sites and doors", "Roles for admins and operators", "Searchable event history"],
      },
      {
        title: "For integrations",
        body: "Misty Cloud can connect access events and user lifecycle changes with external systems.",
        items: ["Webhooks", "API reference", "Identity and HR workflow support"],
      },
    ],
  },
  {
    path: "/solutions/mobile-access-control",
    category: "Solution",
    title: "Mobile Access Control",
    intro: "Issue phone-first access for staff, tenants, members, and visitors without plastic-card bottlenecks.",
    image: "/assets/framer-hero.png",
    highlights: ["Phone-first", "Temporary passes", "Fast revocation"],
    sections: [
      {
        title: "Credential lifecycle",
        body: "Mobile access should be easy to issue, easy to audit, and easy to revoke.",
        items: ["Mobile credentials", "QR visitor passes", "Time-based permissions"],
      },
      {
        title: "User experience",
        body: "Users get familiar access flows while operators keep control of every credential.",
        items: ["Tenant and staff access", "Guest and visitor workflows", "Central event visibility"],
      },
    ],
  },
  ...useCasePages,
  {
    path: "/use-cases/coworking",
    category: "Use case",
    title: "Coworking",
    intro: "Manage members, guests, meeting rooms, and shared-space access from the cloud.",
    image: "/assets/framer-final.png",
    highlights: ["24/7 member access", "Guest passes", "Room-level control"],
    sections: [
      {
        title: "Membership access",
        body: "Connect membership status, plans, and schedules to the doors people use every day.",
        items: ["Member groups", "Plan-based permissions", "Automatic access changes"],
      },
      {
        title: "Shared-space operations",
        body: "Keep front doors, meeting rooms, private offices, and back-of-house areas in one operating view.",
        items: ["Door and zone visibility", "Visitor and guest access", "Event search for disputes"],
      },
    ],
    valueProps: [
      {
        title: "Let members arrive without staff handoffs",
        body: "Give members access that follows their plan, schedule, and space permissions.",
      },
      {
        title: "Keep guest access temporary",
        body: "Issue short-lived QR or mobile passes for visitors, interviews, and booked meeting rooms.",
      },
      {
        title: "See what happened after hours",
        body: "Review door activity, failed unlock attempts, and admin changes in one timeline.",
      },
    ],
    metrics: [
      { value: "24/7", label: "Access for eligible members" },
      { value: "1", label: "Cloud view for doors and events" },
      { value: "QR", label: "Temporary guest access" },
    ],
    specGroups: [
      {
        title: "Coworking access model",
        rows: [
          { label: "Users", value: "Members, teams, staff, guests, cleaners, and vendors" },
          { label: "Doors", value: "Main entry, meeting rooms, private offices, amenities, and service zones" },
          { label: "Rules", value: "Plan-based access, time windows, temporary passes, and revocation" },
          { label: "Integrations", value: "Coworking apps, HR tools, identity systems, and event webhooks" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can members access the space outside staffed hours?",
        answer: "Yes. Eligible members can receive mobile or card credentials with schedules that match their membership plan and site policy.",
      },
      {
        question: "Can guest access expire automatically?",
        answer: "Yes. Visitor passes can be time-bound so temporary access does not become a permanent operational risk.",
      },
    ],
  },
  {
    path: "/resources/docs",
    category: "Resources",
    title: "Docs",
    intro: "Product concepts, deployment notes, and operating guidance for Mistyislet.",
    image: "/assets/framer-final.png",
    highlights: ["Concepts", "Setup notes", "Release guidance"],
    sections: [
      {
        title: "Product documentation",
        body: "Docs should give operators and builders a shared language for every access-control object.",
        items: ["Places, doors, readers, and gateways", "Users, groups, schedules, and credentials", "Events, audits, and admin roles"],
      },
      {
        title: "Deployment guidance",
        body: "Documentation also supports planning before a site goes live.",
        items: ["Door inventory", "Reader and gateway mapping", "Launch checklist"],
      },
    ],
  },
  {
    path: "/resources/api-reference",
    category: "Resources",
    title: "API Reference",
    intro: "API surfaces for doors, credentials, users, events, and webhooks.",
    image: "/assets/framer-hero.png",
    highlights: ["REST API", "Webhooks", "Event data"],
    sections: [
      {
        title: "Core objects",
        body: "The API should make physical access programmable without hiding operational context.",
        items: ["Users and credentials", "Doors and devices", "Access events and admin audit"],
      },
      {
        title: "Integration flows",
        body: "Teams can connect Mistyislet to identity, HR, visitor, and operations software.",
        items: ["Provisioning workflows", "Event subscriptions", "Revocation and lifecycle automation"],
      },
    ],
  },
  {
    path: "/resources/deployment-guide",
    category: "Resources",
    title: "Deployment Guide",
    intro: "A planning guide for reader placement, gateway wiring, credentials, and site launch.",
    image: "/assets/framer-final.png",
    highlights: ["Site planning", "Wiring", "Launch checklist"],
    sections: [
      {
        title: "Before installation",
        body: "Good deployment starts with a clean model of doors, users, zones, and exceptions.",
        items: ["Door inventory", "Access zones", "Credential plan"],
      },
      {
        title: "Go-live",
        body: "Launch steps keep site teams, integrators, and operators aligned.",
        items: ["Gateway commissioning", "Reader validation", "Operator handover"],
      },
    ],
  },
  {
    path: "/resources/security-notes",
    category: "Resources",
    title: "Security Notes",
    intro: "Credential lifecycle, least-privilege roles, auditability, and revocation controls.",
    image: "/assets/framer-hero.png",
    highlights: ["Least privilege", "Audit trail", "Revocation"],
    sections: [
      {
        title: "Access governance",
        body: "Operators need clear controls for who can grant access and how changes are reviewed.",
        items: ["Admin roles", "Group-based access", "Change audit"],
      },
      {
        title: "Credential safety",
        body: "Credential workflows should make it easy to remove access when risk changes.",
        items: ["Immediate revocation", "Temporary credentials", "Event review"],
      },
    ],
  },
  ...[
    ["hikvision", "Hikvision", "Camera and building-security hardware ecosystem."],
    ["zkteco", "ZKTeco", "Access-control terminals, readers, and site hardware."],
    ["fingerspot", "Fingerspot", "Attendance and access hardware for regional deployments."],
    ["suprema", "Suprema", "Biometric readers and enterprise access hardware."],
  ].map(([slug, title, intro]) => ({
    path: `/partners/hardware/${slug}`,
    category: "Hardware partner",
    title,
    intro,
    image: "/assets/framer-final.png",
    highlights: ["Hardware ecosystem", "Site deployments", "Integrator support"],
    sections: [
      {
        title: "Hardware context",
        body: "Hardware partner pages explain where third-party devices may fit around the Mistyislet stack.",
        items: ["Readers and terminals", "Camera and security context", "Deployment planning"],
      },
      {
        title: "Operator workflow",
        body: "Mistyislet keeps the operator experience centered around cloud rules, credentials, and events.",
        items: ["Access rules in Misty Cloud", "Gateway and reader visibility", "Event audit"],
      },
    ],
  })),
  ...[
    ["hr-saas", "HR SaaS", "Provision and revoke access from employee lifecycle systems."],
    ["identity-sso", "Identity & SSO", "Connect login, roles, and access policy ownership."],
    ["visitor-software", "Visitor Software", "Issue temporary access from visitor workflows."],
    ["property-ops-apps", "Property & Ops Apps", "Sync access events with building-operation software."],
  ].map(([slug, title, intro]) => ({
    path: `/partners/software/${slug}`,
    category: "Software partner",
    title,
    intro,
    image: "/assets/framer-hero.png",
    highlights: ["Lifecycle automation", "Event sync", "Operator workflows"],
    sections: [
      {
        title: "Software integration",
        body: "Software partner pages describe how business systems can connect with access-control operations.",
        items: ["User lifecycle", "Access event sync", "Role and permission mapping"],
      },
      {
        title: "Access outcome",
        body: "The goal is to reduce manual access work while keeping physical security auditable.",
        items: ["Automated provisioning", "Fast revocation", "Cross-system visibility"],
      },
    ],
  })),
  {
    path: "/partners/become-our-partner",
    category: "Partner program",
    title: "Become our partner",
    intro: "Work with Mistyislet on hardware, software, installation, or channel partnerships.",
    image: "/assets/framer-final.png",
    highlights: ["Hardware", "Software", "Installation"],
    sections: [
      {
        title: "Partner paths",
        body: "The partner program supports teams that help buildings adopt modern access control.",
        items: ["Hardware ecosystem partnerships", "Software and API integrations", "Installation and deployment support"],
      },
      {
        title: "How we work together",
        body: "The goal is to make the whole deployment feel coherent for operators and end users.",
        items: ["Shared deployment planning", "Technical enablement", "Case studies and co-selling"],
      },
    ],
    valueProps: [
      {
        title: "Hardware ecosystem",
        body: "Bring readers, cameras, attendance, biometric, and site hardware into coherent access deployments.",
      },
      {
        title: "Software integrations",
        body: "Connect HR, identity, visitor, property, and operations software to physical access decisions.",
      },
      {
        title: "Deployment partners",
        body: "Help customers plan wiring, commissioning, rollout, training, and long-term support.",
      },
    ],
    metrics: [
      { value: "HW", label: "Readers, cameras, attendance, and biometrics" },
      { value: "API", label: "HR, identity, visitor, and ops integrations" },
      { value: "SI", label: "Installation and channel partners" },
    ],
    specGroups: [
      {
        title: "Good-fit partners",
        rows: [
          { label: "Hardware", value: "Access devices, video security, attendance, biometric, and building hardware vendors" },
          { label: "Software", value: "HR SaaS, identity, SSO, visitor, property, and operations platforms" },
          { label: "Services", value: "Installers, security integrators, managed service providers, and regional channels" },
          { label: "Support", value: "Shared planning, validation, deployment notes, and launch support" },
        ],
      },
    ],
    faqs: [
      {
        question: "What kinds of partners should work with Mistyislet?",
        answer: "Hardware vendors, software platforms, installers, security integrators, and channel partners can all fit when the partnership improves deployment and daily access operations.",
      },
      {
        question: "Do partners need an existing integration before reaching out?",
        answer: "No. A partner conversation can start with a customer use case, an API workflow, a hardware compatibility review, or an installation opportunity.",
      },
    ],
  },
];

export function findSecondaryPage(path: string) {
  const normalizedPath = path.replace(/\/$/, "") || "/";
  return secondaryPages.find((page) => page.path === normalizedPath);
}
