export const contactIntro = {
  eyebrow: "CONTACT US",
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
      { type: "phone", value: "+91 9840 000 000", href: "tel:+919840000000" },
    ],
  },
  {
    title: "Sales and partnerships",
    items: [
      { type: "email", value: "sales@zenium.ai", href: "mailto:sales@zenium.ai" },
      { type: "phone", value: "+91 9840 000 000", href: "tel:+919840000000" },
    ],
  },
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