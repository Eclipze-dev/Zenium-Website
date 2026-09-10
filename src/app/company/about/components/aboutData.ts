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
  image: string;
  bio: string[];
};

const leadershipPlaceholderBio = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit anim id est laborum.",
  "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor, lorem vitae ullamcorper consequat, justo sapien consectetur lectus, vitae tincidunt neque augue sed ipsum. Praesent blandit, nibh at interdum posuere, libero augue facilisis sem, vel malesuada urna justo vitae erat.",
];

export const aboutLeadership = {
  title: "Our",
  accent: "Leadership Team",
  description:
    "Zenium's leadership team brings together experience in utility technology, product development, engineering, partnerships and business growth.",
  leaders: [
    {
      name: "JH",
      title: "Executive Director",
      image: "/img.png",
      bio: leadershipPlaceholderBio,
    },
    {
      name: "Ramana Elchuri",
      title: "Chief Revenue Officer",
      image: "/img.png",
      bio: leadershipPlaceholderBio,
    },
    {
      name: "Sreeju K B",
      title: "Chief Product Officer",
      image: "/img.png",
      bio: [
        "Sreeju K B is a product and technology leader with over two decades of experience in smart metering, smart grids and energy data platforms. For more than 14 years he has worked on Head End Systems (HES) and Meter Data Management (MDM), designing and scaling platforms that manage millions of smart meters and petabytes of energy data.",
        "His experience covers the full product lifecycle — strategy and customer needs through architecture, development, deployment and growth, across large-scale smart metering programmes and data-driven grid operations. As Chief Product Officer, Sreeju drives Zenium's product strategy and technology direction, building intelligent, scalable platforms and energy analytics that help utilities operate more efficiently and advance towards smarter, more connected energy networks.",
      ],
    },
    {
      name: "Satyadip Das",
      title: "Chief Technology Officer",
      image: "/img.png",
      bio: leadershipPlaceholderBio,
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
