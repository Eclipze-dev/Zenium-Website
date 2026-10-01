"use client";

import { useEffect, useState } from "react";

export function useCmsDark() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const read = () => setDark(root.getAttribute("data-cms-theme") === "dark");
    read();
    const observer = new MutationObserver(read);
    observer.observe(root, { attributes: true, attributeFilter: ["data-cms-theme"] });
    return () => observer.disconnect();
  }, []);

  return dark;
}
