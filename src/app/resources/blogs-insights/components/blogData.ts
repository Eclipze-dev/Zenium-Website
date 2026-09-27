import type { CmsBlogPost } from "@/types/cms";

export type BlogSeoRow = {
  parameter: string;
  specification: string;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
  ordered?: boolean;
  trailing?: string[];
};

export type BlogPost = {
  slug: string;
  label: string;
  titleLead: string;
  titleAccent: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  cta: string;
  seoTable?: BlogSeoRow[];
  intro: string;
  sections: BlogSection[];
};

export const blogIntro = {
  eyebrow: "BLOGS",
  titleLead: "Zenium Smart Metering",
  titleAccent: "Content Series",
  description:
    "Technical & Strategic Blog Articles for Utility Modernization",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-the-rdss-scheme-for-smart-metering-software",
    label: "BLOG 1",
    titleLead: "Understanding the RDSS Scheme for",
    titleAccent: "Smart Metering Software",
    excerpt:
      "The Revamped Distribution Sector Scheme (RDSS) isn't just a government mandate—it's the biggest digital overhaul the Indian power sector has ever seen. The core goal is ambitious but necessary: drop Aggregate Technical and Commercial (AT&C) losses to 12–15% nationwide and finally close the revenue gap for DISCOMs.",
    image: "/blogs/rdss-scheme.png",
    imageAlt:
      "Indian city distribution transformers and prepaid smart meters at dusk",
    cta: "Read More",
    seoTable: [
      {
        parameter: "Meta Title",
        specification:
          "RDSS Scheme Smart Meters: Compliance & Software Architecture | Zenium",
      },
      {
        parameter: "Meta Description",
        specification:
          "Learn the RDSS full form, its impact on Indian DISCOMs, and how Zenium's software architecture ensures compliance with national smart metering mandates.",
      },
      {
        parameter: "Target Keywords",
        specification: "rdss full form, rdss scheme smart meters",
      },
    ],
    intro:
      "To pull this off, the scheme calls for 250 million prepaid smart meters by 2026, plus mandatory metering on all distribution transformers (DTs) and feeders. But putting physical rdss scheme smart meters on walls is only half the battle. The real success of this rollout depends entirely on the enterprise software—specifically the Head-End System (HES) and Meter Data Management System (MDMS)—that actually turns all that raw field data into grid intelligence and cash flow.",
    sections: [
      {
        heading: "Why Software Makes or Breaks RDSS Compliance",
        paragraphs: [
          "RDSS projects operate on a TOTEX (Capital plus Operational expenditure) model. This means Advanced Metering Infrastructure Service Providers (AMISPs) only get paid if the system actually performs. If the network drops or billing data is flawed, revenue stops.",
          "Here is how a pure-play software architecture like Zenium makes RDSS compliance work on the ground:",
        ],
      },
      {
        heading: "A Heavy Focus on Prepaid Metering",
        paragraphs: [
          "RDSS leans hard into the prepaid model. Zenium's MDMS handles this natively, tracking interval consumption against a consumer's account balance in near real-time. The moment a balance hits zero, the MDMS tells the HES to trigger a remote disconnect. No trucks rolled, no manual intervention, and no bad debt.",
        ],
      },
      {
        heading: "Automated Energy Accounting",
        paragraphs: [
          "You can't fix AT&C losses if you can't see them. Zenium software runs continuous energy accounting by comparing upstream distribution transformer check meters with the aggregate usage of the consumers downstream. This instantly exposes unmetered consumption, bypasses, and physical tampering.",
        ],
      },
      {
        heading: "Full AMI Interoperability",
        paragraphs: [
          "Meters deployed under RDSS have to meet strict IS 16444 standards for accuracy and two-way communication. Zenium's HES is built to orchestrate these compliant meters seamlessly, handling automated gap reconciliation to recover missed reads and pushing over-the-air firmware updates to keep the fleet secure.",
          "For DISCOMs and AMISPs, the hardware is just the sensor. The software layer is what actually secures the scheme funding and delivers the efficiency RDSS demands.",
        ],
      },
    ],
  },
  {
    slug: "dlms-cosem-standard-explained",
    label: "BLOG 2",
    titleLead: "DLMS/COSEM Standard Explained:",
    titleAccent: "Why Utilities Need Hardware-Agnostic Software",
    excerpt:
      "Utilities scaling up their smart grids usually hit the same frustrating wall: vendor lock-in. When you rely on a meter manufacturer's proprietary software to read their specific devices, expanding your network or switching to a cheaper hardware vendor later becomes a costly nightmare.",
    image: "/blogs/dlms-cosem.png",
    imageAlt:
      "Indian utility control room reviewing a multi-vendor smart meter network",
    cta: "Read More",
    seoTable: [
      {
        parameter: "Meta Title",
        specification:
          "DLMS/COSEM Protocol & Vendor Agnostic Smart Metering | Zenium",
      },
      {
        parameter: "Meta Description",
        specification:
          "Understand the dlms cosem protocol and how vendor-agnostic smart metering software prevents hardware lock-in for utility distribution networks.",
      },
      {
        parameter: "Target Keywords",
        specification: "dlms cosem protocol, vendor agnostic smart metering",
      },
    ],
    intro:
      "The way out of this trap is the dlms cosem protocol. It's an international standard that forces different brands of smart grid hardware to speak the same language.",
    sections: [
      {
        heading: "Breaking Down the DLMS/COSEM Protocol",
        paragraphs: [
          "Compliant with the global IEC 62056 standard, this framework has two main parts that make smart meter communication work seamlessly:",
        ],
      },
      {
        heading: "DLMS (Device Language Message Specification)",
        paragraphs: [
          "Think of this as the communication rules. It defines exactly how data is securely exchanged between the physical meter and the utility's Head-End System (HES).",
        ],
      },
      {
        heading: "COSEM (Companion Specification for Energy Metering)",
        paragraphs: [
          "Think of this as the dictionary. It organizes the meter's information into a standardized data model using Object Identification System (OBIS) codes.",
          "Together, they guarantee that whether you buy a meter from Genus, Secure, or Schneider, the data arrives at your servers structured, secure, and ready to use.",
        ],
      },
      {
        heading: "The Business Case for Vendor Agnostic Smart Metering",
        paragraphs: [
          "Deploying vendor agnostic smart metering software isn't just an IT upgrade; it's a procurement strategy. By running a pure-play, open-standard software platform like Zenium, utilities get complete control over their infrastructure.",
        ],
      },
      {
        heading: "Total Procurement Freedom",
        paragraphs: [
          "Utilities can split tenders across multiple hardware manufacturers to get the best pricing, knowing all the meters will connect to the same software.",
        ],
      },
      {
        heading: "One Screen for Everything",
        paragraphs: [
          "A vendor-agnostic HES puts every meter brand onto a single operational dashboard. Your team doesn't have to juggle five different proprietary systems just to run a remote disconnect or pull a load profile.",
        ],
      },
      {
        heading: "Future-Proofing",
        paragraphs: [
          "As new meter technologies hit the market, an open-standard software layer ensures you can drop new devices into your existing ecosystem without starting from scratch.",
          "By standardizing on the DLMS/COSEM framework, Zenium lets utilities buy whatever hardware makes sense today, without worrying about whether it will still work tomorrow.",
        ],
      },
    ],
  },
  {
    slug: "how-vee-protects-utility-revenue",
    label: "BLOG 3",
    titleLead: "How VEE (Validation, Editing, and Estimation)",
    titleAccent: "Protects Utility Revenue",
    excerpt:
      "Smart meters pump out a massive amount of data, pushing interval load profiles and consumption metrics every 15 to 30 minutes. But anyone working in field operations knows a simple truth: field data is almost never perfect.",
    image: "/blogs/vee-revenue.png",
    imageAlt:
      "Utility technician checking electricity meters in an Indian residential colony",
    cta: "Discover Zenium",
    seoTable: [
      {
        parameter: "Meta Title",
        specification:
          "How VEE Smart Metering Protects Utility Revenue | Zenium",
      },
      {
        parameter: "Meta Description",
        specification:
          "Discover how vee smart metering and rigorous meter data validation processes eliminate billing errors and prevent utility revenue leakage.",
      },
      {
        parameter: "Target Keywords",
        specification: "vee smart metering, meter data validation",
      },
    ],
    intro:
      "Network latency, cellular dead zones, hardware glitches, and physical tampering can all create gaps or corrupt data packets. If you feed that raw, unverified data directly into a Customer Information System (CIS), you end up with chaotic billing, angry customers, and massive revenue leakage. That is exactly why vee smart metering is the most important step in the meter-to-cash lifecycle.",
    sections: [
      {
        heading: "How VEE Secures the Billing Cycle",
        paragraphs: [
          "VEE stands for Validation, Editing, and Estimation. It lives inside the utility's Meter Data Management System (MDMS) and acts as an automated tollbooth, scrubbing all inbound telemetry before it ever touches a customer's bill.",
        ],
      },
      {
        heading: "Meter Data Validation",
        paragraphs: [
          "The second data hits the MDMS, the validation engine checks it against configurable business rules. It instantly catches impossible scenarios—like negative consumption values, sudden usage spikes that defy the connection's physical load limit, or active commercial sites reporting zero usage. Proper meter data validation stops bad data dead in its tracks.",
        ],
      },
      {
        heading: "Editing with Accountability",
        paragraphs: [
          "When the validation engine flags corrupted data, it isolates those records for review. Billing analysts can manually or automatically edit the flagged intervals to correct the record. More importantly, enterprise software like Zenium logs an immutable audit trail for every single edit. If a regulator or auditor asks questions later, you have the exact history of who changed what, and why.",
        ],
      },
      {
        heading: "Seamless Estimation",
        paragraphs: [
          "Communication networks go down; it's unavoidable. But missing meter readings shouldn't stop the billing cycle. The estimation engine automatically calculates and fills in the missing intervals using highly accurate algorithms. It looks at the consumer's historical usage, seasonal baselines, or even peer meters on the same feeder line to reconstruct the missing data.",
          "With strict VEE protocols in place, Zenium's MDMS ensures utilities only issue invoices based on accurate, cleansed billing determinants—protecting both the balance sheet and the utility's reputation.",
        ],
      },
    ],
  },
  {
    slug: "prepaid-smart-metering-solving-billing-challenges",
    label: "BLOG 4",
    titleLead: "Prepaid Smart Metering:",
    titleAccent: "Solving Billing Challenges for Utilities",
    excerpt:
      "For years, electricity distribution utilities have been fighting a losing battle with postpaid billing. Manual meter reading delays, arguments over estimated bills, and the massive cost of chasing down arrears have drained utility cash flows.",
    image: "/blogs/prepaid-metering.png",
    imageAlt:
      "Prepaid smart meter on a home veranda in an Indian town",
    cta: "Explore Our Solutions",
    seoTable: [
      {
        parameter: "Meta Title",
        specification: "Prepaid Smart Metering MDMS Architecture | Zenium",
      },
      {
        parameter: "Meta Description",
        specification:
          "Explore how a prepaid smart metering mdms automates real-time balance tracking, dynamic tariffs, and remote disconnects to improve utility cash flow.",
      },
      {
        parameter: "Target Keywords",
        specification: "prepaid smart metering mdms, smart meter prepayment",
      },
    ],
    intro:
      "Smart meter prepayment flips the script completely. When consumers pay for energy before they use it, bad debt essentially drops to zero, and collection costs disappear. But running a prepaid model at a national scale requires a highly tuned software engine.",
    sections: [
      {
        heading: "The Engine Behind the Meter",
        paragraphs: [
          "Modern smart prepayment doesn't rely on physical tokens or keypads on the meter itself. Today, the intelligence lives entirely in the cloud. The magic happens inside the prepaid smart metering mdms.",
          "Here is how Zenium's software handles the heavy lifting:",
        ],
      },
      {
        heading: "Real-Time Balance Deductions",
        paragraphs: [
          "The MDMS pulls interval consumption data from the field via the Head-End System (HES). It applies the utility's exact tariff structures—factoring in complex Time-of-Use (TOU) rates, fixed charges, and taxes—and deducts the precise monetary value from the consumer's digital wallet on the fly.",
        ],
      },
      {
        heading: "Automated Low-Balance Alerts",
        paragraphs: [
          "Nobody wants their power cut off without warning. The MDMS ties directly into SMS gateways and consumer mobile apps. As a balance drops toward a predefined threshold, the system automatically fires off alerts, prompting the user to top up their account via standard digital payment platforms before the lights go out.",
        ],
      },
      {
        heading: "Touchless Disconnects and Reconnects",
        paragraphs: [
          "If a consumer's balance actually hits zero, the MDMS takes over. It autonomously generates a disconnect command and routes it through the HES directly to the smart meter's internal load switch. Power is cut instantly—no field technician required. Once the consumer recharges their account, the MDMS registers the payment and fires a reconnect command, restoring power in minutes.",
          "By shifting the smart meter prepayment logic into a centralized MDMS, utilities lock in tariff accuracy, wipe out manual service costs, and finally build a predictable, healthy revenue cycle.",
        ],
      },
    ],
  },
];

export function blogTitle(post: Pick<BlogPost, "titleLead" | "titleAccent">) {
  return `${post.titleLead} ${post.titleAccent}`.trim();
}

export function mergeBlogPosts(cmsPosts: CmsBlogPost[]): BlogPost[] {
  const known = new Set(blogPosts.map((post) => post.slug));
  const fromCms = cmsPosts
    .filter((post) => post.slug && !known.has(post.slug))
    .map(mapCmsPost);
  return [...blogPosts, ...fromCms];
}

export function findBlogPost(slug: string, cmsPosts: CmsBlogPost[]) {
  return (
    blogPosts.find((post) => post.slug === slug) ??
    cmsPosts.filter((post) => post.slug === slug).map(mapCmsPost)[0]
  );
}

function mapCmsPost(post: CmsBlogPost): BlogPost {
  const paragraphs = (post.content ?? "")
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return {
    slug: post.slug,
    label: post.category?.trim() || "INSIGHT",
    titleLead: post.title,
    titleAccent: "",
    excerpt: post.excerpt?.trim() || paragraphs[0] || "",
    image: post.featured_image_url || "/blogs/rdss-scheme.png",
    imageAlt: post.alt_text?.trim() || post.title,
    cta: "Read More",
    intro: post.excerpt?.trim() || paragraphs[0] || "",
    sections: paragraphs.length
      ? [{ heading: "", paragraphs }]
      : [],
  };
}
