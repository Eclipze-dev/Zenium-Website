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
  | "newspaper";

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
  { id: "who-we-serve", label: "Who We Serve", href: "#who-we-serve", mega: true },
  { id: "partners", label: "Partners", href: "#partners", mega: true },
  { id: "resources", label: "Resources", href: "#resources", mega: true },
  { id: "company", label: "Company", href: "#company", mega: true },
  { id: "contact", label: "Contact", href: "#contact", mega: false },
];

export const solutionsLinks: MegaLink[] = [
  {
    title: "AI & Analytics",
    description:
      "Turn complex utility data into actionable intelligence, predictive insights and better decisions.",
    href: "#solutions",
    icon: "sparkles",
  },
  {
    title: "HES",
    description:
      "Connect and collect data from smart meters and field devices in real time.",
    href: "#solutions",
    icon: "radio",
  },
  {
    title: "MDM",
    description:
      "Transform high-volume meter data into trusted, usable utility information.",
    href: "#solutions",
    icon: "database",
  },
];

export const industryLinks: MegaLink[] = [
  {
    title: "Utilities",
    description: "Intelligence for modern utility operations.",
    href: "#who-we-serve",
    icon: "zap",
  },
  {
    title: "Enterprise",
    description: "Connected intelligence for complex energy environments.",
    href: "#who-we-serve",
    icon: "building",
  },
  {
    title: "Commercial & Industrial",
    description: "Data-driven energy visibility and optimisation.",
    href: "#who-we-serve",
    icon: "factory",
  },
  {
    title: "Smart Cities",
    description: "Intelligent infrastructure for connected urban environments.",
    href: "#who-we-serve",
    icon: "globe",
  },
  {
    title: "Microgrids",
    description: "Visibility and intelligence for distributed energy systems.",
    href: "#who-we-serve",
    icon: "network",
  },
  {
    title: "Prosumers",
    description: "Insights for organisations producing and consuming energy.",
    href: "#who-we-serve",
    icon: "cpu",
  },
];

export const partnerLinks: MegaLink[] = [
  {
    title: "Why Partner with Zenium",
    description: "Unlock growth, innovation and customer impact together.",
    href: "#partners",
    icon: "handshake",
  },
  {
    title: "Technology Partners",
    description: "Integrate and co-innovate with the Zenium intelligence platform.",
    href: "#partners",
    icon: "puzzle",
  },
  {
    title: "System Integrators",
    description: "Deliver intelligent utility solutions for your customers.",
    href: "#partners",
    icon: "users",
  },
];

export const resourceLearn: MegaLink[] = [
  {
    title: "Case Studies",
    description: "Explore real-world utility transformation stories.",
    href: "#resources",
    icon: "file",
  },
  {
    title: "Brochures",
    description: "Explore Zenium capabilities and solutions.",
    href: "#resources",
    icon: "book",
  },
  {
    title: "Whitepapers",
    description: "Deep insights into utility technology and analytics.",
    href: "#resources",
    icon: "fileText",
  },
];

export const resourceInsights: MegaLink[] = [
  {
    title: "Blogs & Insights",
    description: "Ideas, trends and perspectives on intelligent utilities.",
    href: "#resources",
    icon: "lightbulb",
  },
  {
    title: "Webinars",
    description: "Expert discussions on utility data, analytics and transformation.",
    href: "#resources",
    icon: "play",
  },
];

export const companyAbout: MegaLink[] = [
  {
    title: "About Zenium",
    description: "Learn about Zenium and our vision for intelligent utilities.",
    href: "#company",
    icon: "info",
  },
  {
    title: "Leadership",
    description: "Meet the people shaping the company.",
    href: "#company",
    icon: "user",
  },
];

export const companyConnect: MegaLink[] = [
  {
    title: "Careers",
    description: "Join the team building intelligent utility technology.",
    href: "#company",
    icon: "briefcase",
  },
  {
    title: "News & Events",
    description: "Explore the latest Zenium updates and events.",
    href: "#company",
    icon: "newspaper",
  },
];

export const mobileSolutions = [
  {
    title: "AI & Analytics",
    description: "Turn complex utility data into actionable intelligence.",
    href: "#solutions",
  },
  {
    title: "HES",
    description: "Connect and collect smart-meter data.",
    href: "#solutions",
  },
  {
    title: "MDM",
    description: "Transform meter data into trusted utility information.",
    href: "#solutions",
  },
];
