import {
  SOLUTION_PATHS,
  GUIDE_PATH,
  CALCULATOR_PATH,
  BLOG_INDEX_PATH,
} from "@/lib/seo/paths";

export type MegaId =
  | "solutions"
  | "who-we-serve"
  | "partners"
  | "resources"
  | "company";

export type IconKey =
  | "sparkles"
  | "radio"
  | "database"
  | "zap"
  | "building"
  | "factory"
  | "globe"
  | "network"
  | "cpu"
  | "handshake"
  | "puzzle"
  | "users"
  | "file"
  | "book"
  | "fileText"
  | "lightbulb"
  | "play"
  | "info"
  | "user"
  | "briefcase"
  | "newspaper"
  | "gauge";

export type NavItem = {
  id: MegaId | "contact";
  label: string;
  href: string;
  mega: boolean;
};

export type MegaLink = {
  title: string;
  description: string;
  href: string;
  icon: IconKey;
};

export const primaryNav: NavItem[] = [
  { id: "solutions", label: "Solutions", href: "#solutions", mega: true },
  { id: "who-we-serve", label: "Who We Serve", href: "/serve", mega: true },
  { id: "partners", label: "Partners", href: "/partners", mega: false },
  { id: "resources", label: "Resources", href: "#resources", mega: true },
  { id: "company", label: "Company", href: "#company", mega: true },
  { id: "contact", label: "Contact", href: "/contact", mega: false },
];

export const solutionsLinks: MegaLink[] = [
  {
    title: "Advanced Metering Infrastructure (AMI)",
    description:
      "Hardware-agnostic AMI software for smart grid distribution utilities.",
    href: SOLUTION_PATHS.ami,
    icon: "network",
  },
  {
    title: "Head-End System (HES)",
    description:
      "Connect and collect data from smart meters and field devices in real time.",
    href: SOLUTION_PATHS.hes,
    icon: "radio",
  },
  {
    title: "Meter Data Management System (MDMS)",
    description:
      "Transform high-volume meter data into trusted, usable utility information.",
    href: SOLUTION_PATHS.mdms,
    icon: "database",
  },
  {
    title: "Energy Management & Analytics",
    description:
      "Transformer load profiling, loss analytics and smart grid intelligence.",
    href: SOLUTION_PATHS.analytics,
    icon: "sparkles",
  },
];

export const industryLinks: MegaLink[] = [
  {
    title: "Utilities",
    description: "Intelligence for modern utility operations.",
    href: "/serve/utilities",
    icon: "zap",
  },
  {
    title: "Smart Cities",
    description: "Intelligent infrastructure for connected urban environments.",
    href: "/serve/cities",
    icon: "globe",
  },
  {
    title: "Commercial & Industrial",
    description: "Data-driven energy visibility and optimisation.",
    href: "/serve/commercial",
    icon: "factory",
  },
  {
    title: "Microgrids",
    description: "Visibility and intelligence for distributed energy systems.",
    href: "/serve/microgrid",
    icon: "network",
  },
  {
    title: "Prosumers",
    description: "Insights for organisations producing and consuming energy.",
    href: "/serve/prosumers",
    icon: "cpu",
  },
];

export const resourceLearn: MegaLink[] = [
  {
    title: "How to Read a Smart Meter Display",
    description: "Understand common smart meter display codes and readings.",
    href: GUIDE_PATH,
    icon: "book",
  },
  {
    title: "Watts to kWh Calculator",
    description: "Convert power and usage time into kilowatt-hours and units.",
    href: CALCULATOR_PATH,
    icon: "gauge",
  },
];

export const resourceInsights: MegaLink[] = [
  {
    title: "Blogs & Insights",
    description: "Ideas, trends and perspectives on intelligent utilities.",
    href: BLOG_INDEX_PATH,
    icon: "lightbulb",
  },
];

export const companyAbout: MegaLink[] = [
  {
    title: "About Zenium",
    description: "Learn about Zenium and our vision for intelligent utilities.",
    href: "/company/about",
    icon: "info",
  },
  {
    title: "Careers",
    description: "Join the team building intelligent utility technology.",
    href: "/company/careers",
    icon: "briefcase",
  },
  {
    title: "News & Events",
    description: "Explore the latest Zenium updates and events.",
    href: "/company/news",
    icon: "newspaper",
  },
];

export const companyConnect: MegaLink[] = [];

export const mobileSolutions = solutionsLinks.map(({ title, description, href }) => ({
  title,
  description,
  href,
}));
