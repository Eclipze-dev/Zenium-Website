export const contactIntro = {
  eyebrow: "CONTACT",
  title: "Let's start a",
  accent: "conversation",
  description:
    "Whether you are a utility, AMISP, meter manufacturer, technology partner or another organisation within the energy ecosystem, we would be pleased to discuss how Zenium can support your requirements.",
};

export const interestOptions = [
  "Solutions",
  "Partnerships",
  "Careers",
  "General enquiry",
] as const;

export type ContactLine = {
  type: "email" | "phone";
  value: string;
  href: string;
};

export const contactChannels: {
  title: string;
  items: ContactLine[];
}[] = [
  {
    title: "General enquiries",
    items: [
      { type: "email", value: "info@zenium.ai", href: "mailto:info@zenium.ai" },
      { type: "phone", value: "+91 9880 106 140", href: "tel:+919880106140" },
    ],
  },
  // {
  //   title: "Sales and partnerships",
  //   items: [
  //     { type: "email", value: "sales@zenium.ai", href: "mailto:sales@zenium.ai" },
  //     { type: "phone", value: "+91 9880 106 140", href: "tel:+919880106140" },
  //   ],
  // },
];

export const officeAddress = {
  title: "Office",
  companyName: "Zenix Data Private Limited",
  lines: [
    "Awfis 4th Floor MFAR, Embassy",
    "Manyata Tech park, Nagavara,",
    "Bengaluru - 560045, India",
  ],
};