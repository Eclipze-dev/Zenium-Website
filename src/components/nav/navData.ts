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
  { id: "partners", label: "Partners", href: "/partners", mega: false },
  // { id: "resources", label: "Resources", href: "#resources", mega: true },
  { id: "company", label: "Company", href: "#company", mega: true },
  { id: "contact", label: "Contact", href: "/contact", mega: false },
];

export const solutionsLinks: MegaLink[] = [
  {
    title: "HES",
    description:
      "Connect and collect data from smart meters and field devices in real time.",
    href: "/solutions/hes",
    icon: "radio",
  },
  {
    title: "MDM",
    description:
      "Transform high-volume meter data into trusted, usable utility information.",
    href: "/solutions/mdm",
    icon: "database",
  },
  {
    title: "AI & Analytics",
    description:
      "Turn complex utility data into actionable intelligence, predictive insights and better decisions.",
    href: "/solutions/ai-analytics",
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
    title: "Commercial & Industrial",
    description: "Data-driven energy visibility and optimisation.",
    href: "/serve/commercial",
    icon: "factory",
  },
  {
    title: "Smart Cities",
    description: "Intelligent infrastructure for connected urban environments.",
    href: "/serve/cities",
    icon: "globe",
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

// export const partnerLinks: MegaLink[] = [
//   {
//     title: "Meter Manufacturers",
//     description: "Connect meter manufacturing expertise with intelligent utility solutions.",
//     href: "/partners/meter-manufacturers",
//     icon: "factory",
//   },
//   {
//     title: "AMI Service Providers",
//     description: "Deliver connected metering services with the Zenium intelligence platform.",
//     href: "/partners/ami-service-providers",
//     icon: "radio",
//   },
//   {
//     title: "System Integrators",
//     description: "Deliver intelligent utility solutions for your customers.",
//     href: "/partners/system-integrators",
//     icon: "users",
//   },
// ];

// export const resourceLearn: MegaLink[] = [
//   {
//     title: "Case Studies",
//     description: "Explore real-world utility transformation stories.",
//     href: "/resources/case-studies",
//     icon: "file",
//   },
//   {
//     title: "Brochures",
//     description: "Explore Zenium capabilities and solutions.",
//     href: "/resources/brochures",
//     icon: "book",
//   },
//   {
//     title: "Whitepapers",
//     description: "Deep insights into utility technology and analytics.",
//     href: "/resources/whitepapers",
//     icon: "fileText",
//   },
// ];

// export const resourceInsights: MegaLink[] = [
//   {
//     title: "Blogs & Insights",
//     description: "Ideas, trends and perspectives on intelligent utilities.",
//     href: "/resources/blogs-insights",
//     icon: "lightbulb",
//   },
//   {
//     title: "Webinars",
//     description: "Expert discussions on utility data, analytics and transformation.",
//     href: "/resources/webinars",
//     icon: "play",
//   },
// ];

export const companyAbout: MegaLink[] = [
  {
    title: "About Zenium",
    description: "Learn about Zenium and our vision for intelligent utilities.",
    href: "/company/about",
    icon: "info",
  },
  {
    title: "Leadership",
    description: "Meet the people shaping the company.",
    href: "/company/leadership",
    icon: "user",
  },
];

export const companyConnect: MegaLink[] = [
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

export const mobileSolutions = [
  {
    title: "HES",
    description: "Connect and collect smart-meter data.",
    href: "/solutions/hes",
  },
  {
    title: "MDM",
    description: "Transform meter data into trusted utility information.",
    href: "/solutions/mdm",
  },
  {
    title: "AI & Analytics",
    description: "Turn complex utility data into actionable intelligence.",
    href: "/solutions/ai-analytics",
  },
];
