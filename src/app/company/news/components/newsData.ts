export const newsFilters = [
  { id: "all", label: "All" },
  { id: "insights", label: "Insights" },
  { id: "company", label: "Company" },
  { id: "industry", label: "Industry" },
  { id: "events", label: "Events" },
] as const;

export type NewsFilterId = (typeof newsFilters)[number]["id"];

export type NewsCategory = Exclude<NewsFilterId, "all">;

export type NewsItem = {
  id: string;
  category: NewsCategory;
  label: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  href: string;
};

export const newsIntro = {
  eyebrow: "NEWS & INSIGHTS",
  title: "Intelligence worth",
  accent: "paying attention to.",
  description:
    "Perspectives, developments and ideas shaping the future of intelligent utility management.",
};

export const newsItems: NewsItem[] = [
  {
    id: "turning-utility-data",
    category: "insights",
    label: "FEATURED INSIGHTS",
    title: "Turning Utility Data Into Intelligent Action",
    description:
      "Utilities generate enormous volumes of data every day — from smart meters, field devices, network systems and enterprise applications.",
    cta: "Read Insight",
    image: "/news/news-turning-utility-data.png",
    href: "/company/news/turning-utility-data-into-intelligent-action",
  },
  {
    id: "smart-metering-beyond-measurement",
    category: "insights",
    label: "LATEST INSIGHTS",
    title: "Smart Metering Beyond Measurement",
    description:
      "From connected meters to connected intelligence  Smart meters have changed the way utilities collect information. Instead of relying on periodic readings, utilities can now access a continuous...",
    cta: "Read Insight",
    image: "/news/news-smart-metering-beyond-measurement.png",
    href: "#",
  },
  {
    id: "from-hes-to-intelligence",
    category: "insights",
    label: "INSIGHTS",
    title: "From HES to Intelligence",
    description:
      "The connection between the meter and the enterprise. The Head-End System is one of the most important layers within a smart-metering ecosystem.",
    cta: "Read More",
    image: "/news/news-from-hes-to-intelligence.png",
    href: "#",
  },
  {
    id: "making-meter-data-actionable",
    category: "insights",
    label: "INSIGHTS",
    title: "Making Meter Data Actionable",
    description:
      "Millions of readings. One opportunity: better decisions. Smart meters can generate millions of readings and events across a utility’s network.",
    cta: "Read More",
    image: "/news/news-making-meter-data-actionable.png",
    href: "#",
  },
  {
    id: "introducing-zenium",
    category: "company",
    label: "COMPANY",
    title: "Introducing Zenium",
    description:
      "Building intelligence for the modern utility. Zenium brings together utility technology, data management and analytics to help organisations make better use of the information generated across their energy environments.",
    cta: "Discover Zenium",
    image: "/news/news-introducing-zenium.png",
    href: "#",
  },
  {
    id: "the-zenium-approach",
    category: "company",
    label: "COMPANY",
    title: "The Zenium Approach",
    description:
      "Technology built around utility reality. Utility environments are complex. Different technologies, devices, communication networks, operational systems and data sources need to work together reliably.",
    cta: "Explore Our Solutions",
    image: "/news/news-the-zenium-approach.png",
    href: "#",
  },
  {
    id: "evolution-of-smart-metering",
    category: "industry",
    label: "INDUSTRY",
    title: "The Evolution of Smart Metering",
    description:
      "From automated meter reading to intelligent utility management Smart metering has evolved significantly. What began primarily as a way to automate meter reading has developed into a much broader....",
    cta: "Explore Zenium Solutions",
    image: "/news/news-evolution-of-smart-metering.png",
    href: "#",
  },
  {
    id: "data-foundation-intelligent-grid",
    category: "industry",
    label: "INDUSTRY",
    title: "Data as the Foundation of the Intelligent Grid",
    description:
      "Why utility intelligence starts with trusted data. The modern grid is becoming increasingly digital.",
    cta: "Explore Intelligent Utility Management",
    image: "/news/news-data-foundation-intelligent-grid.png",
    href: "#",
  },
  {
    id: "connecting-utility-community",
    category: "events",
    label: "EVENTS",
    title: "Connecting with the utility technology community",
    description:
      "Zenium will be connecting with utility leaders, technology providers and industry professionals to discuss the evolving role of data, analytics and intelligent....",
    cta: "Connect with our team",
    image: "/news/news-connecting-utility-community.png",
    href: "#",
  },
  {
    id: "from-utility-data-event",
    category: "events",
    label: "EVENTS",
    title: "From Utility Data to Intelligent Action",
    description:
      "Utility organisations are generating more data than ever before. But how can that data become genuinely useful?",
    cta: "Register / Learn More",
    image: "/news/news-from-utility-data-event.png",
    href: "#",
  },
];
