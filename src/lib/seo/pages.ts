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
      "Zenium is a utility intelligence company helping utilities turn metering and operational data into actionable intelligence, built on a trusted HES and MDM foundation.",
  },
  hes: {
    path: "/solutions/hes",
    title: "Head-End System (HES) for Smart Meters | Zenium",
    description:
      "Zenium Head-End System connects smart meters and communication networks to utility operations — automating data acquisition and enabling secure remote operations.",
  },
  mdm: {
    path: "/solutions/mdm",
    title: "Meter Data Management (MDM) Platform | Zenium",
    description:
      "Zenium Meter Data Management System transforms meter data into trusted information for billing, prepaid operations, consumer services and downstream utility use.",
  },
  aiAnalytics: {
    path: "/solutions/ai-analytics",
    title: "Analytics & AI for Utility Operations | Zenium",
    description:
      "Zenium Analytics & AI turns meter, consumer, asset and network data into intelligence that helps utilities identify losses, protect revenue and make operational decisions.",
  },
  serveUtilities: {
    path: "/serve/utilities",
    title: "Intelligence for Electricity, Gas and Water | Zenium",
    description:
      "Zenium helps electricity, gas and water utilities connect infrastructure, manage trusted data and turn operational signals into actionable intelligence with HES, MDM and Analytics & AI.",
  },
  serveCities: {
    path: "/serve/cities",
    title: "Intelligence for Connected Urban Infrastructure | Zenium",
    description:
      "Zenium helps cities and infrastructure operators connect distributed assets, manage operational data and build greater visibility across connected urban environments.",
  },
  serveCommercial: {
    path: "/serve/commercial",
    title: "C&I Energy Data and Business Intelligence | Zenium",
    description:
      "Zenium helps commercial and industrial organisations gain greater visibility into energy consumption across sites, meters and operations.",
  },
  serveMicrogrid: {
    path: "/serve/microgrid",
    title: "Intelligence for Distributed Energy Systems | Zenium",
    description:
      "Zenium helps bring distributed energy data together to create greater visibility into generation, storage, consumption and system performance.",
  },
  serveProsumers: {
    path: "/serve/prosumers",
    title: "Intelligence on Both Sides of the Meter | Zenium",
    description:
      "Zenium helps organisations bring consumption and generation data together to create a clearer view of their changing energy position.",
  },
  partners: {
    path: "/partners",
    title: "Partners for AMI and Utility Solutions | Zenium",
    description:
      "Zenium works with AMISPs, meter manufacturers and system integrators to connect smart-meter infrastructure, manage trusted data and support evolution towards AMI 2.0.",
  },
  about: {
    path: "/company/about",
    title: "About Zenium | Utility Intelligence Company",
    description:
      "Zenium is a utility intelligence company helping utilities and the wider energy ecosystem turn metering and operational data into actionable intelligence.",
  },
  careers: {
    path: "/company/careers",
    title: "Careers in Energy Intelligence | Zenium",
    description:
      "Zenium combines deep utility expertise with smart-metering technology, analytics and AI. We look for people who want to help utilities turn data into intelligence.",
  },
  news: {
    path: "/company/news",
    title: "News and Insights on Utility Intelligence | Zenium",
    description:
      "Perspectives, developments and ideas shaping the future of intelligent utility management from Zenium.",
  },
  newsArticle: {
    path: "/company/news/turning-utility-data-into-intelligent-action",
    title: "Turning Utility Data Into Intelligent Action | Zenium",
    description:
      "Utilities generate enormous volumes of data every day. The real opportunity is turning that information into insight — and insight into action.",
  },
  contact: {
    path: "/contact",
    title: "Contact Zenium | Utility Intelligence Enquiries",
    description:
      "Whether you are a utility, AMISP, meter manufacturer, technology partner or another organisation in the energy ecosystem, talk to Zenium about your requirements.",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | Zenium",
    description:
      "This Privacy Policy explains how Zenix Data Private Limited, operating as Zenium, collects and uses information when you visit www.zenium.ai or contact us through the website.",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use | Zenium",
    description:
      "Terms of Use for www.zenium.ai, operated by Zenix Data Private Limited under the brand name Zenium.",
  },
  leadership: {
    path: "/company/leadership",
    title: "Leadership | Zenium",
    description: "Leadership page coming soon.",
    index: false,
  },
  resourcesCaseStudies: {
    path: "/resources/case-studies",
    title: "Case Studies | Zenium",
    description: "Case studies page coming soon.",
    index: false,
  },
  resourcesBrochures: {
    path: "/resources/brochures",
    title: "Brochures | Zenium",
    description: "Brochures page coming soon.",
    index: false,
  },
  resourcesWhitepapers: {
    path: "/resources/whitepapers",
    title: "Whitepapers | Zenium",
    description: "Whitepapers page coming soon.",
    index: false,
  },
  resourcesBlogs: {
    path: "/resources/blogs-insights",
    title: "Blogs & Insights | Zenium",
    description: "Blogs and insights page coming soon.",
    index: false,
  },
  resourcesWebinars: {
    path: "/resources/webinars",
    title: "Webinars | Zenium",
    description: "Webinars page coming soon.",
    index: false,
  },
} satisfies Record<string, PageSeo>;

export const indexablePages: PageSeo[] = (
  Object.values(pageSeo) as PageSeo[]
).filter((page) => page.index !== false);
