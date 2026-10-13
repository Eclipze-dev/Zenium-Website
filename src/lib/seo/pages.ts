import { SOLUTION_PATHS, GUIDE_PATH, CALCULATOR_PATH, BLOG_INDEX_PATH } from "./paths";

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  /** Defaults to true. Stub / placeholder pages set false. */
  index?: boolean;
};

export const pageSeo = {
  home: {
    path: "/",
    title: "Zenium | Energy Intelligence Platform for Smart Utilities",
    description:
      "Zenium helps utilities turn metering and operational data into actionable intelligence, built on a Head-End System and meter-data foundation.",
  },
  ami: {
    path: SOLUTION_PATHS.ami,
    title: "Advanced Metering Infrastructure (AMI) Software | Zenium",
    description:
      "Scalable Advanced Metering Infrastructure software. Hardware-agnostic Head-End System, meter data management, and analytics for distribution utilities.",
  },
  hes: {
    path: SOLUTION_PATHS.hes,
    title: "Smart Meter Head-End System (HES) Software | Zenium",
    description:
      "Enterprise Head-End System software for large-scale AMI rollouts, with vendor-agnostic DLMS/COSEM, RF Mesh, and cellular smart-meter connectivity.",
  },
  mdm: {
    path: SOLUTION_PATHS.mdms,
    title: "Meter Data Management System (MDMS) Software | Zenium",
    description:
      "Enterprise Meter Data Management System software. Automate VEE, meter-to-cash billing determinants, prepayment, and energy theft detection for utilities.",
  },
  aiAnalytics: {
    path: SOLUTION_PATHS.analytics,
    title: "Smart Grid and Meter Data Analytics Software | Zenium",
    description:
      "Turn interval meter data into actionable utility intelligence, including transformer load profiling, loss analytics, and feeder balance monitoring.",
  },
  smartMeterGuide: {
    path: GUIDE_PATH,
    title: "How to Read a Smart Meter Display | Guide | Zenium",
    description:
      "Learn how to read a smart meter display, including common codes and readings, written for consumers and utilities exploring advanced metering.",
  },
  wattsToKwhCalculator: {
    path: CALCULATOR_PATH,
    title: "Watts to kWh Calculator | Convert Power to kWh | Zenium",
    description:
      "Convert watts or kilowatts into kilowatt-hours. See that one unit of electricity equals 1 kWh, then explore Zenium AMI, HES, and MDMS software.",
  },
  serveUtilities: {
    path: "/serve/utilities",
    title: "Intelligence for Electricity, Gas and Water | Zenium",
    description:
      "Zenium helps electricity, gas, and water utilities connect infrastructure, manage trusted meter data, and turn operational signals into intelligence.",
  },
  serveCities: {
    path: "/serve/cities",
    title: "Intelligence for Connected Urban Infrastructure | Zenium",
    description:
      "Zenium helps cities and infrastructure operators connect distributed assets, manage operational data, and see performance across urban networks.",
  },
  serveCommercial: {
    path: "/serve/commercial",
    title: "C&I Energy Data and Business Intelligence | Zenium",
    description:
      "Zenium helps commercial and industrial organisations see energy use across sites, meters, and operations, then find where performance can improve.",
  },
  serveMicrogrid: {
    path: "/serve/microgrid",
    title: "Intelligence for Distributed Energy Systems | Zenium",
    description:
      "Zenium brings distributed energy data together so operators can see generation, storage, consumption, and how a microgrid system is performing.",
  },
  serveProsumers: {
    path: "/serve/prosumers",
    title: "Energy Intelligence on Both Sides of the Meter | Zenium",
    description:
      "Zenium helps organisations bring consumption and generation data together, creating a clearer view of their position on both sides of the meter.",
  },
  partners: {
    path: "/partners",
    title: "Technology Partners for AMI and Utility Solutions | Zenium",
    description:
      "Zenium works with AMISPs, meter manufacturers, and system integrators to connect smart-meter infrastructure and support the move toward AMI 2.0.",
  },
  about: {
    path: "/company/about",
    title: "About Zenium | Utility Intelligence Company in India",
    description:
      "Zenium is a utility intelligence company helping utilities and the wider energy ecosystem turn metering and operational data into action they can use.",
  },
  careers: {
    path: "/company/careers",
    title: "Careers in Utility and Energy Intelligence | Zenium",
    description:
      "Zenium combines utility expertise with smart metering, analytics, and AI. We hire people who want to help utilities turn data into intelligence.",
  },
  news: {
    path: "/company/news",
    title: "News and Insights on Utility Intelligence | Zenium",
    description:
      "Perspectives, product developments, and ideas from Zenium on intelligent utility management, smart metering software, and operational energy data.",
  },
  newsArticle: {
    path: "/company/news/turning-utility-data-into-intelligent-action",
    title: "Turning Utility Data Into Intelligent Action | Zenium",
    description:
      "Utilities generate enormous volumes of data every day. Zenium looks at how that information becomes insight, and how insight becomes action.",
  },
  contact: {
    path: "/contact",
    title: "Contact Zenium | Utility Intelligence Enquiries Team",
    description:
      "Talk to Zenium if you are a utility, AMISP, meter manufacturer, technology partner, or another organisation working in the energy ecosystem.",
  },
  privacy: {
    path: "/privacy",
    title: "Zenium Privacy Policy for Website Visitors | Zenium",
    description:
      "This Privacy Policy explains how Zenix Data Private Limited, operating as Zenium, collects and uses information when you visit www.zenium.ai.",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use for Visitors to the Zenium Site | Zenium",
    description:
      "These Terms of Use govern how visitors may access and use www.zenium.ai, operated by Zenix Data Private Limited under the brand name Zenium.",
  },
  leadership: {
    path: "/company/leadership",
    title: "Zenium Leadership Team and Company Direction | Zenium",
    description:
      "Meet the leadership team at Zenium, the utility intelligence company building software for smart metering, meter data, and energy operations.",
    index: false,
  },
  resourcesCaseStudies: {
    path: "/resources/case-studies",
    title: "Utility Intelligence Case Studies and Results | Zenium",
    description:
      "Case studies from Zenium on utility intelligence programmes, smart metering deployments, and how metering data supports operational decisions.",
    index: false,
  },
  resourcesBrochures: {
    path: "/resources/brochures",
    title: "Product Brochures for Zenium Utility Software | Zenium",
    description:
      "Download product brochures for Zenium utility software, covering Advanced Metering Infrastructure, the Head-End System, and meter data management.",
    index: false,
  },
  resourcesWhitepapers: {
    path: "/resources/whitepapers",
    title: "Whitepapers on AMI and Utility Intelligence | Zenium",
    description:
      "Read whitepapers from Zenium on Advanced Metering Infrastructure, Head-End Systems, meter data management, and analytics for utility operators.",
    index: false,
  },
  resourcesBlogs: {
    path: BLOG_INDEX_PATH,
    title: "Blogs and Insights on Utility Intelligence | Zenium",
    description:
      "Read insights from Zenium on Advanced Metering Infrastructure, Head-End Systems, meter data management, and analytics written for utility teams.",
  },
  resourcesWebinars: {
    path: "/resources/webinars",
    title: "Webinars on Smart Metering and Utility Data | Zenium",
    description:
      "Watch webinars from Zenium covering smart metering, Head-End Systems, meter data management, and analytics built for utility and energy teams.",
    index: false,
  },
} satisfies Record<string, PageSeo>;

export const indexablePages: PageSeo[] = (
  Object.values(pageSeo) as PageSeo[]
).filter((page) => page.index !== false);

/** CMS pages.slug for a public path. Homepage uses `home` (not empty). */
export function slugFromPath(path: string): string {
  if (!path || path === "/") return "home";
  return path.replace(/^\//, "");
}

/** Known marketing routes for CMS SEO registry (slug + fallback meta). */
export function cmsPageRegistry(): Array<{
  slug: string;
  path: string;
  title: string;
  seo_title: string;
  seo_description: string;
}> {
  return (Object.values(pageSeo) as PageSeo[]).map((page) => ({
    slug: slugFromPath(page.path),
    path: page.path,
    title: page.title,
    seo_title: page.title,
    seo_description: page.description,
  }));
}
