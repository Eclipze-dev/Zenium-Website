export const aboutIntro = {
  title: "About",
  accent: "Zenium",
  paragraphs: [
    "Zenium is a utility intelligence company helping utilities and the wider ecosystem turn metering and operational data into intelligence.",
    "Our HES and MDM technology originated within Enzen, an established energy and utilities specialist and an early contributor to smart-metering transformation. Today, the technology, domain knowledge and experienced product team continue within Zenium as an independent company.",
    "Zenium is supported by Greater Pacific Capital, an established private equity firm with a strong focus on investing in India and supporting the growth of Indian businesses.",
    "As utilities move towards AMI 2.0, Zenium is helping organisations evolve beyond basic meter connectivity towards more intelligent, flexible and data-driven operations.",
  ],
  image: "/news/news-turning-utility-data.png",
  imageAlt:
    "Utility transmission towers with connected smart-grid data network",
};

export const aboutDecisions = {
  title: "From meter data to",
  accent: "better decisions",
  paragraphs: [
    "Zenium combines HES, MDM, analytics and AI to help utilities connect meters, manage data and make better decisions.",
    "Our foundation is built on extensive experience in electricity metering. We are building on this expertise to support the next generation of advanced metering infrastructure, including AMI 2.0 capabilities such as richer data, improved interoperability, more responsive operations and greater use of automation and intelligence.",
    "We are also addressing the evolving data and operational needs of electricity, water and gas utilities.",
  ],
};

export const aboutExperience = {
  title: "Built on",
  accent: "utility experience",
  paragraphs: [
    "Smart-metering environments involve more than connecting devices. They require reliable communication, accurate data management, system integration and clear operational visibility at scale.",
    "AMI 2.0 extends these requirements further. Utilities need platforms that can support increasingly diverse devices, higher volumes of data, more frequent interactions, distributed energy resources and new operational use cases.",
    "Our experience across HES, MDM and large-scale metering programmes enables us to understand these requirements and develop technology grounded in the realities of utility operations.",
    "Zenium supports utilities and organisations across the wider ecosystem, including C&I businesses, smart cities, microgrids and prosumers.",
  ],
  image: "/news/news-turning-utility-data.png",
  imageAlt:
    "Utility transmission towers with connected smart-grid data network",
};

export const aboutDirection = {
  title: "Our",
  accent: "direction",
  paragraphs: [
    "Zenium is strengthening its established HES and MDM foundation with analytics and AI capabilities that help organisations understand metering, consumption and network data more effectively.",
    "Our AMI 2.0 direction is focused on helping utilities move from traditional automated meter reading and data collection towards intelligent, connected infrastructure that supports:",
  ],
  items: [
    "More flexible and interoperable metering ecosystems",
    "Higher-quality and more accessible data",
    "Faster operational insight and response",
    "Advanced analytics and AI-enabled decision-making",
    "Support for distributed energy resources, prosumers and evolving utility models",
    "Improved customer, network and asset visibility",
  ],
  callout:
    "Our focus is to provide the connected data foundation and intelligence required for more visible, responsive and efficient utility operations.",
};

export type AboutLeader = {
  name: string;
  title: string;
  bio: string;
  linkedin: string;
  /** Optional headshot under /public; initials shown when omitted. */
  image?: string;
};

export const aboutLeadership = {
  title: "Our",
  accent: "Leadership Team",
  description:
    "Zenium's leadership team brings together experience in utility technology, product development, engineering, partnerships and business growth.",
  leaders: [
    {
      name: "JH",
      title: "Executive Director",
      bio: "JH brings extensive experience across the energy and utilities sector, with a strong focus on business strategy, operational excellence and long-term growth. He works closely with customers and partners to drive innovation and build sustainable value across the utility ecosystem.",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "Ramana Elchuri",
      title: "Chief Revenue Officer",
      bio: "Ramana leads Zenium's revenue and growth strategy, bringing deep experience in enterprise technology, customer engagement and strategic partnerships. He focuses on expanding Zenium's market presence and helping utilities adopt solutions that deliver measurable business and operational value.",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "Sreeju K B",
      title: "Chief Product Officer",
      bio: "Sreeju leads product strategy and development at Zenium, with a focus on HES, MDM, analytics and AI-enabled utility solutions. He works across technology, design and business teams to build scalable products that address evolving utility requirements and support the transition towards AMI 2.0.",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "Satyadip Das",
      title: "Chief Technology Officer",
      bio: "Satyadip leads Zenium's technology and engineering strategy, focusing on secure, scalable and resilient platforms for the utility sector. His work spans architecture, engineering excellence, product innovation and emerging technologies that enable reliable, future-ready utility operations.",
      linkedin: "https://www.linkedin.com",
    },
  ] satisfies AboutLeader[],
};

export const aboutFaq = {
  title: "Frequently asked",
  accent: "questions",
  items: [
    {
      question: "What does Zenium do?",
      answer:
        "Zenium provides HES, MDM, analytics and AI capabilities that help utilities connect meters, manage metering data, understand operational signals and make better decisions.",
    },
    {
      question: "What is AMI 2.0?",
      answer:
        "AMI 2.0 refers to the next generation of advanced metering infrastructure. It builds on traditional smart metering by supporting more flexible devices, richer and more frequent data, improved interoperability, advanced analytics, automation and new utility use cases.",
    },
    {
      question: "How does Zenium support AMI 2.0?",
      answer:
        "Zenium supports the evolution towards AMI 2.0 through its HES and MDM foundation, combined with analytics and AI capabilities. This helps utilities manage increasingly complex metering ecosystems, improve data quality and gain more timely operational intelligence.",
    },
    {
      question: "Which utilities does Zenium support?",
      answer:
        "Zenium's experience is rooted in electricity metering. Its technology direction extends to the evolving data and operational requirements of electricity, water and gas utilities.",
    },
    {
      question: "What is Zenium's connection to Enzen?",
      answer:
        "Zenium's HES and MDM technology originated within Enzen's energy and utilities business. The technology, domain knowledge and experienced product team now continue within Zenium as an independent company.",
    },
  ],
};

export const aboutFinalCta = {
  title: "Turn utility data into",
  accent: "intelligence",
  description:
    "Talk to us about your AMI 2.0, smart-metering, HES, MDM or utility analytics requirements.",
  cta: "Contact Zenium",
  href: "/contact",
  tagline:
    "Built on utility expertise. Ready for AMI 2.0. Driven by Intelligence.",
};
