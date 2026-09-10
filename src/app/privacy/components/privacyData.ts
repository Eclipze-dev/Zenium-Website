export const privacyMeta = {
  lastUpdated: "9/9/2026",
  title: "Privacy",
  accent: "Policy",
};

export const privacyIntro = [
  'Zenix Data Private Limited, operating under the brand name Zenium (“Zenium”, “we”, “us” or “our”), respects your privacy.',
  "This Privacy Policy explains how we collect and use information when you visit www.zenium.ai, submit an enquiry or otherwise contact us through the website.",
] as const;

export type PrivacyListSection = {
  type: "list";
  id: string;
  title: string;
  accent: string;
  intro: string;
  items: readonly string[];
  footer?: string;
  /** When true, footer includes an inline Cookie Settings control before remaining text. */
  cookieSettingsFooter?: boolean;
};

export type PrivacyParagraphSection = {
  type: "paragraphs";
  id: string;
  title: string;
  accent: string;
  paragraphs: readonly string[];
};

export type PrivacyContactSection = {
  type: "contact";
  id: string;
  title: string;
  accent: string;
  intro: string;
  companyName: string;
  lines: readonly string[];
  email: string;
};

export type PrivacySection =
  | PrivacyListSection
  | PrivacyParagraphSection
  | PrivacyContactSection;

export const privacySections: PrivacySection[] = [
  {
    type: "list",
    id: "information-you-provide",
    title: "Information we collect",
    accent: "Information you provide",
    intro: "When you submit a contact or demo-request form, we may collect:",
    items: [
      "Your name",
      "Job title",
      "Company or organisation",
      "Business email address",
      "Telephone number",
      "Country or location",
      "Information included in your message",
    ],
    footer:
      "Please do not submit confidential or sensitive information that is not necessary for us to respond to your enquiry.",
  },
  {
    type: "list",
    id: "information-through-website",
    title: "Information collected",
    accent: "through the website",
    intro:
      "With your permission, we may collect limited information about how you use our website, including:",
    items: [
      "Pages visited",
      "Time spent on the website",
      "How you arrived at the website",
      "Interactions with website content and forms",
      "Browser, device and operating-system information",
      "General location derived from your IP address",
    ],
    footer:
      "Our hosting and security providers may also process limited technical information required to deliver and protect the website.",
  },
  {
    type: "list",
    id: "how-we-use",
    title: "How we use your",
    accent: "Information",
    intro: "We may use your information to:",
    items: [
      "Respond to enquiries and demo requests",
      "Provide information about Zenium’s products, services and partnerships",
      "Maintain relevant business correspondence",
      "Understand website usage and performance",
      "Improve our website and content",
      "Protect the security and operation of the website",
      "Meet applicable legal requirements",
    ],
    footer: "We do not sell or rent personal information.",
  },
  {
    type: "paragraphs",
    id: "cookies-and-analytics",
    title: "Cookies and",
    accent: "analytics",
    paragraphs: [
      "Zenium uses essential cookies and similar technologies required for the website to operate.",
      "With your permission, we also use Google Analytics to understand how visitors use the website. Google Analytics may collect information about pages visited, website interactions, referral sources, approximate location, browser and device type.",
      "We may introduce other analytics or website-measurement tools in the future. Any non-essential tools in use will be identified through our cookie settings.",
      "Non-essential analytics and tracking technologies will be activated only after consent where required. You can accept, reject or manage them through the cookie banner and change your choices at any time through the Cookie Settings link in the website footer.",
    ],
  },
  {
    type: "paragraphs",
    id: "sharing-of-information",
    title: "Sharing of",
    accent: "information",
    paragraphs: [
      "We may share limited information with service providers that help us host, secure, analyse or operate the website. This includes Google in connection with Google Analytics.",
      "We may also disclose information where required by law or to protect our legal rights.",
      "These providers may process information from locations outside your country. Their handling of information is also governed by their respective privacy terms.",
      "We do not share personal information with third parties for their own marketing purposes.",
    ],
  },
  {
    type: "paragraphs",
    id: "data-retention",
    title: "Data",
    accent: "retention",
    paragraphs: [
      "We retain information only for as long as reasonably necessary to respond to enquiries, maintain relevant business records, analyse website performance or meet legal requirements.",
      "Analytics information is retained according to the settings configured within the relevant analytics platform.",
    ],
  },
  {
    type: "paragraphs",
    id: "data-security",
    title: "Data",
    accent: "security",
    paragraphs: [
      "We take reasonable measures to protect the information we hold against unauthorised access, misuse, loss or disclosure. However, no internet transmission or online storage system can be guaranteed to be completely secure.",
    ],
  },
  {
    type: "list",
    id: "choices-and-rights",
    title: "Your",
    accent: "choices and rights",
    intro: "Depending on applicable law, you may ask us to:",
    items: [
      "Provide information about the personal data we hold about you",
      "Correct inaccurate or incomplete information",
      "Delete your personal information",
      "Withdraw consent",
      "Stop sending marketing communications",
      "Address a concern about how your information is handled",
    ],
    cookieSettingsFooter: true,
    footer:
      "To submit a request, contact us using the details below. We may need to verify your identity before acting on it.",
  },
  {
    type: "paragraphs",
    id: "external-links",
    title: "External",
    accent: "links",
    paragraphs: [
      "Our website may contain links to third-party websites. Zenium is not responsible for their content, security or privacy practices. We recommend reviewing their privacy policies before providing personal information.",
    ],
  },
  {
    type: "paragraphs",
    id: "changes-to-policy",
    title: "Changes to this",
    accent: "policy",
    paragraphs: [
      "We may update this Privacy Policy as our website, business practices or legal requirements change. The latest version will be published on this page with the updated date.",
    ],
  },
  {
    type: "contact",
    id: "contact-us",
    title: "Contact",
    accent: "us",
    intro: "For questions or requests relating to privacy, please contact:",
    companyName: "Zenix Data Private Limited",
    lines: [
      "Operating under the brand name Zenium",
      "Awfis, 4th Floor, MFAR Building",
      "Manyata Tech Park, Nagawara",
      "Bengaluru - 560045",
      "Karnataka, India",
    ],
    email: "info@zenium.ai",
  },
];
