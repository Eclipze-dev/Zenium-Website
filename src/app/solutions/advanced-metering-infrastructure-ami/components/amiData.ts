import type { LucideIcon } from "@/components/icons/lucideIcons";
import {
  Cable,
  Database,
  Gauge,
  Network,
  Radio,
  ShieldCheck,
} from "@/components/icons/lucideIcons";

export const amiArchitecture: ReadonlyArray<
  readonly [LucideIcon, string, string]
> = [
  [
    Gauge,
    "Smart field devices",
    "Smart meters capture interval load data, events and tamper alerts at the grid edge.",
  ],
  [
    Radio,
    "Multi-technology communication",
    "RF Mesh, Cellular and PLC networks carry bidirectional telemetry between meters and the utility.",
  ],
  [
    Cable,
    "Head-End System (HES)",
    "Device orchestration, protocol translation and remote commands across multi-vendor meter fleets.",
  ],
  [
    Database,
    "Meter Data Management System (MDMS)",
    "Validation, Editing, and Estimation (VEE), billing determinants and trusted enterprise data.",
  ],
];

export const amiCapabilities: ReadonlyArray<
  readonly [LucideIcon, string, string]
> = [
  [
    Network,
    "Hardware-agnostic Advanced Metering Infrastructure (AMI)",
    "Open, pure-play software that works across meter makes and communication technologies without proprietary lock-in.",
  ],
  [
    ShieldCheck,
    "Secure, enterprise-ready operations",
    "Encryption, role-based access and auditability suited to utility-scale Advanced Metering Infrastructure (AMI) programmes.",
  ],
];
