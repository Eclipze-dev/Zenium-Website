import type { LucideIcon } from "lucide-react";
import {
  Award,
  Gauge,
  Layers,
  Puzzle,
  Radio,
  ShieldCheck,
  TestTube2,
} from "lucide-react";

export const statistics: ReadonlyArray<readonly [LucideIcon, string, string]> = [
  [Gauge, "5M", "Smart meter legacy deployments"],
  [Layers, "1M", "Meters per year experience"],
  [TestTube2, "12M+", "Built and design system capacity"],
  [Award, "CMMI Level 3", "Quality assurance"],
];

export const whySteps = [
  {
    label: "CONNECT",
    title: "Built on utility experience",
    text: "Our technology and product knowledge were developed through years of work in utility transformation and advanced metering.",
    icon: Radio,
    image: "/image.png",
    imageAlt: "Utility network infrastructure at dusk",
  },
  {
    label: "INTEGRATE",
    title: "Open by design",
    text: "Integrate different meter makes, HES platforms, communication technologies and utility applications through standards-based interfaces.",
    icon: Puzzle,
    image: "/image.png",
    imageAlt: "Connected energy network integration",
  },
  {
    label: "SCALE",
    title: "Ready to scale",
    text: "Support growing meter populations and data volumes through flexible cloud, on-premise or hybrid deployment.",
    icon: Layers,
    image: "/image.png",
    imageAlt: "Scalable utility data platform",
  },
  {
    label: "OPERATE",
    title: "Structured for quality",
    text: "CMMI Level 3 certified processes provide a disciplined foundation for product development, integration and delivery.",
    icon: ShieldCheck,
    image: "/image.png",
    imageAlt: "Quality-driven utility operations",
  },
] as const;

export const partnerWithItems = [
  {
    title: "AMISPs",
    description:
      "Add interoperable HES and MDM technology to large-scale AMI programmes, supported by product, integration and bid expertise.",
  },
  {
    title: "Meter manufacturers",
    description:
      "Connect different meter portfolios to an open HES environment and demonstrate interoperability across smart-metering programmes.",
  },
  {
    title: "System integrators",
    description:
      "Integrate Zenium HES and MDM with billing, CIS, CRM, consumer platforms and other utility applications.",
  },
] as const;

export const amispSupportParagraphs = [
  "Zenium supports AMISPs with product specifications, solution architecture, compliance mapping, technical demonstrations and interoperability testing.",
  "The HES and MDM technology that continues within Zenium has been used by AMISPs during the REC empanelment process for AMI programmes in India.",
  "As AMI evolves beyond meter connectivity and billing, Zenium provides the connected and trusted data foundation needed to support analytics and emerging AMI 2.0 use cases.",
] as const;

export const amispSupportTags = [
  "Requirements",
  "Architecture",
  "Compliance",
  "Demonstration",
  "Integration",
] as const;

export const connectedByDesignTags = [
  "Multi-vendor meters",
  "Multiple HES platforms",
  "DLMS/COSEM",
  "IS 15959",
  "APIs",
  "CIM/XML",
  "JSON",
  "IEC 61968",
] as const;
