"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import UtilitiesOverviewSection from "../utilities/components/UtilitiesContentSections";
import { ServeAudienceOverviewSection } from "./ServeAudienceSections";
import ServeAudienceTabs from "./ServeAudienceTabs";
import { ServeHeroIntro, ServeHeroMedia } from "./ServeHeroSection";
import {
  citiesContent,
  commercialContent,
  getServeAudienceIdFromPath,
  getServeHeroMedia,
  microgridContent,
  prosumersContent,
  type ServeAudienceId,
} from "./serveData";

const HEADER_OFFSET = 80; // sticky SiteHeader h-20 fallback (h-16 / 64px on tablet)
const TABS_GAP = 0; // sticky bar sits flush under header; spacing is pt on the bar

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

  useEffect(() => {
    const prevPathname = prevPathnameRef.current;

    if (prevPathname === null) {
      // Fresh visit to Who We Serve — start at the top of the page.
      window.scrollTo({ top: 0, behavior: "auto" });
    } else if (prevPathname !== pathname) {
      // Switching audience tabs — scroll back to the tabs' natural page position
      // (not getBoundingClientRect on the sticky bar, which stays under the header).
      const anchor = document.getElementById("serve-audience-tabs-anchor");
      const header = document.querySelector("header");
      if (anchor) {
        const headerHeight =
          header?.getBoundingClientRect().height ?? HEADER_OFFSET;
        const top =
          anchor.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          TABS_GAP;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
    }

    prevPathnameRef.current = pathname;
  }, [pathname]);

  return (
    <div aria-labelledby="serve-hero-title">
      <ServeHeroIntro />

      {/* Tall wrapper so sticky tabs remain through hero media + page sections. */}
      <div>
        <div
          id="serve-audience-tabs-anchor"
          className="mt-[50px] h-0 w-full"
          aria-hidden="true"
        />
        <div className="sticky top-20 z-40 bg-bg1 pt-6 max-lg:top-16 max-lg:pt-3">
          <div className="container">
            <ServeAudienceTabs active={active} />
          </div>
        </div>

        <ServeHeroMedia
          image={media.image}
          imageAlt={media.imageAlt}
          beforeImage={audienceOverviewById[active] ?? null}
        />

        <div key={active}>{children}</div>
      </div>
    </div>
  );
}
