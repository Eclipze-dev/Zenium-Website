import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BarChart3,
  Battery,
  Brain,
  Database,
  Gauge,
  Lamp,
  LayoutDashboard,
  LayoutGrid,
  Network,
  Radio,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import type { ServeAudienceContent } from "./ServeAudienceSections";

export type ServeAudienceId =
  | "utilities"
  | "cities"
  | "commercial"
  | "microgrid"
  | "prosumers";

export const serveAudiences: {
  id: ServeAudienceId;
  label: string;
  href: string;
}[] = [
  { id: "utilities", label: "Utilities", href: "/serve/utilities" },
  { id: "cities", label: "Smart Cities", href: "/serve/cities" },
  { id: "commercial", label: "Commercial & Industrial", href: "/serve/commercial" },
  { id: "microgrid", label: "Microgrids", href: "/serve/microgrid" },
  { id: "prosumers", label: "Prosumers", href: "/serve/prosumers" },
];

export const serveIntro = {
  eyebrow: "WHO WE SERVE",
  title: "Intelligence for a changing",
  accent: "energy ecosystem.",
  description:
    "Zenium helps utilities and energy-intensive organisations turn connected infrastructure and energy data into trusted, actionable intelligence. Zenium helps utilities and energy-intensive organisations turn connected infrastructure and energy data into trusted, actionable intelligence.",
};

export const utilitiesContent = {
  eyebrow: "UTILITIES",
  title: "Intelligence across the",
  accent: "utility value chain.",
  description:
    "Zenium helps electricity, gas and water utilities connect infrastructure, manage trusted data and turn operational signals into actionable intelligence. Built on deep utility-domain expertise and proven smart metering foundations, Zenium brings together HES, MDM and Analytics & AI to support the journey from meter connectivity to intelligent utility operations.",
  heroImage: "/news/news-turning-utility-data.png",
  heroImageAlt:
    "Utility transmission towers with connected smart-grid data network",
  journeyTitle: "From meter data to",
  journeyAccent: "utility intelligence.",
  journeySteps: [
    [
      Radio,
      "Connect",
      "Manage communication with smart meters and connected field devices at scale.",
    ],
    [
      ShieldCheck,
      "Trust",
      "Validate, process and manage high-volume meter data for reliable downstream use.",
    ],
    [
      Sparkles,
      "Understand",
      "Identify patterns, anomalies and operational events across complex utility data.",
    ],
    [
      Brain,
      "Act",
      "Turn intelligence into better-informed operational and commercial decisions.",
    ],
  ] as ReadonlyArray<readonly [LucideIcon, string, string]>,
  solutions: [
    {
      title: "Head-End System (HES)",
      text: "Connect and manage large-scale smart metering infrastructure with secure, interoperable device communication.",
      cta: "Explore HES",
      href: "/solutions/hes",
      variant: "text" as const,
    },
    {
      title: "Meter Data Management (MDM)",
      text: "Transform high-volume meter data into validated, trusted information for billing, operations and enterprise systems.",
      cta: "Explore MDM",
      href: "/solutions/mdm",
      variant: "text" as const,
    },
    {
      title: "Analytics & AI",
      text: "Turn meter, network and operational data into insights for revenue protection, asset health, network visibility and predictive decision-making.",
      cta: "Explore Analytics & AI",
      href: "/solutions/ai-analytics",
      variant: "text" as const,
    },
  ],
  priorities: [
    {
      label: "PUBLIC DISCOMS",
      title: "Modernise at scale. Improve visibility",
      accent: "across complex networks.",
      description:
        "Support large-scale smart metering and AMI transformation programmes with a technology foundation designed for high-volume, multi-vendor utility environments.",
      items: [
        "Large-scale AMI and smart meter operations",
        "Multi-vendor interoperability",
        "Trusted meter data for billing and downstream systems",
        "Revenue protection and loss reduction",
        "Operational and network visibility",
        "Data analytics for anomaly and exception detection",
      ],
    },
    {
      label: "PRIVATE DISCOMS",
      title: "Turn utility data into better",
      accent: "operational and commercial performance.",
      description:
        "Use connected meter and operational data to strengthen visibility, revenue assurance and data-driven decision-making.",
      items: [
        "Reliable and timely meter data",
        "Operational and network visibility",
        "Revenue assurance and anomaly detection",
        "Consumption intelligence",
        "Asset and network performance insights",
        "Predictive analytics for proactive operations",
      ],
    },
  ],
  amiNext: {
    title: "Built for the",
    accent: "next phase of AMI.",
    description:
      "As utilities progress from smart meter deployment towards AMI 2.0, Zenium provides the interoperable data and intelligence foundation needed to move from connectivity to increasingly intelligent utility operations.",
    cta: "Talk to our team",
    href: "/contact",
    variant: "default" as const,
  },
};

export const citiesContent: ServeAudienceContent = {
  eyebrow: "SMART CITIES",
  title: "Intelligence for connected",
  accent: "urban infrastructure.",
  description:
    "Zenium helps cities and infrastructure operators connect distributed assets, manage operational data and build greater visibility across connected urban environments.",
  additionalDescription:
    "Drawing on experience across smart metering and smart streetlighting environments, Zenium provides the data foundation and intelligence needed to support more responsive urban operations.",
  heroImage: "/news/news-data-foundation-intelligent-grid.png",
  heroImageAlt:
    "Urban energy infrastructure with connected digital network overlay",
  capabilitiesTitle: "Connect infrastructure.",
  capabilitiesAccent: "Understand performance.",
  capabilities: [
    [
      Network,
      "Connected infrastructure",
      "Bring distributed devices and infrastructure into a connected data environment.",
    ],
    [
      Lamp,
      "Smart streetlighting",
      "Support connected streetlighting environments with greater visibility into assets, operations and performance.",
    ],
    [
      Database,
      "Data management",
      "Manage growing volumes of data generated by connected urban infrastructure.",
    ],
    [
      LayoutDashboard,
      "Operational visibility",
      "Understand infrastructure status, events and performance across distributed environments.",
    ],
    [
      Sparkles,
      "Event & anomaly detection",
      "Identify unusual conditions and operational events requiring attention.",
    ],
    [
      Brain,
      "Infrastructure intelligence",
      "Apply analytics to connected infrastructure data to support more informed operational decisions.",
    ],
  ] as ReadonlyArray<readonly [LucideIcon, string, string]>,
  cta: {
    title: "From",
    accent: "connectivity to intelligence.",
    description:
      "Depending on the connected infrastructure environment, Zenium's HES and MDM capabilities provide the foundation for device and data management, while Analytics & AI turns that data into operational intelligence.",
    actions: [
      { label: "Explore HES", href: "/solutions/hes", outline: true },
      { label: "Explore MDM", href: "/solutions/mdm", outline: true },
      {
        label: "Explore Analytics & AI",
        href: "/solutions/ai-analytics",
        outline: true,
      },
      { label: "Talk to our team", href: "/contact", outline: false },
    ],
  },
};

export const commercialContent: ServeAudienceContent = {
  eyebrow: "COMMERCIAL & INDUSTRIAL",
  title: "Turn energy data into",
  accent: "business intelligence.",
  description:
    "Zenium helps commercial and industrial organisations gain greater visibility into energy consumption across sites, meters and operations.",
  additionalDescription:
    "By bringing fragmented energy data together and applying analytics, organisations can better understand consumption, identify anomalies and uncover opportunities to improve energy performance.",
  heroImage: "/news/news-making-meter-data-actionable.png",
  heroImageAlt:
    "Commercial energy infrastructure with connected data intelligence overlay",
  capabilitiesTitle: "See where energy goes.",
  capabilitiesAccent: "Understand what drives it.",
  capabilities: [
    [
      BarChart3,
      "Multi-site energy visibility",
      "Create a consolidated view of consumption across facilities and locations.",
    ],
    [
      LayoutGrid,
      "Consumption analytics",
      "Understand usage patterns, peaks and changes over time.",
    ],
    [
      Search,
      "Anomaly detection",
      "Identify unusual energy consumption that may require investigation.",
    ],
    [
      Gauge,
      "Performance benchmarking",
      "Compare energy performance across sites, periods and operating environments.",
    ],
    [
      Zap,
      "Energy optimisation",
      "Identify data-driven opportunities to improve energy performance.",
    ],
    [
      Sparkles,
      "Operational insights",
      "Turn complex energy data into information teams can readily understand and act upon.",
    ],
  ],
  cta: {
    title: "From energy data to",
    accent: "actionable intelligence.",
    description:
      "Zenium Analytics & AI provides the intelligence layer for organisations looking to move beyond basic energy reporting towards deeper visibility and data-driven optimisation.",
    actions: [
      {
        label: "Explore Analytics & AI",
        href: "/solutions/ai-analytics",
        outline: true,
      },
      { label: "Talk to our team", href: "/contact", outline: false },
    ],
  },
};

export const microgridContent: ServeAudienceContent = {
  eyebrow: "MICROGRIDS",
  title: "Intelligence for",
  accent: "distributed energy systems.",
  description:
    "As energy systems become more decentralised, understanding generation, storage, consumption and connected assets becomes increasingly important.",
  additionalDescription:
    "Zenium helps bring distributed energy data together to create greater visibility into energy flows, system behaviour and performance.",
  heroImage: "/news/news-evolution-of-smart-metering.png",
  heroImageAlt:
    "Distributed energy network with connected microgrid intelligence overlay",
  capabilitiesTitle: "Understand the",
  capabilitiesAccent: "complete energy picture.",
  capabilities: [
    [
      Activity,
      "Generation visibility",
      "Understand energy production across distributed generation sources.",
    ],
    [
      LayoutGrid,
      "Consumption intelligence",
      "Analyse how and when energy is being consumed.",
    ],
    [
      Battery,
      "Storage visibility",
      "Bring energy storage data into the broader view of system performance.",
    ],
    [
      Network,
      "Energy flow intelligence",
      "Understand the relationship between generation, storage and consumption.",
    ],
    [
      Search,
      "Anomaly detection",
      "Identify unexpected patterns and operating conditions.",
    ],
    [
      Sparkles,
      "Performance insights",
      "Use historical and operational data to understand performance over time.",
    ],
  ],
  cta: {
    title: "Build intelligence into",
    accent: "distributed energy.",
    description:
      "Zenium Analytics & AI provides the data and intelligence layer needed to understand increasingly complex distributed energy environments.",
    actions: [
      {
        label: "Explore Analytics & AI",
        href: "/solutions/ai-analytics",
        outline: true,
      },
      { label: "Talk to our team", href: "/contact", outline: false },
    ],
  },
};

export const prosumersContent: ServeAudienceContent = {
  eyebrow: "PROSUMERS",
  title: "Intelligence on both",
  accent: "sides of the meter.",
  description:
    "Energy consumers are increasingly becoming energy producers.  Zenium helps organisations bring consumption and generation data together to create a clearer view of their changing energy position.",
  heroImage: "/news/news-smart-metering-beyond-measurement.png",
  heroImageAlt:
    "Two-way energy participation with connected meter intelligence overlay",
  capabilitiesTitle: "Understand what you consume —",
  capabilitiesAccent: "and what you produce.",
  capabilities: [
    [
      BarChart3,
      "Consumption visibility",
      "Understand energy usage patterns across connected meters and assets.",
    ],
    [
      LayoutGrid,
      "Generation visibility",
      "Track energy produced from distributed generation sources.",
    ],
    [
      Network,
      "Import & export intelligence",
      "Build greater visibility into energy moving to and from the wider network.",
    ],
    [
      Sparkles,
      "Energy pattern analysis",
      "Understand changes in consumption and generation over time.",
    ],
    [
      Brain,
      "Performance insights",
      "Use historical and operational data to understand distributed energy performance.",
    ],
  ],
  cta: {
    title: "Ready for a more",
    accent: "participative energy ecosystem.",
    description:
      "As energy systems become increasingly distributed and bidirectional, Zenium Analytics & AI provides the intelligence foundation for understanding more complex relationships between consumption, generation and the wider energy network.",
    actions: [
      {
        label: "Explore Analytics & AI",
        href: "/solutions/ai-analytics",
        outline: true,
        variant: "default",
      },
      { label: "Talk to our team", href: "/contact", outline: false },
    ],
  },
};

export const getServeAudienceIdFromPath = (
  pathname: string,
): ServeAudienceId | null => {
  const match = serveAudiences.find((audience) => pathname === audience.href);
  return match?.id ?? null;
};

export const getServeHeroMedia = (
  audienceId: ServeAudienceId,
): {
  image: string;
  imageAlt: string;
} => {
  const mediaByAudience: Record<
    ServeAudienceId,
    { image: string; imageAlt: string }
  > = {
    utilities: {
      image: utilitiesContent.heroImage,
      imageAlt: utilitiesContent.heroImageAlt,
    },
    cities: {
      image: citiesContent.heroImage,
      imageAlt: citiesContent.heroImageAlt,
    },
    commercial: {
      image: commercialContent.heroImage,
      imageAlt: commercialContent.heroImageAlt,
    },
    microgrid: {
      image: microgridContent.heroImage,
      imageAlt: microgridContent.heroImageAlt,
    },
    prosumers: {
      image: prosumersContent.heroImage,
      imageAlt: prosumersContent.heroImageAlt,
    },
  };

  return mediaByAudience[audienceId];
};
