"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Briefcase,
  Building2,
  Cpu,
  Database,
  Factory,
  File,
  FileText,
  Globe2,
  HeartHandshake,
  Info,
  Lightbulb,
  Newspaper,
  Network,
  Play,
  Puzzle,
  Radio,
  Sparkles,
  User,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
} from "@/components/icons/icons";
import {
  companyAbout,
  companyConnect,
  industryLinks,
  mobileSolutions,
  primaryNav,
  // resourceInsights,
  // resourceLearn,
  solutionsLinks,
  type IconKey,
  type MegaId,
  type MegaLink,
} from "./nav/navData";
import {
  DataFlowGraphic,
  EcosystemGraph,
  InsightNetwork,
  UtilityNetwork,
} from "./nav/NetworkMotifs";
import { cn } from "@/lib/cn";
// import ThemeToggle from "./ThemeToggle";

type MegaMenuId = Exclude<MegaId, "partners" | "resources">;

const icons: Record<IconKey, LucideIcon> = {
  sparkles: Sparkles,
  radio: Radio,
  database: Database,
  zap: Zap,
  building: Building2,
  factory: Factory,
  globe: Globe2,
  network: Network,
  cpu: Cpu,
  handshake: HeartHandshake,
  puzzle: Puzzle,
  users: Users,
  file: File,
  book: BookOpen,
  fileText: FileText,
  lightbulb: Lightbulb,
  play: Play,
  info: Info,
  user: User,
  briefcase: Briefcase,
  newspaper: Newspaper,
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-caption font-semibold uppercase tracking-[1.2px] text-orange">
      {children}
    </p>
  );
}

function MegaItem({ item, onNavigate }: { item: MegaLink; onNavigate: () => void }) {
  const Icon = icons[item.icon];
  return (
    <a
      href={item.href}
      onClick={onNavigate}
      className="group flex gap-3 rounded-[4px] px-3 py-3 transition-colors duration-[180ms] hover:bg-nav-card"
    >
      <Icon
        size={18}
        className="mt-0.5 shrink-0 text-nav-muted transition-colors duration-[180ms] group-hover:text-orange"
      />
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span className="text-card font-semibold leading-tight text-white transition-colors duration-[180ms] group-hover:text-orange">
            {item.title}
          </span>
          {/* <ArrowRightIcon
            width={14}
            height={14}
            className="translate-x-0 text-orange opacity-0 transition-all duration-[180ms] group-hover:translate-x-1 group-hover:opacity-100"
          /> */}
        </span>
        <span className="mt-1 block text-supporting font-normal leading-snug text-nav-muted">
          {item.description}
        </span>
      </span>
    </a>
  );
}

function FeatureBlock({
  label,
  heading,
  copy,
  href,
  cta,
  onNavigate,
  children,
}: {
  label: string;
  heading: string;
  copy?: string;
  href?: string;
  cta?: string;
  onNavigate?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-[4px] bg-nav-navy/40 p-6" style={{ backgroundColor: "var(--nav-feature-bg)" }}>
      {children}
      <div className="relative z-[1]">
        <Label>{label}</Label>
        <h3 className="max-w-[18ch] text-heading-sm font-semibold leading-[1.15] tracking-[-0.03em] text-white">
          {heading}
        </h3>
        {copy && (
          <p className="mt-3 max-w-[34ch] text-supporting leading-relaxed text-nav-muted">
            {copy}
          </p>
        )}
        {href && cta && (
          <a
            href={href}
            onClick={onNavigate}
            className="group mt-5 inline-flex items-center gap-2 text-supporting font-semibold !text-orange"
          >
            {cta}
            <ArrowRightIcon width={15} height={15} className="transition-transform duration-[180ms]" />
          </a>
        )}
      </div>
    </div>
  );
}

function SolutionsPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)]">
      <FeatureBlock
        label="ZENIUM INTELLIGENCE"
        heading="Turn utility data into intelligent action."
        copy="Connect utility data, analytics and intelligence in one platform."
        href="#solutions"
        cta="Explore the Platform"
        onNavigate={onNavigate}
      >
        <UtilityNetwork />
      </FeatureBlock>
      <div>
        <Label>Solutions</Label>
        <div className="flex flex-col gap-1">
          {solutionsLinks.map((item) => (
            <MegaItem key={item.title} item={item} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServePanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,0.3fr)_minmax(0,0.5fr)_minmax(0,0.2fr)]">
      <FeatureBlock
        label="WHO WE SERVE"
        heading="Intelligence for every energy environment."
        copy="Built to help organisations understand, optimise and act on complex energy data."
      />
      <div>
        <Label>Industries</Label>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          {industryLinks.map((item) => (
            <MegaItem key={item.title} item={item} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <EcosystemGraph />
      </div>
    </div>
  );
}

// function ResourcesPanel({ onNavigate }: { onNavigate: () => void }) {
//   return (
//     <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.32fr)_minmax(0,0.3fr)]">
//       <div>
//         <Label>Learn</Label>
//         {resourceLearn.map((item) => (
//           <MegaItem key={item.title} item={item} onNavigate={onNavigate} />
//         ))}
//       </div>
//       <div>
//         <Label>Insights</Label>
//         {resourceInsights.map((item) => (
//           <MegaItem key={item.title} item={item} onNavigate={onNavigate} />
//         ))}
//       </div>
//       <a
//         href="#resources"
//         onClick={onNavigate}
//         className="group relative overflow-hidden rounded-[4px] border border-nav-line bg-nav-card p-6"
//       >
//         <InsightNetwork />
//         <div className="relative z-[1]">
//           <Label>Latest Insight</Label>
//           <h3 className="text-card font-semibold leading-snug text-white transition-colors duration-[180ms] group-hover:text-orange">
//             Turning Utility Data Into Intelligence
//           </h3>
//           <p className="mt-3 text-supporting leading-relaxed text-nav-muted">
//             Explore how intelligent analytics can help utilities make faster, better decisions.
//           </p>
//           <span className="mt-5 inline-flex items-center gap-2 text-supporting font-semibold text-orange">
//             Read Insight
//             <ArrowRightIcon width={15} height={15} className="transition-transform duration-[180ms]" />
//           </span>
//         </div>
//       </a>
//     </div>
//   );
// }

function CompanyPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.34fr)_minmax(0,0.32fr)]">
      <div>
        <Label>About</Label>
        {companyAbout.map((item) => (
          <MegaItem key={item.title} item={item} onNavigate={onNavigate} />
        ))}
      </div>
      <div>
        <Label>Connect</Label>
        {companyConnect.map((item) => (
          <MegaItem key={item.title} item={item} onNavigate={onNavigate} />
        ))}
      </div>
      <FeatureBlock
        label="THE ZENIUM VISION"
        heading="Intelligence for a more connected utility future."
        href="#company"
        cta="Discover Zenium"
        onNavigate={onNavigate}
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24">
          <DataFlowGraphic />
        </div>
      </FeatureBlock>
    </div>
  );
}

const panels: Record<MegaMenuId, (props: { onNavigate: () => void }) => JSX.Element> = {
  solutions: SolutionsPanel,
  "who-we-serve": ServePanel,
  // resources: ResourcesPanel,
  company: CompanyPanel,
};

const mobileNavChildren: Record<
  MegaMenuId,
  Array<Pick<MegaLink, "title" | "description" | "href">>
> = {
  solutions: mobileSolutions,
  "who-we-serve": industryLinks,
  // resources: [...resourceLearn, ...resourceInsights],
  company: [...companyAbout, ...companyConnect],
};

function DemoButton({
  className = "",
  full = false,
  onClick,
}: {
  className?: string;
  full?: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href="/"
      onClick={onClick}
      className={cn(
        "button-primary group inline-flex h-10 items-center justify-center gap-2 rounded-[4px] border px-4 text-body font-semibold transition-colors duration-[180ms]",
        full && "w-full",
        className,
      )}
    >
      Request a Demo
      {/* <ArrowRightIcon width={16} height={16} className="transition-transform duration-[180ms] group-hover:translate-x-1" /> */}
    </a>
  );
}

export default function SiteHeader() {
  const [openId, setOpenId] = useState<MegaMenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<MegaMenuId | null>(null);
  const rootRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number>();

  const cancelClose = useCallback(() => {
    window.clearTimeout(closeTimer.current);
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpenId(null), 140);
  }, [cancelClose]);

  const closeAll = useCallback(() => {
    cancelClose();
    setOpenId(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [cancelClose]);

  const closeMegaMenu = useCallback(() => {
    cancelClose();
    setOpenId(null);
  }, [cancelClose]);

  const toggleMobileOpen = useCallback(() => {
    setMobileOpen((open) => !open);
  }, []);

  const openMegaMenu = useCallback(
    (id: MegaMenuId) => {
      cancelClose();
      setOpenId(id);
    },
    [cancelClose],
  );

  const toggleMegaMenu = useCallback((id: MegaMenuId) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  const toggleMobileSection = useCallback((id: MegaMenuId) => {
    setMobileExpanded((current) => (current === id ? null : id));
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };
    const onClick = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpenId(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [closeAll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      ref={rootRef}
      className="sticky top-0 z-50 border-b border-nav-line bg-header "
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
    >
      <div className="relative">
      <div className="container grid h-20 grid-cols-[1fr_auto_1fr] items-center max-lg:flex max-lg:justify-between">
        <a
          href="/"
          className="justify-self-start flex items-center"
          aria-label="Zenium home"
          onMouseEnter={closeMegaMenu}
        >
          <img
            src="/ZENIUM_light_logo.png"
            alt="Zenium"
            className="h-9 w-auto block max-sm:h-7 theme-logo-dark"
          />
          <img
            src="/ZENIUM_dark_logo.png"
            alt="Zenium"
            className="hidden h-9 w-auto block max-sm:h-7 theme-logo-light"
          />
        </a>

        <nav className="flex items-center gap-1 max-lg:hidden" aria-label="Main navigation">
          {primaryNav.map((item) => {
            if (!item.mega) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onMouseEnter={closeMegaMenu}
                  onClick={closeAll}
                  className="px-3 py-2 text-body font-medium tracking-[0.01em] !text-nav-ink transition-colors duration-[180ms] hover:!text-orange"
                >
                  {item.label}
                </a>
              );
            }

            const active = openId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-expanded={active}
                aria-controls="zenium-mega-menu"
                onMouseEnter={() => openMegaMenu(item.id as MegaMenuId)}
                onClick={() => toggleMegaMenu(item.id as MegaMenuId)}
                className={cn(
                  "relative flex items-center gap-1 px-3 py-2 text-body font-medium tracking-[0.01em] transition-colors duration-[180ms]",
                  active ? "text-orange" : "text-nav-ink hover:text-orange",
                )}
              >
                {item.label}
                <ChevronDownIcon
                  width={14}
                  height={14}
                  className={cn("transition-transform duration-[180ms]", active && "rotate-180")}
                />
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-[2px] bg-orange transition-opacity duration-[180ms]",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
              </button>
            );
          })}
        </nav>

        <div
          className="justify-self-end flex items-center gap-3 max-lg:hidden"
          onMouseEnter={closeMegaMenu}
        >
          {/* <ThemeToggle /> */}
          <DemoButton />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          {/* <ThemeToggle /> */}
          <button
            type="button"
            className="hidden border-0 bg-transparent text-white max-lg:block"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={toggleMobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {openId && (
        <div
          id="zenium-mega-menu"
          className="absolute left-0 right-0 top-full border-b border-nav-line bg-nav-surface shadow-[0_24px_60px_rgba(0,0,0,0.35)] animate-mega-in max-lg:hidden"
          onMouseEnter={cancelClose}
        >
          <div className="container py-11">
            {(() => {
              const Panel = panels[openId];
              return <Panel onNavigate={closeAll} />;
            })()}
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-20 z-40 flex flex-col bg-header lg:hidden">
          <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile navigation">
            {primaryNav.map((item) => {
              if (!item.mega) {
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={closeAll}
                    className="block border-b border-nav-line py-4 text-base-lg font-medium text-white"
                  >
                    {item.label}
                  </a>
                );
              }

              const id = item.id as MegaMenuId;
              const expanded = mobileExpanded === id;
              const children = mobileNavChildren[id];

              return (
                <div key={id} className="border-b border-nav-line">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => toggleMobileSection(id)}
                    className={cn(
                      "flex w-full items-center justify-between py-4 text-left text-base-lg font-medium",
                      expanded ? "text-orange" : "text-white",
                    )}
                  >
                    {item.label}
                    <span className="text-card leading-none">{expanded ? "–" : "+"}</span>
                  </button>
                  {expanded && (
                    <div className="pb-3">
                      {children.map((child) => (
                        <a
                          key={child.title}
                          href={child.href}
                          onClick={closeAll}
                          className="block border-t border-nav-line py-3"
                        >
                          <span className="block text-body font-semibold text-white">{child.title}</span>
                          <span className="mt-1 block text-caption text-nav-muted">{child.description}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          <div className="p-5">
            <DemoButton full onClick={closeAll} />
          </div>
        </div>
      )}
      </div>
    </header>
  );
}
