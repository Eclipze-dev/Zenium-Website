"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { serveAudiences, type ServeAudienceId } from "./serveData";

const ServeAudienceTabs = ({
  active,
}: {
  active: ServeAudienceId;
}) => {
  const tablistRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const updateIndicator = useCallback(() => {
    const tab = tabRefs.current[active];
    const list = tablistRef.current;
    if (!tab || !list) return;
    const listRect = list.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    setIndicator({
      left: tabRect.left - listRect.left + list.scrollLeft,
      width: tabRect.width,
    });
  }, [active]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  return (
    <nav
      ref={tablistRef}
      className="relative mt-[50px] flex border-b border-line max-sm:overflow-x-auto max-sm:[-ms-overflow-style:none] max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden"
      aria-label="Who we serve audiences"
    >
      {serveAudiences.map((audience) => {
        const isActive = audience.id === active;
        return (
          <Link
            key={audience.id}
            href={audience.href}
            ref={(el) => {
              tabRefs.current[audience.id] = el;
            }}
            aria-current={isActive ? "page" : undefined}
            prefetch
            scroll={false}
            className={cn(
              "relative flex-1 shrink-0 pb-3 text-center text-button !font-normal transition-colors duration-200 max-sm:flex-none max-sm:px-4",
              isActive ? "!text-orange" : "text-muted hover:!text-orange",
            )}
          >
            {audience.label}
          </Link>
        );
      })}
      <span
        className="pointer-events-none absolute bottom-0 h-[2px] rounded-full bg-orange transition-[left,width] duration-300 ease-out"
        style={{ left: indicator.left, width: indicator.width }}
        aria-hidden="true"
      />
    </nav>
  );
};

export default ServeAudienceTabs;
