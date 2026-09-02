import type { LucideIcon } from "lucide-react";
import {
  Award,
  BarChart3,
  Brain,
  Gauge,
  LayoutGrid,
  Lightbulb,
  LineChart,
  Settings,
  ShieldCheck,
  Sparkles,
  TestTube2,
  TrendingUp,
} from "lucide-react";

export const statistics: ReadonlyArray<readonly [LucideIcon, string, string]> = [
  [Gauge, "5M", "Smart meter legacy deployments"],
  [TrendingUp, "1M", "Meters per year experience"],
  [TestTube2, "12M+", "Built and design system capacity"],
  [Award, "CMMI Level 3", "Quality assurance"],
];

export const intelligenceLayerItems: ReadonlyArray<
  readonly [LucideIcon, string, string]
> = [
  [
    LineChart,
    "DATA INTELLIGENCE",
    "Structure and contextualise complex utility data for analysis.",
  ],
  [
    LayoutGrid,
    "REAL-TIME VISIBILITY",
    "Surface network conditions, meter events and operational exceptions as data becomes available.",
  ],
  [
    Brain,
    "PREDICTIVE ANALYTICS",
    "Deploy in cloud, on-premise or hybrid environments.",
  ],
  [
    ShieldCheck,
    "OPERATIONAL INTELLIGENCE",
    "Protect meter and consumption data through encryption, access controls and security monitoring.",
  ],
  [
    Sparkles,
    "AI-ASSISTED INTELLIGENCE",
    "Apply analytics and AI to identify risk, prioritise attention and support better-informed decisions.",
  ],
];

export const utilityAnalyticsItems = [
  {
    title: "Meter Data Intelligence",
    description:
      "Turn high-volume smart meter data into trusted, contextualised intelligence for billing, operations and analysis.",
    image: "/meter-data-intelligence.png",
    imageAlt: "Meter data intelligence illustration",
  },
  {
    title: "Grid & Network Analytics",
    description:
      "Analyse network conditions, consumption patterns and events to identify losses, anomalies and areas requiring attention.",
    image: "/grid-network-analytics.png",
    imageAlt: "Grid and network analytics illustration",
  },
  {
    title: "Asset Intelligence",
    description:
      "Understand asset health, loading and performance using meter, network and available asset data. Identify emerging risks and help prioritise maintenance before issues escalate.",
    additionalDescription:
      "The supporting transformer-health material includes loading, thermal stress, voltage imbalance and power-quality indicators as inputs for assessing asset condition and prioritising intervention.",
    image: "/asset-intelligence.png",
    imageAlt: "Asset intelligence illustration",
  },
  {
    title: "Revenue Assurance & Protection",
    description:
      "Analyse consumption, meter events and network context to identify revenue leakage, billing exceptions, non-technical losses and potential theft — helping utilities strengthen revenue assurance and focus revenue protection efforts.",
    image: "/revenue-assurance-protection.png",
    imageAlt: "Revenue assurance illustration",
  },
  {
    title: "Theft & Anomaly Detection",
    description:
      "Detect suspicious consumption patterns, meter tampering and anomalies to help identify higher-risk cases for investigation.",
    image: "/theft-anomaly-detection.png",
    imageAlt: "Theft and anomaly detection illustration",
  },
  {
    title: "Operational Intelligence",
    description:
      "Bring utility data and analytical insights together to help teams identify priorities, investigate exceptions and make better-informed operational decisions.",
    image: "/operational-intelligence.png",
    imageAlt: "Operational intelligence illustration",
  },
] as const;

export const maturitySteps = [
  {
    label: "01 DESCRIPTIVE",
    title: "What happened — and what is happening now?",
    text: "Gain visibility into performance across meters, consumers, assets and the network.",
  },
  {
    label: "02 PREDICTIVE",
    title: "What is likely to happen?",
    text: "Identify patterns, anomalies and emerging risks to anticipate potential issues across revenue, assets and operations.",
    insight: {
      heading: "Predictive Insight",
      body: "Transformer showing elevated loading and asset-health risk.",
      recommendation: "Recommended: Prioritise asset inspection",
      footnote:
        "The transformer-health reference supports this type of risk-based approach through health indices and additional loss-of-life indicators that can be used to rank assets for intervention.",
    },
  },
  {
    label: "03 PRESCRIPTIVE",
    title: "What should we do next?",
    text: "Turn intelligence into recommended actions that help teams prioritise interventions and improve utility outcomes.",
  },
] as const;

export const outcomes: ReadonlyArray<readonly [LucideIcon, string, string]> = [
  [
    Lightbulb,
    "Network Visibility",
    "Gain a clearer view of performance across meters, consumers, assets and the network.",
  ],
  [
    Settings,
    "Revenue Assurance",
    "Identify potential leakage, anomalies and non-technical losses to strengthen revenue protection.",
  ],
  [
    BarChart3,
    "Asset Performance",
    "Identify emerging asset-health risks and prioritise maintenance based on operational conditions.",
  ],
  [
    Gauge,
    "Operational Effort",
    "Focus investigation and field activity on the issues that require attention most.",
  ],
];
