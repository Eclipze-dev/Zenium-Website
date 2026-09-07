import type { LucideIcon } from "@/components/icons/lucideIcons";
import {
  BadgeCheck,
  BellRing,
  Cloud,
  Gauge,
  History,
  Layers,
  LayoutDashboard,
  Network,
  Radio,
  Receipt,
  ShieldCheck,
  Sun,
  TrendingUp,
  BarChart3,
  CircleDollarSign,
  Headphones,
  LockKeyhole,
  Monitor,
} from "@/components/icons/lucideIcons";

export const statistics: ReadonlyArray<
  readonly [LucideIcon, string, string]
> = [
  [Gauge, "5M", "Meter-point MDM deployment"],
  [Network, "Multi-HES", "Platform interoperability"],
  [Radio, "Prepaid billing", "Integrated revenue operations"],
  [LayoutDashboard, "Consumer mobile app", "Connected consumer services"],
];

export const capabilities: ReadonlyArray<
  readonly [LucideIcon, string, string, string?]
> = [
  [
    Layers,
    "Bring meter data together",
    "Manage interval readings, consumption data, load profiles, meter events and historical information within a central, scalable meter-data repository.",
  ],
  [
    BadgeCheck,
    "Power prepaid operations",
    "Support prepaid metering with balance visibility, recharge and payment integration, consumption tracking, low-balance alerts and configurable tariff processing.",
  ],
  [
    Receipt,
    "Deliver a connected consumer mobile app",
    "Give consumers access to consumption information, billing and payment details, prepaid balances, recharge options, alerts and service requests through the Zenium consumer mobile app.",
  ],
  [
    Sun,
    "Validate and complete meter data",
    "Apply configurable Validation, Estimation and Editing rules to identify missing or invalid readings, resolve exceptions and create complete, billing-ready meter data.",
  ],
  [
    BellRing,
    "Prepare data for billing",
    "Transform validated readings through consumption aggregation, time-of-use calculations and billing-determinant processing, with support for post-paid and net-metering models.",
  ],
  [
    History,
    "Make exceptions actionable",
    "Identify VEE failures, missing reads, threshold exceptions and unusual consumption patterns, and generate service orders when operational follow-up is required.",
  ],
];

export const deploymentFeatures: ReadonlyArray<
  readonly [LucideIcon, string, string]
> = [
  [
    TrendingUp,
    "Scalable",
    "Manage expanding meter populations, data volumes and processing requirements.",
  ],
  [
    ShieldCheck,
    "Available",
    "Support critical operational and billing processes through high availability and disaster recovery.",
  ],
  [
    Cloud,
    "Flexible",
    "Deploy in cloud, on-premise or hybrid environments.",
  ],
  [
    LockKeyhole,
    "Secure",
    "Protect meter and consumption data through encryption, access controls and security monitoring.",
  ],
];

export const operationalTeams: ReadonlyArray<
  readonly [LucideIcon, string, string]
> = [
  [
    Monitor,
    "Operations teams",
    "Monitor data collection, meter events, exceptions and system performance.",
  ],
  [
    CircleDollarSign,
    "Revenue teams",
    "Track billing readiness, prepaid operations, consumption exceptions and revenue indicators.",
  ],
  [
    BarChart3,
    "Management teams",
    "Review collection performance, energy losses, load trends and operational summaries.",
  ],
  [
    Headphones,
    "Customer-service teams",
    "Access consumption history, meter status, prepaid balances, recharge information, alerts and service activity.",
  ],
];

export const whoItIsFor = [
  [
    "Utilities and AMISPs",
    "Create a trusted meter-data foundation across billing, operations and analytics.",
  ],
  [
    "Commercial and industrial organisations",
    "Consolidate consumption data across meters, facilities and operating locations.",
  ],
  [
    "Smart cities and microgrids",
    "Manage data from connected and distributed energy infrastructure.",
  ],
  [
    "System integrators",
    "Connect trusted meter data with wider enterprise and utility systems.",
  ],
] as const;

export const measurableValueQuote =
  "HES connects the infrastructure; MDM makes the data trustworthy; Analytics turns it into intelligence.";

export const connectedOperationsItems = [
  "Billing and revenue-management systems",
  "CIS and CRM platforms",
  "Prepayment, recharge and payment applications",
  "Consumer mobile applications and web portals",
  "Workforce and field-service systems",
  "Outage and network-management systems",
  "Analytics platforms",
] as const;

export const integrationTags = [
  "Multiple HES platforms",
  "APIs",
  "CIM/XML",
  "JSON",
  "IEC 61968",
] as const;

export const integrationFooter = "Enterprise service bus integration";

export const analyticsApplications = [
  "Energy audits",
  "Technical and commercial loss analysis",
  "Consumption-pattern analysis",
  "Revenue protection",
  "Load and demand analysis",
  "Feeder and distribution-transformer performance",
  "Outage and reliability analysis",
  "Power-quality monitoring",
  "Net-metering analysis",
  "Demand forecasting",
] as const;

export const analyticsFoundationQuote =
  "Zenium MDM provides the trusted data foundation required to produce consistent and dependable analytics.";
