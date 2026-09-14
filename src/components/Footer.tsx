// import AnimatedNetworkBackground from "@/components/AnimatedNetworkBackground";
import {
  ArrowRightIcon,
  LinkedInIcon,
} from "@/components/icons/icons";
import CookieSettingsLink from "@/components/cookie-consent/CookieSettingsLink";
import OptimizedImage from "@/components/OptimizedImage";

type FooterLinkItem = {
  label: string;
  href?: string;
  arrow?: boolean;
  disabled?: boolean;
};

function FooterLink({ label, href, arrow = false, disabled = false }: FooterLinkItem) {
  if (disabled) {
    return (
      <span className="inline-flex items-center gap-1.5 text-supporting font-normal leading-[1.5] text-muted opacity-40 max-lg:text-caption max-lg:leading-[1.45] max-sm:text-[12px]">
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      className="group/link inline-flex items-center gap-1.5 text-supporting font-normal leading-[1.5] text-muted transition-colors duration-[200ms] hover:text-zen-text max-lg:text-caption max-lg:leading-[1.45] max-sm:text-[12px]"
    >
      <span className="transition-colors duration-[200ms] group-hover/link:text-orange">
        {label}
      </span>
      {arrow && (
        <ArrowRightIcon
          width={13}
          height={13}
          className="shrink-0 text-orange transition-transform duration-[200ms] group-hover/link:translate-x-1 max-lg:h-3 max-lg:w-3"
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
      <h3 className="mb-[20px] text-p2 max-lg:mb-[12px] max-lg:text-[13px] max-lg:leading-[1.35] max-lg:font-bold max-sm:mb-[10px] max-sm:text-[12px]">
        {heading}
      </h3>
      <ul className="m-0 list-none text-button text-muted space-y-[12px] p-0 max-lg:space-y-[8px] max-sm:space-y-[8px]">
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
      <div className="border-t border-line py-[26px] max-lg:py-[20px] max-sm:py-[18px]">
        <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-[14px]">
          <span className="text-sm font-normal tracking-[0.04em] text-muted max-lg:text-caption max-sm:text-[11px]">
            &copy; Zenix Data Private Limited
          </span>
          <div className="flex items-center gap-[28px] max-lg:gap-[20px] max-sm:flex-wrap max-sm:gap-[16px]">
            <CookieSettingsLink />
            <a
              href="/privacy"
              className="text-sm font-normal tracking-[0.04em] text-zen-text transition-colors duration-200 hover:text-orange max-lg:text-caption max-sm:text-[11px]"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm font-normal tracking-[0.04em] text-zen-text transition-colors duration-200 hover:text-orange max-lg:text-caption max-sm:text-[11px]"
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
      { label: "HES", href: "/solutions/hes" },
      { label: "MDM", href: "/solutions/mdm" },
      { label: "AI & Analytics", href: "/solutions/ai-analytics" },
    ],
  },
  {
    heading: "Who We Serve",
    links: [
      { label: "Utilities", href: "/serve/utilities" },
      { label: "Smart Cities", href: "/serve/cities" },
      { label: "Commercial & Industrial", href: "/serve/commercial" },
      { label: "Microgrids", href: "/serve/microgrid" },
      { label: "Prosumers", href: "/serve/prosumers" },
    ],
  },
  {
    heading: "Partners",
    links: [
      { label: "Partners", href: "/partners" },
      { label: "Meter Manufacturers", disabled: true },
      { label: "AMI Service Providers", disabled: true },
      { label: "System Integrators", disabled: true },
    ],
  },
  // {
  //   heading: "Resources",
  //   links: [
  //     { label: "Case Studies", href: "/resources/case-studies" },
  //     { label: "Brochures", href: "/resources/brochures" },
  //     { label: "Whitepapers", href: "/resources/whitepapers" },
  //     { label: "Blogs & Insights", href: "/resources/blogs-insights" },
  //     { label: "Webinars", href: "/resources/webinars" },
  //   ],
  // },
  {
    heading: "Company",
    links: [
      { label: "About Zenium", href: "/company/about" },
      // { label: "Leadership", href: "/company/leadership" },
      // { label: "Careers", href: "/company/careers" },
      // { label: "News & Events", href: "/company/news" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

// const contactLinks: FooterLinkItem[] = [
//   { label: "Contact Us", href: "/contact" },
//   { label: "Sales Enquiry", href: "/contact" },
//   { label: "Support", href: "/contact" },
//   { label: "Request a Demo", href: "/contact", arrow: false },
// ];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zen-bg">
      {/* <AnimatedNetworkBackground /> */}
      <div className="relative z-10">
      {/* Navigation Area */}
      <div className="container py-[64px] max-lg:py-[40px] max-sm:py-[44px]">
        <div className="flex justify-between gap-[40px] max-xl:flex-col max-xl:gap-[40px]">
          <div className="min-w-0 shrink-0">
            <a
              href="/"
              className="inline-flex items-center"
              aria-label="Zenium home"
            >
              <OptimizedImage
                src="/ZENIUM_light_logo.png"
                alt="Zenium"
                width={140}
                height={36}
                className="h-9 w-auto block max-sm:h-8 theme-logo-dark"
              />
              <OptimizedImage
                src="/ZENIUM_dark_logo.png"
                alt="Zenium"
                width={140}
                height={36}
                className="hidden h-9 w-auto block max-sm:h-8 theme-logo-light"
              />
            </a>
            <p className="mt-[20px] max-w-[280px] text-button text-muted max-lg:mt-[14px] max-lg:text-[13px] max-lg:leading-[1.45] max-sm:mt-[12px] max-sm:text-[12px] max-sm:leading-[1.45]">
              Turning connected utility data into intelligence.
            </p>
          </div>
          <div className="grid min-w-0 flex-1 grid-cols-4 gap-x-[20px] gap-y-[40px] max-lg:gap-x-[12px] max-sm:grid-cols-1 max-sm:gap-y-[36px]">
          {columns.map((col) => (
            <FooterColumn key={col.heading} {...col} />
          ))}
          </div>
        </div>

        {/* Contact area */}
        {/* <div className="mt-[48px] border-t border-line pt-[36px] max-sm:mt-[36px] max-sm:pt-[28px]">
          <div className="grid grid-cols-[1fr_auto] items-start gap-[40px] max-sm:grid-cols-1 max-sm:gap-[20px]">
            <div className="min-w-0">
              <h3 className="mb-[20px] text-p2">
                Contact
              </h3>
              <ul className="m-0 list-none text-button text-muted flex flex-wrap gap-x-[40px] gap-y-[12px] p-0 max-sm:flex-col max-sm:gap-[12px]">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom Legal Bar */}
      <FooterBottomBar />
      </div>
    </footer>
  );
}
