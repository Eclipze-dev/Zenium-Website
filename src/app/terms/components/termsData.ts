export const termsMeta = {
  lastUpdated: "12 September 2026",
  title: "Terms",
  accent: "of Use",
};

export const termsIntro = [
  'These Terms of Use govern your access to and use of www.zenium.ai (the “Website”).',
  'The Website is operated by **Zenix Data Private Limited**, operating under the brand name **Zenium** (“Zenium”, “we”, “us” or “our”).',
  "By accessing or using the Website, you agree to these Terms of Use. If you do not agree with them, please do not use the Website.",
] as const;

export type TermsListSection = {
  type: "list";
  id: string;
  title: string;
  accent: string;
  intro?: string;
  items: readonly string[];
  footer?: string;
};

export type TermsParagraphSection = {
  type: "paragraphs";
  id: string;
  title: string;
  accent: string;
  paragraphs: readonly string[];
  /** Special handling for Privacy Policy / Cookie Settings links. */
  privacyCookies?: boolean;
};

export type TermsContactSection = {
  type: "contact";
  id: string;
  title: string;
  accent: string;
  intro: string;
  companyName: string;
  lines: readonly string[];
  email: string;
};

export type TermsSection =
  | TermsListSection
  | TermsParagraphSection
  | TermsContactSection;

export const termsSections: TermsSection[] = [
  {
    type: "paragraphs",
    id: "about-this-website",
    title: "About this",
    accent: "Website",
    paragraphs: [
      "The Website provides general information about Zenium, its technology, products, services, experience and partnership opportunities.",
      "The content is provided for general informational purposes only. It does not constitute technical, commercial, legal or professional advice, nor does it constitute a binding offer or commitment by Zenium.",
      "Any purchase, licence, implementation, partnership or service arrangement will be governed by a separate written agreement.",
    ],
  },
  {
    type: "list",
    id: "permitted-use",
    title: "Permitted",
    accent: "use",
    intro:
      "You may access and use the Website for lawful business and informational purposes.\nYou must not:",
    items: [
      "Use the Website for any unlawful or fraudulent purpose",
      "Attempt to gain unauthorised access to the Website, its systems or connected networks",
      "Introduce viruses, malicious code or other harmful material",
      "Interfere with the operation, availability or security of the Website",
      "Copy, modify, distribute or commercially exploit Website content without authorisation",
      "Use automated tools to extract Website content or data without our written permission",
      "Misrepresent your identity or affiliation when contacting us",
    ],
  },
  {
    type: "paragraphs",
    id: "intellectual-property",
    title: "Intellectual",
    accent: "property",
    paragraphs: [
      "Unless otherwise stated, the Website and its content—including text, graphics, designs, software, product names, logos, trademarks, illustrations and other materials—are owned by or licensed to Zenix Data Private Limited.",
      "You may view and download reasonable extracts for internal, non-commercial reference. No other right or licence is granted.",
      "You may not reproduce, republish, modify, distribute or use Website content for commercial purposes without prior written permission from Zenium.",
      "Third-party names, logos and trademarks displayed on the Website remain the property of their respective owners. Their appearance does not imply endorsement unless expressly stated.",
    ],
  },
  {
    type: "paragraphs",
    id: "product-and-performance",
    title: "Product and performance",
    accent: "information",
    paragraphs: [
      "Descriptions of Zenium's products, capabilities, architecture, integrations, deployment options and future direction are provided for general information.",
      "Actual features, availability, specifications and performance may depend on product configuration, project scope, customer requirements, third-party systems and the terms of the applicable agreement.",
      "Any statistics, deployment figures, case studies or customer outcomes shown on the Website relate to the stated project or context. They do not guarantee identical results for every customer or deployment.",
      "Zenium may update or change its products, services and Website content without prior notice.",
    ],
  },
  {
    type: "paragraphs",
    id: "accuracy-of-information",
    title: "Accuracy of",
    accent: "information",
    paragraphs: [
      "We take reasonable care to keep Website information accurate and current. However, we do not guarantee that all content will always be complete, accurate, current or free from errors.",
      "You should obtain appropriate confirmation from Zenium before relying on Website information for a commercial, procurement, technical or investment decision.",
    ],
  },
  {
    type: "paragraphs",
    id: "website-availability",
    title: "Website",
    accent: "availability",
    paragraphs: [
      "We aim to keep the Website available and secure, but we do not guarantee uninterrupted or error-free access.",
      "We may modify, suspend or withdraw any part of the Website for maintenance, security, operational or other reasons without prior notice.",
    ],
  },
  {
    type: "paragraphs",
    id: "third-party-websites",
    title: "Third-party",
    accent: "websites",
    paragraphs: [
      "The Website may contain links to websites or services operated by third parties.",
      "These links are provided for convenience only. Zenium does not control and is not responsible for the availability, content, security, products, services or privacy practices of third-party websites.",
      "Accessing a third-party website is at your own discretion and subject to that website's terms and policies.",
    ],
  },
  {
    type: "paragraphs",
    id: "privacy-and-cookies",
    title: "Privacy and",
    accent: "cookies",
    privacyCookies: true,
    paragraphs: [
      "Our collection and use of personal information are explained in our Privacy Policy.",
      "The Website uses cookies and similar technologies. You can manage non-essential cookies through the Cookie Settings available on the Website.",
    ],
  },
  {
    type: "paragraphs",
    id: "disclaimer-of-warranties",
    title: "Disclaimer of",
    accent: "warranties",
    paragraphs: [
      "To the extent permitted by applicable law, the Website and its content are provided on an “as is” and “as available” basis. Zenium does not provide warranties or representations regarding the Website’s availability, accuracy, completeness, suitability or freedom from harmful components.",
      "Nothing in these Terms excludes any warranty or right that cannot lawfully be excluded.",
    ],
  },
  {
    type: "list",
    id: "limitation-of-liability",
    title: "Limitation of",
    accent: "liability",
    intro:
      "To the extent permitted by applicable law, Zenium will not be liable for any indirect, incidental, special or consequential loss arising from or connected with:",
    items: [
      "Access to or use of the Website",
      "Inability to access the Website",
      "Reliance on Website content",
      "Third-party websites or services linked from the Website",
      "Unauthorised access to or interference with the Website",
    ],
    footer:
      "Nothing in these Terms limits or excludes liability where doing so would be prohibited by applicable law.",
  },
  {
    type: "paragraphs",
    id: "changes-to-these-terms",
    title: "Changes to these",
    accent: "Terms",
    paragraphs: [
      "We may update these Terms of Use periodically to reflect changes to the Website, our business or applicable requirements.",
      "The latest version will be published on this page with the revised date. Continued use of the Website after an update constitutes acceptance of the revised Terms.",
    ],
  },
  {
    type: "paragraphs",
    id: "governing-law",
    title: "Governing law and",
    accent: "jurisdiction",
    paragraphs: [
      "These Terms of Use are governed by the laws of India.",
      "Subject to applicable law, the courts of Bengaluru, Karnataka will have exclusive jurisdiction over disputes arising from or relating to the Website or these Terms.",
    ],
  },
  {
    type: "contact",
    id: "contact-us",
    title: "Contact",
    accent: "us",
    intro: "For questions about these Terms of Use, please contact:",
    companyName: "Zenix Data Private Limited",
    lines: [
      "Operating under the brand name Zenium",
      "4th Floor, MFAR Building",
      "Manyata Tech Park, Nagawara",
      "Bengaluru - 560045",
      "Karnataka, India",
    ],
    email: "info@zenium.ai",
  },
];
