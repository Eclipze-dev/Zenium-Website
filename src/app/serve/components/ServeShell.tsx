"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import ServeHeroSection from "./ServeHeroSection";
import {
  getServeAudienceIdFromPath,
  getServeHeroMedia,
} from "./serveData";

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
      />
      <div key={active}>{children}</div>
    </>
  );
}
