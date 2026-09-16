import { pageSeo } from "./pages";
import {
  BRAND_NAME,
  DEFAULT_OG_IMAGE,
  ORGANIZATION_NAME,
  SITE_URL,
} from "./site";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND_NAME,
    legalName: ORGANIZATION_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/ZENIUM_light_logo.png`,
    email: "info@zenium.ai",
    description: pageSeo.about.description,
  };
}

export function breadcrumbListSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function softwareProductSchemas({
  name,
  description,
  path,
  image,
}: {
  name: string;
  description: string;
  path: string;
  image: string;
}) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}${image}`;
  const brand = {
    "@type": "Brand",
    name: BRAND_NAME,
  };

  return [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name,
      description,
      url,
      image: imageUrl,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud, on-premise, hybrid",
      brand,
      provider: {
        "@type": "Organization",
        name: BRAND_NAME,
        url: SITE_URL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name,
      description,
      url,
      image: imageUrl,
      brand,
    },
  ];
}

export function articleSchema({
  headline,
  description,
  path,
  image,
}: {
  headline: string;
  description: string;
  path: string;
  image: string;
}) {
  const url = `${SITE_URL}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    mainEntityOfPage: url,
    image: `${SITE_URL}${image}`,
    author: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/ZENIUM_light_logo.png`,
      },
    },
  };
}

export function faqPageSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export const solutionSchemas = {
  hes: softwareProductSchemas({
    name: "Zenium Head-End System (HES)",
    description: pageSeo.hes.description,
    path: pageSeo.hes.path,
    image: "/solutions/zenium-hes.webp",
  }),
  mdm: softwareProductSchemas({
    name: "Zenium Meter Data Management System",
    description: pageSeo.mdm.description,
    path: pageSeo.mdm.path,
    image: "/solutions/zenium-mdm.webp",
  }),
  aiAnalytics: softwareProductSchemas({
    name: "Zenium Analytics & AI",
    description: pageSeo.aiAnalytics.description,
    path: pageSeo.aiAnalytics.path,
    image: DEFAULT_OG_IMAGE,
  }),
};

export const breadcrumbTrails = {
  hes: [
    { name: "Home", path: "/" },
    { name: "Head-End System", path: "/solutions/hes" },
  ],
  mdm: [
    { name: "Home", path: "/" },
    { name: "Meter Data Management", path: "/solutions/mdm" },
  ],
  aiAnalytics: [
    { name: "Home", path: "/" },
    { name: "Analytics & AI", path: "/solutions/ai-analytics" },
  ],
  serveUtilities: [
    { name: "Home", path: "/" },
    { name: "Who We Serve", path: "/serve/utilities" },
    { name: "Utilities", path: "/serve/utilities" },
  ],
  serveCities: [
    { name: "Home", path: "/" },
    { name: "Who We Serve", path: "/serve/utilities" },
    { name: "Smart Cities", path: "/serve/cities" },
  ],
  serveCommercial: [
    { name: "Home", path: "/" },
    { name: "Who We Serve", path: "/serve/utilities" },
    { name: "Commercial & Industrial", path: "/serve/commercial" },
  ],
  serveMicrogrid: [
    { name: "Home", path: "/" },
    { name: "Who We Serve", path: "/serve/utilities" },
    { name: "Microgrids", path: "/serve/microgrid" },
  ],
  serveProsumers: [
    { name: "Home", path: "/" },
    { name: "Who We Serve", path: "/serve/utilities" },
    { name: "Prosumers", path: "/serve/prosumers" },
  ],
  about: [
    { name: "Home", path: "/" },
    { name: "About", path: "/company/about" },
  ],
  careers: [
    { name: "Home", path: "/" },
    { name: "Careers", path: "/company/careers" },
  ],
  news: [
    { name: "Home", path: "/" },
    { name: "News", path: "/company/news" },
  ],
  newsArticle: [
    { name: "Home", path: "/" },
    { name: "News", path: "/company/news" },
    {
      name: "Turning Utility Data Into Intelligent Action",
      path: "/company/news/turning-utility-data-into-intelligent-action",
    },
  ],
  leadership: [
    { name: "Home", path: "/" },
    { name: "Leadership", path: "/company/leadership" },
  ],
  privacy: [
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy" },
  ],
  terms: [
    { name: "Home", path: "/" },
    { name: "Terms of Use", path: "/terms" },
  ],
} satisfies Record<string, BreadcrumbItem[]>;
