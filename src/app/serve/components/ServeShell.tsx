"use client";

import { useLayoutEffect } from "react";
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

  useLayoutEffect(() => {
    // Shared serve layout does not remount on tab change, so force top.
    // Use instant scroll so html { scroll-behavior: smooth } does not animate down/up.
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
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
