import type { LucideIcon } from "@/components/icons/lucideIcons";
import {
  BellRing,
  Cable,
  Cloud,
  Download,
  Gauge,
  LockKeyhole,
  Monitor,
  Settings,
  Share2,
  ShieldCheck,
  TestTube2,
  Timer,
  TrendingUp,
} from "@/components/icons/lucideIcons";

export const statistics: ReadonlyArray<
  readonly [LucideIcon, string, string]
> = [
  [Gauge, "1M", "Meter-point HES deployment"],
  [TestTube2, "12M+", "Simulated DLMS meters tested"],
  [Share2, "Multi-vendor", "Meter interoperability"],
  [Timer, "Under 30 seconds", "Critical tamper and alert reporting"],
];

export const capabilities: ReadonlyArray<
  readonly [LucideIcon, string, string, string?]
> = [
  [
    Cable,
    "Connect across meter environments",
    "Integrate different meter makes, communication technologies and deployment models through an open, interoperable Head-End System.",
  ],
  [
    Download,
    "Acquire data reliably",
    "Automate interval, scheduled and on-demand meter-data collection while identifying missing reads, failed communications and other data-acquisition exceptions.",
  ],
  [
    Settings,
    "Manage meters remotely",
    "Configure devices, synchronise time, update firmware and execute authorised connect or disconnect commands from a central system. Configurable approval workflows provide additional control over sensitive operations.",
  ],
  [
    BellRing,
    "Respond to events faster",
    "Bring tamper alerts, power outages, restoration events, communication failures and other critical conditions to the attention of operational teams.",
    "Zenium HES can report critical tamper and alert events in under 30 seconds, supporting faster investigation and response.",
  ],
  [
    Monitor,
    "Monitor the network",
    "Track meter connectivity, communication history, device health and data availability through operational dashboards and exception reports.",
  ],
  [
    LockKeyhole,
    "Protect data from the source",
    "Secure meter data and operational commands through encryption, authentication, access controls, data-integrity checks and audit trails.",
  ],
];

export const deploymentFeatures: ReadonlyArray<
  readonly [LucideIcon, string, string]
> = [
  [
    TrendingUp,
    "Scalable",
    "Expand meter populations and data volumes without redesigning the operating model.",
  ],
  [
    ShieldCheck,
    "Available",
    "Support continuous operations through high availability, load balancing and failover.",
  ],
  [
    Cloud,
    "Flexible",
    "Deploy in cloud, on-premise or hybrid environments.",
  ],
  [
    LockKeyhole,
    "Secure",
    "Protect meter data and commands through controlled access, encryption and auditability.",
  ],
];

export const interoperabilityItems = [
  "Multi-vendor meters",
  "DLMS/COSEM",
  "IS 15959",
  "APIs",
  "CIM/XML",
  "JSON",
  "IEC 61968",
] as const;

export const audiences = [
  ["Utilities", "Gain a reliable operational view across smart-meter infrastructure."],
  ["AMISPs", "Deploy a scalable and interoperable HES for large smart-metering programmes."],
  [
    "Meter manufacturers",
    "Integrate different meter portfolios within a multi-vendor environment.",
  ],
  [
    "System integrators",
    "Connect smart-meter infrastructure with MDM, billing and wider utility systems.",
  ],
] as const;
