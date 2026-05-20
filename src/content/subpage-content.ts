export type SecondaryPageSection = {
  title: string;
  body: string;
  items: string[];
};

export type SecondaryPage = {
  path: string;
  category: string;
  title: string;
  intro: string;
  image: string;
  highlights: string[];
  sections: SecondaryPageSection[];
  related: { label: string; href: string }[];
};

const productRelated = [
  { label: "Misty Reader", href: "/product/misty-reader" },
  { label: "Misty Edge Gateway", href: "/product/misty-edge-gateway" },
  { label: "Misty Cloud", href: "/product/misty-cloud" },
];

const solutionRelated = [
  { label: "Cloud SaaS", href: "/solutions/cloud-saas" },
  { label: "Mobile Access Control", href: "/solutions/mobile-access-control" },
  { label: "API Reference", href: "/resources/api-reference" },
];

const resourceRelated = [
  { label: "Docs", href: "/resources/docs" },
  { label: "API Reference", href: "/resources/api-reference" },
  { label: "Deployment Guide", href: "/resources/deployment-guide" },
  { label: "Security Notes", href: "/resources/security-notes" },
];

const partnerRelated = [
  { label: "Hardware partners", href: "/partners/hardware/hikvision" },
  { label: "Software partners", href: "/partners/software/hr-saas" },
  { label: "Become our partner", href: "/partners/become-our-partner" },
];

const useCasePages: SecondaryPage[] = [
  ["factories", "Factories", "Control access across shifts, production zones, and restricted areas."],
  ["coworking", "Coworking", "Manage members, guests, meeting rooms, and shared-space access from the cloud."],
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
  related: solutionRelated,
}));

export const secondaryPages: SecondaryPage[] = [
  {
    path: "/product/misty-reader",
    category: "Hardware",
    title: "Misty Reader",
    intro: "A door reader for NFC, BLE, QR, card, and mobile credential workflows.",
    image: "/assets/framer-final.png",
    highlights: ["NFC and BLE", "QR access", "Mobile credentials"],
    sections: [
      {
        title: "At the door",
        body: "Misty Reader is the user-facing access point for modern buildings and shared spaces.",
        items: ["Supports card and phone-first access", "Works with time-bound visitor credentials", "Designed for reader and gateway deployments"],
      },
      {
        title: "Managed from Misty Cloud",
        body: "Reader behavior is configured from the same cloud console that manages users, doors, and events.",
        items: ["Credential lifecycle controls", "Door-level configuration", "Event visibility after unlock attempts"],
      },
    ],
    related: productRelated,
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
    related: productRelated,
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
    related: productRelated,
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
    related: solutionRelated,
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
    related: solutionRelated,
  },
  ...useCasePages,
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
    related: resourceRelated,
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
    related: resourceRelated,
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
    related: resourceRelated,
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
    related: resourceRelated,
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
    related: partnerRelated,
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
    related: partnerRelated,
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
    related: partnerRelated,
  },
];

export function findSecondaryPage(path: string) {
  const normalizedPath = path.replace(/\/$/, "") || "/";
  return secondaryPages.find((page) => page.path === normalizedPath);
}
