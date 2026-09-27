"use client";

import { useLayoutEffect } from "react";

/** Keep a reload at the top. The browser otherwise restores the previous scroll position. */
export default function ScrollToTopOnReload() {
  useLayoutEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    if (nav?.type !== "reload") return;

    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previous;
  }, []);

  return null;
}
