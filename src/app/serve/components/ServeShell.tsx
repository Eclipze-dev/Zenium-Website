"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import UtilitiesOverviewSection from "../utilities/components/UtilitiesContentSections";
import { ServeAudienceOverviewSection } from "./ServeAudienceSections";
import ServeHeroSection from "./ServeHeroSection";
import {
  citiesContent,
  commercialContent,
  getServeAudienceIdFromPath,
  getServeHeroMedia,
  microgridContent,
  prosumersContent,
  type ServeAudienceId,
} from "./serveData";

const HEADER_OFFSET = 80; // sticky SiteHeader h-20 fallback
const TABS_GAP = 28; // space between sticky header and locked tabs

const audienceOverviewById: Partial<
  Record<ServeAudienceId, React.ReactNode>
> = {
  utilities: <UtilitiesOverviewSection />,
  cities: <ServeAudienceOverviewSection content={citiesContent} />,
  commercial: <ServeAudienceOverviewSection content={commercialContent} />,
  microgrid: <ServeAudienceOverviewSection content={microgridContent} />,
  prosumers: <ServeAudienceOverviewSection content={prosumersContent} />,
};

export default function ServeShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active = getServeAudienceIdFromPath(pathname) ?? "utilities";
  const media = getServeHeroMedia(active);
  const prevPathnameRef = useRef<string | null>(null);

  useLayoutEffect(() => {
    const prevPathname = prevPathnameRef.current;
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    if (prevPathname === null) {
      // Fresh visit to Who We Serve — start at the top of the page.
      window.scrollTo(0, 0);
    } else if (prevPathname !== pathname) {
      // Switching audience tabs — keep filters locked below the sticky header.
      const tabs = document.getElementById("serve-audience-tabs");
      const header = document.querySelector("header");
      if (tabs) {
        const headerHeight =
          header?.getBoundingClientRect().height ?? HEADER_OFFSET;
        const top =
          tabs.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          TABS_GAP;
        window.scrollTo(0, Math.max(0, top));
      }
    }

    prevPathnameRef.current = pathname;
    html.style.scrollBehavior = previous;
  }, [pathname]);

  return (
    <>
      <ServeHeroSection
        active={active}
        image={media.image}
        imageAlt={media.imageAlt}
        beforeImage={audienceOverviewById[active] ?? null}
      />
      <div key={active}>{children}</div>
    </>
  );
}
