import {
  ArrowRightIcon,
  LinkedInIcon,
} from "@/components/icons/icons";

type FooterLinkItem = {
  label: string;
  href: string;
  arrow?: boolean;
};

function FooterLink({ label, href, arrow = false }: FooterLinkItem) {
  return (
    <a
      href={href}
      className="group/link inline-flex items-center gap-1.5 text-supporting font-normal leading-[1.5] text-muted transition-colors duration-[200ms] hover:text-zen-text"
    >
      <span className="transition-colors duration-[200ms] group-hover/link:text-orange">
        {label}
      </span>
      {arrow && (
        <ArrowRightIcon
          width={13}
          height={13}
          className="shrink-0 text-orange transition-transform duration-[200ms] group-hover/link:translate-x-1"
        />
      )}
    </a>
  );
}

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: FooterLinkItem[];
}) {
  return (
    <div className="min-w-0">
      <h3 className="mb-[20px] text-caption font-semibold uppercase tracking-footer text-muted">
        {heading}
      </h3>
      <ul className="m-0 list-none space-y-[12px] p-0">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink {...link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterBottomBar() {
  return (
    <div className="container">
      <div className="border-t border-line py-[26px]">
        <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-[14px]">
          <span className="text-caption font-normal tracking-[0.04em] text-muted">
            &copy; Zenix Data Private Limited
          </span>
          <div className="flex items-center gap-[28px] max-sm:gap-[20px]">
            <a
              href="#privacy"
              className="text-caption font-normal tracking-[0.04em] text-muted transition-colors duration-200 hover:text-zen-text"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-caption font-normal tracking-[0.04em] text-muted transition-colors duration-200 hover:text-zen-text"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const columns: { heading: string; links: FooterLinkItem[] }[] = [
  {
    heading: "Solutions",
    links: [
      { label: "AI & Analytics", href: "/solutions/ai-analytics" },
      { label: "HES", href: "/solutions/hes" },
      { label: "MDM", href: "/solutions/mdm" },
    ],
  },
  {
    heading: "Who We Serve",
    links: [
      { label: "Utilities", href: "/serve/utilities" },
      { label: "Commercial & Industrial", href: "/serve/commercial" },
      { label: "Smart Cities", href: "/serve/cities" },
      { label: "Microgrids", href: "/serve/microgrids" },
      { label: "Prosumers", href: "/serve/prosumers" },
    ],
  },
  {
    heading: "Partners",
    links: [
      { label: "Meter Manufacturers", href: "/partners/meter-manufacturers" },
      { label: "AMI Service Providers", href: "/partners/ami-service-providers" },
      { label: "System Integrators", href: "/partners/system-integrators" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Brochures", href: "/resources/brochures" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
      { label: "Blogs & Insights", href: "/resources/blogs-insights" },
      { label: "Webinars", href: "/resources/webinars" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Zenium", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
      { label: "News & Events", href: "/company/news" },
    ],
  },
];

const contactLinks: FooterLinkItem[] = [
  { label: "Contact Us", href: "/contact" },
  { label: "Sales Enquiry", href: "/contact" },
  { label: "Support", href: "/contact" },
  { label: "Request a Demo", href: "/contact", arrow: false },
];

export default function Footer() {
  return (
    <footer className="bg-zen-bg">
      {/* Navigation Area */}
      <div className="container py-[64px] max-sm:py-[44px]">
        <div className="grid grid-cols-[1.1fr_repeat(5,minmax(0,1fr))] gap-x-[40px] gap-y-[40px] max-lg:grid-cols-[1fr_1fr_1fr] max-sm:grid-cols-1 max-sm:gap-y-[36px]">
          {/* Brand block */}
          <div className="min-w-0 max-lg:col-span-3 max-sm:col-span-1">
            <a
              href="/"
              className="inline-flex items-center"
              aria-label="Zenium home"
            >
              <img
                src="/ZENIUM_light_logo.png"
                alt="Zenium"
                className="h-9 w-auto block max-sm:h-8 theme-logo-dark"
              />
              <img
                src="/ZENIUM_dark_logo.png"
                alt="Zenium"
                className="hidden h-9 w-auto block max-sm:h-8 theme-logo-light"
              />
            </a>
            <p className="mt-[20px] max-w-[280px] text-body font-normal leading-[1.5] text-muted">
              Turning connected utility data into intelligence.
            </p>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-[24px] inline-flex items-center gap-1.5 text-supporting font-normal text-muted transition-colors duration-200 hover:text-zen-text"
            >
              <LinkedInIcon
                width={16}
                height={16}
                className="shrink-0 text-orange duration-200"
              />
              <span className="transition-colors duration-200 group-hover/link:text-orange">
                LinkedIn
              </span>
            </a>
          </div>

          {/* Navigation columns */}
          {columns.map((col) => (
            <FooterColumn key={col.heading} {...col} />
          ))}
        </div>

        {/* Contact area */}
        <div className="mt-[48px] border-t border-line pt-[36px] max-sm:mt-[36px] max-sm:pt-[28px]">
          <div className="grid grid-cols-[1fr_auto] items-start gap-[40px] max-sm:grid-cols-1 max-sm:gap-[20px]">
            <div className="min-w-0">
              <h3 className="mb-[20px] text-caption font-semibold uppercase tracking-footer text-muted">
                Contact
              </h3>
              <ul className="m-0 list-none flex flex-wrap gap-x-[40px] gap-y-[12px] p-0 max-sm:flex-col max-sm:gap-[12px]">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <FooterBottomBar />
    </footer>
  );
}
