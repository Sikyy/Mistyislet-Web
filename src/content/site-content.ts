import {
  Activity,
  Cloud,
  CreditCard,
  History,
  Lock,
  Network,
  QrCode,
  Router,
  Server,
  Settings,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  menu?: NavMegaMenu;
};

export type NavMenuLink = {
  label: string;
  href: string;
  body?: string;
};

export type NavMenuColumn = {
  heading: string;
  links: NavMenuLink[];
};

export type NavMenuFeature = {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  image: string;
};

export type NavMegaMenu = {
  columns: NavMenuColumn[];
  features: NavMenuFeature[];
};

export type IconCard = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export type Step = {
  step: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

export type Partner = {
  name: string;
  title: string;
  body: string;
};

export type PricingPlan = {
  name: string;
  badge?: string;
  monthlyPrice: string;
  yearlyPrice: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const primaryCta = "Preview";

export const navItems: NavItem[] = [
  {
    label: "Product",
    href: "/#product",
    menu: {
      columns: [
        {
          heading: "Hardware",
          links: [
            { label: "Misty Reader", href: "/product/misty-reader", body: "NFC, BLE, QR, and card access at the door." },
            { label: "Misty Edge Gateway", href: "/product/misty-edge-gateway", body: "Local rules, offline unlocks, and event sync." },
          ],
        },
        {
          heading: "Platform",
          links: [
            { label: "Misty Cloud", href: "/product/misty-cloud", body: "Manage sites, doors, people, credentials, and events." },
          ],
        },
      ],
      features: [
        {
          eyebrow: "Product stack",
          title: "Reader, edge gateway, and cloud",
          body: "A focused access-control stack for modern building deployments.",
          href: "/product/misty-reader",
          image: "/assets/framer-final.png",
        },
      ],
    },
  },
  {
    label: "Solutions",
    href: "/#solutions",
    menu: {
      columns: [
        {
          heading: "Core solutions",
          links: [
            { label: "Cloud SaaS", href: "/solutions/cloud-saas", body: "Central access management for every site." },
            { label: "Mobile Access Control", href: "/solutions/mobile-access-control", body: "Phone-first credentials for staff, tenants, and visitors." },
          ],
        },
        {
          heading: "Use cases",
          links: [
            { label: "Factories", href: "/use-cases/factories" },
            { label: "Coworking", href: "/use-cases/coworking" },
            { label: "Fitness & Gyms", href: "/use-cases/fitness-gyms" },
            { label: "Office Buildings", href: "/use-cases/office-buildings" },
            { label: "Schools", href: "/use-cases/schools" },
            { label: "Hospitals", href: "/use-cases/hospitals" },
          ],
        },
      ],
      features: [
        {
          eyebrow: "Solutions",
          title: "Cloud access with mobile credentials",
          body: "Keep the operator workflow simple while doors stay responsive at the edge.",
          href: "/solutions/cloud-saas",
          image: "/assets/framer-final.png",
        },
      ],
    },
  },
  {
    label: "Resources",
    href: "/#resources",
    menu: {
      columns: [
        {
          heading: "Build",
          links: [
            { label: "Docs", href: "/resources/docs", body: "Product concepts, setup notes, and release guides." },
            { label: "API Reference", href: "/resources/api-reference", body: "Doors, credentials, events, users, and webhooks." },
          ],
        },
        {
          heading: "Learn",
          links: [
            { label: "Deployment Guide", href: "/resources/deployment-guide", body: "Reader placement, gateway wiring, and launch steps." },
            { label: "Security Notes", href: "/resources/security-notes", body: "Credential lifecycle, roles, audit, and revocation controls." },
          ],
        },
      ],
      features: [
        {
          eyebrow: "Resources",
          title: "Docs and APIs without the clutter",
          body: "Find the core technical references for planning, integrating, and operating Mistyislet.",
          href: "/resources/docs",
          image: "/assets/framer-final.png",
        },
      ],
    },
  },
  {
    label: "Partners",
    href: "/#partners",
    menu: {
      columns: [
        {
          heading: "Hardware partners",
          links: [
            { label: "Hikvision", href: "/partners/hardware/hikvision", body: "Camera and building-security hardware ecosystem." },
            { label: "ZKTeco", href: "/partners/hardware/zkteco", body: "Access-control terminals, readers, and site hardware." },
            { label: "Fingerspot", href: "/partners/hardware/fingerspot", body: "Attendance and access hardware for regional deployments." },
            { label: "Suprema", href: "/partners/hardware/suprema", body: "Biometric readers and enterprise access hardware." },
          ],
        },
        {
          heading: "Software partners",
          links: [
            { label: "HR SaaS", href: "/partners/software/hr-saas", body: "Provision and revoke access from employee lifecycle systems." },
            { label: "Identity & SSO", href: "/partners/software/identity-sso", body: "Connect login, roles, and access policy ownership." },
            { label: "Visitor Software", href: "/partners/software/visitor-software", body: "Issue temporary access from visitor workflows." },
            { label: "Property & Ops Apps", href: "/partners/software/property-ops-apps", body: "Sync access events with building-operation software." },
          ],
        },
        {
          heading: "Partner program",
          links: [
            {
              label: "Become our partner",
              href: "/partners/become-our-partner",
              body: "Work with Mistyislet on hardware, software, installation, or channel partnerships.",
            },
          ],
        },
      ],
      features: [
        {
          eyebrow: "Partners",
          title: "Hardware and software around the door",
          body: "Build a partner ecosystem that connects readers, cameras, HR data, identity, visitors, and operations.",
          href: "/partners/become-our-partner",
          image: "/assets/framer-final.png",
        },
      ],
    },
  },
  { label: "Pricing", href: "/pricing" },
];

export const hero = {
  brand: "Mistyislet",
  heading: "Every door, quietly in control.",
  body: "Cloud access control for readers, edge gateways, mobile credentials, and every place you operate.",
  cta: primaryCta,
};

export const productCards: IconCard[] = [
  {
    title: "Misty Reader",
    body: "NFC, BLE, QR, and mobile credentials at the door, ready for modern access workflows.",
    icon: CreditCard,
  },
  {
    title: "Misty Edge Gateway",
    body: "Local decisions, offline cache, device heartbeat, and event sync for every connected door.",
    icon: Router,
  },
  {
    title: "Misty Cloud",
    body: "Manage sites, doors, users, credentials, access rules, and audit events from one cloud console.",
    icon: Cloud,
  },
];

export const solutionTabs: IconCard[] = [
  {
    title: "Cloud SaaS",
    body: "Centralize sites, doors, people, groups, schedules, credentials, and events in one browser-based console.",
    icon: Cloud,
  },
  {
    title: "Mobile Access",
    body: "Turn phones into secure credentials with NFC, BLE, QR, and time-bound passes for tenants, staff, and visitors.",
    icon: Smartphone,
  },
  {
    title: "Access Integrations",
    body: "Connect identity, HR, visitor workflows, and building systems through APIs and event webhooks.",
    icon: Network,
  },
  {
    title: "Visitor Access",
    body: "Send temporary QR or mobile passes, set schedules, and audit every visit from invite to unlock.",
    icon: QrCode,
  },
];

export const steps: Step[] = [
  {
    step: "1",
    title: "Configure",
    body: "Create places, doors, users, groups, and time-based access rules in the cloud.",
    icon: Settings,
  },
  {
    step: "2",
    title: "Present",
    body: "Users unlock with mobile credentials, NFC cards, QR passes, or reader events at the door.",
    icon: ShieldCheck,
  },
  {
    step: "3",
    title: "Audit",
    body: "Gateways sync decisions and events back to the console for real-time review.",
    icon: Activity,
  },
];

export const benefits: IconCard[] = [
  {
    title: "Mobile Credentials",
    body: "Phone-first access without plastic-card bottlenecks.",
    icon: Smartphone,
  },
  {
    title: "Offline Ready",
    body: "Gateways keep access decisions available when the network is unstable.",
    icon: Server,
  },
  {
    title: "Real-time Revocation",
    body: "Remove access instantly when roles, tenants, or risk changes.",
    icon: Lock,
  },
  {
    title: "Centralized Events",
    body: "Search door events, credential use, and admin actions in one timeline.",
    icon: History,
  },
  {
    title: "Hardware Visibility",
    body: "Monitor readers, gateways, and door health before issues reach users.",
    icon: Activity,
  },
  {
    title: "Built-in Trust",
    body: "Least-privilege roles, audit trails, and secure credential lifecycle controls.",
    icon: ShieldCheck,
  },
];

export const partners: Partner[] = [
  {
    name: "Hardware partners",
    title: "Hikvision, ZKTeco, Fingerspot, Suprema",
    body: "Reader, camera, attendance, and biometric hardware partners help Mistyislet fit into real buildings without forcing one rigid stack.",
  },
  {
    name: "Software partners",
    title: "HR SaaS, identity, visitor, and operations software",
    body: "Software partners connect access decisions with employee lifecycle, SSO roles, visitor workflows, and daily building operations.",
  },
  {
    name: "Integrator network",
    title: "Deployment and on-site commissioning support",
    body: "Installation partners help plan wiring, reader placement, gateway commissioning, handover, and support for each site.",
  },
  {
    name: "Become our partner",
    title: "Hardware, software, installation, and channel partnerships",
    body: "Partner with Mistyislet to package software, hardware, and service into clearer deployment paths for real building operators.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Pilot",
    monthlyPrice: "Custom /quote",
    yearlyPrice: "Custom /quote",
    description: "Validate one site with core cloud access, mobile credentials, and gateway setup.",
    features: ["Cloud console", "Reader and gateway setup", "Mobile credential pilot"],
  },
  {
    name: "Building",
    badge: "Popular",
    monthlyPrice: "€29 /door/mo",
    yearlyPrice: "€29 /door/mo",
    description: "Operate doors, users, groups, schedules, and real-time events for one property.",
    features: [
      "Doors, users, schedules",
      "Live event search",
      "Admin roles and audit trails",
      "API/webhook basics",
      "Support for launch",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    description: "Multi-site controls, integration support, dedicated onboarding, and security review.",
    features: [
      "Multi-site governance",
      "Integration support",
      "Security review",
      "Dedicated onboarding",
      "Custom hardware rollout",
    ],
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Can Mistyislet work with existing readers and controllers?",
    answer:
      "Mistyislet is designed for modern reader and gateway deployments, with integration planning for compatible existing building hardware.",
  },
  {
    question: "Does the edge gateway keep doors working offline?",
    answer:
      "Yes. The edge gateway keeps local access rules and event queues so doors can continue working during network interruptions.",
  },
  {
    question: "Which mobile credentials are supported?",
    answer:
      "Mobile passes can be issued for NFC, BLE, and QR workflows, alongside cards where a site still needs them.",
  },
  {
    question: "Can we integrate with HR, SSO, or SCIM?",
    answer:
      "Yes. APIs and webhooks connect access events and users with HR, identity, visitor, and operations systems; SSO and SCIM can be scoped for enterprise rollouts.",
  },
  {
    question: "How are access events audited?",
    answer:
      "Door events, credential usage, admin changes, and revocations are stored in the cloud console for search and review.",
  },
  {
    question: "How do pricing and hardware deployment work?",
    answer:
      "Pricing is quoted by site size, door count, hardware scope, integrations, and support needs so pilots can start small.",
  },
];

export const finalCta = {
  heading: "Preview the access-control stack",
  body: "See how cloud rules, edge gateways, readers, and mobile credentials work together.",
  cta: primaryCta,
};

export const footer = {
  brand: "Mistyislet",
  body: "Cloud access control for modern places.",
  copyright: "© 2026 Mistyislet | All rights reserved.",
  navItems,
  socials: [] as { label: string; href: string }[],
};
