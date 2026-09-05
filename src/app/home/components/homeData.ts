import type { LucideIcon } from "@/components/icons/lucideIcons";
import {
  Award,
  BookOpen,
  Brain,
  Building2,
  Cloud,
  Database,
  Factory,
  FileText,
  Gauge,
  Globe2,
  Lamp,
  Layers,
  LayoutDashboard,
  Lightbulb,
  Network,
  Puzzle,
  Radio,
  Server,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Unlock,
  Zap,
} from "@/components/icons/lucideIcons";

export const journey = [
  {
    label: "CONNECT",
    title: "Smart Meters + HES",
    text: "Connect and acquire data across diverse meter and communication environments.",
    icon: Radio,
  },
  {
    label: "MANAGE",
    title: "MDM - Meter Data Management",
    text: "Validate, manage and create a trusted foundation from high-volume meter data.",
    icon: Database,
  },
  {
    label: "UNDERSTAND",
    title: "Analytics & AI",
    text: "Turn trusted utility data into meaningful insights and visibility.",
    icon: Sparkles,
  },
  {
    label: "ACT",
    title: "Utility Intelligence",
    text: "Build toward smarter decisions, proactive operations and intelligent utility management.",
    icon: Brain,
  },
];

export const capabilities: ReadonlyArray<
  readonly [LucideIcon, string, string]
> = [
  [
    Unlock,
    "Open by Design",
    "Built on open technologies to support flexibility, extensibility and reduced vendor dependency.",
  ],
  [
    Network,
    "Interoperable",
    "Designed to work across multiple HES platforms, meter makes and utility environments.",
  ],
  [
    Cloud,
    "Cloud Flexible",
    "Supports cloud, on-premise and hybrid deployment models.",
  ],
  [
    Layers,
    "Built to Evolve",
    "Microservices-based and containerized architecture designed for modular development and scale.",
  ],
  [
    ShieldCheck,
    "Secure by Design",
    "Security built into the technology architecture and deployment approach.",
  ],
  [
    LayoutDashboard,
    "Operational Visibility",
    "Customizable dashboards, widgets and visualizations help utility teams monitor what matters.",
  ],
];

export const audiences = [
  [
    "Utilities",
    "Build the digital foundation for smarter metering, data management and utility operations.",
    Radio,
  ],
  [
    "Commercial & Industrial",
    "Gain greater visibility into energy data, consumption and operational performance.",
    Zap,
  ],
  [
    "Smart Cities",
    "Enable connected, data-driven infrastructure across energy and municipal environments.",
    Globe2,
  ],
  [
    "Microgrids",
    "Support increasingly distributed and interconnected energy environments.",
    Network,
  ],
  [
    "Prosumers",
    "Enable greater visibility and intelligence across two-way energy participation.",
    Gauge,
  ],
] as const;

export const partners: ReadonlyArray<
  readonly [LucideIcon, string, string]
> = [
  [
    Factory,
    "Meter Manufacturers",
    "Connect Zenium technology with diverse metering ecosystems.",
  ],
  [
    Building2,
    "AMI Service Providers",
    "Combine Zenium technology capabilities with AMI implementation and operational expertise.",
  ],
  [
    Puzzle,
    "System Integrators",
    "Bring together Zenium technology, integration expertise and large-scale implementation capabilities.",
  ],
];

export const resources = [
  {
    type: "CASE STUDY",
    title: "Punjab: Building a Smarter Utility Ecosystem",
    text: "How Zenium brings together utility data, systems and intelligence to improve visibility, reliability and operational decision-making.",
    cta: "Read Case Study",
    icon: FileText,
    action: "read",
  },
  {
    type: "WHITEPAPER",
    title: "Modernising Utilities: From Data to Intelligence",
    text: "Explore the technologies, architecture and strategies enabling utilities to build scalable, interoperable and future-ready digital ecosystems.",
    cta: "Download Whitepaper",
    icon: BookOpen,
    action: "download",
  },
  {
    type: "INSIGHT",
    title: "Why Utility Intelligence Starts with Connected Data",
    text: "A practical perspective on turning fragmented utility data into actionable intelligence for better planning, faster decisions and stronger operations.",
    cta: "Read Insight",
    icon: Lightbulb,
    action: "read",
  },
];

export const heroPhrases = [
  "Connect every meter.",
  "Trust every data point.",
  "Understand what matters.",
  "Act with intelligence.",
];

export const metrics: ReadonlyArray<
  readonly [LucideIcon, string, string]
> = [
  [Gauge, "5 Million", "Meter-point MDM deployment"],
  [Radio, "2 Million+", "Meters onboarded"],
  [Server, "1 Million", "Meter-point HES deployment"],
  [TestTube2, "12 Million+", "Simulated DLMS meters tested"],
  [Lamp, "12 Cities", "Smart-streetlight implementations"],
];

export const indiaBuiltFeatures = [
  {
    b: "Make in India",
    em: "Built in India. Built for India's utility ecosystem.",
    p: "Enterprise-grade utility technology engineered, developed, and delivered from India.",
    icon: Award,
  },
  {
    b: "CMMI Level 3",
    em: "Engineering and delivery built for enterprise requirements.",
    p: "Proven process maturity aligned with the demands of large-scale technology delivery.",
    icon: ShieldCheck,
  },
  {
    b: "Data & Security",
    em: "Designed for cloud, on-premise, and hybrid utility environments.",
    p: "Secure data management and deployment designed to meet evolving requirements.",
    icon: Layers,
  },
] as const;
