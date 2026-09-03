"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import NewsCard from "./NewsCard";
import {
  newsFilters,
  newsIntro,
  newsItems,
  type NewsFilterId,
} from "./newsData";

export default function NewsSection() {
  const [activeFilter, setActiveFilter] = useState<NewsFilterId>("all");
  const tablistRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return newsItems;
    return newsItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);
  
  const isFeatured = (item?: (typeof newsItems)[number]) =>
    !!item && item.label.toUpperCase().includes("FEATURED");

  const showFeaturedLayout = isFeatured(filteredItems[0]);

  const featured = showFeaturedLayout ? filteredItems[0] : undefined;
  const side = showFeaturedLayout ? filteredItems[1] : undefined;
  const remaining = showFeaturedLayout
    ? filteredItems.slice(2)
    : filteredItems;

  const updateIndicator = () => {
    const tab = tabRefs.current[activeFilter];
    const list = tablistRef.current;
    if (!tab || !list) return;
    const listRect = list.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    setIndicator({
      left: tabRect.left - listRect.left,
      width: tabRect.width,
    });
  };

  useLayoutEffect(() => {
    updateIndicator();
  }, [activeFilter]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeFilter]);

  return (
    <section
      className="pb-[80px] pt-[50px] max-md:pb-[70px] max-md:pt-24"
      aria-labelledby="news-title"
    >
      <div className="container">
        <header className="max-w-auto">
          <p className="mb-[clamp(12px,1.5vw,16px)] text-h4 text-common">
            {newsIntro.eyebrow}
          </p>
          <h1
            id="news-title"
            className="text-h1 m-0 text-common max-sm:text-[clamp(32px,7vw,40px)]"
          >
            {newsIntro.title}{" "}
            <span className="text-h1 text-orange">{newsIntro.accent}</span>
          </h1>
          <p className="mt-[20px] max-w-auto text-p1 text-common2">
            {newsIntro.description}
          </p>
        </header>

        <div
          ref={tablistRef}
          className="relative mt-[40px] inline-flex max-w-full flex-wrap border-b border-[#E5E8EC]"
          role="tablist"
          aria-label="News categories"
        >
          {newsFilters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                ref={(el) => {
                  tabRefs.current[filter.id] = el;
                }}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "relative shrink-0 border-0 bg-transparent px-[40px] pb-3 text-button transition-colors duration-200",
                  isActive
                    ? "text-common"
                    : "text-[#8A97A5] hover:text-common",
                )}
              >
                {filter.label}
              </button>
            );
          })}
          <span
            className="pointer-events-none absolute bottom-0 h-[2px] rounded-full bg-orange transition-[left,width] duration-300 ease-out"
            style={{ left: indicator.left, width: indicator.width }}
            aria-hidden="true"
          />
        </div>

        <div className="mt-[36px] flex flex-col gap-6 max-sm:mt-[28px] max-sm:gap-5">
          {filteredItems.length === 0 ? (
            <p className="py-16 text-center text-p1 text-[#5A6B7C]">
              No posts in this category yet.
            </p>
          ) : (
            <>
              {featured && side ? (
                <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] max-sm:gap-5">
                  <NewsCard {...featured} />
                  <NewsCard {...side} />
                </div>
              ) : featured ? (
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                  <NewsCard {...featured} />
                </div>
              ) : null}

              {remaining.length > 0 && (
                <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 max-sm:gap-5">
                  {remaining.map((item) => (
                    <NewsCard key={item.id} {...item} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}