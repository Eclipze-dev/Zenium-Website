"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons/icons";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = (localStorage.getItem("zenium-theme") as Theme) || "dark";
    setTheme(stored);
    document.documentElement.setAttribute("data-theme", stored);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("zenium-theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  if (!mounted) {
    return (
      <div className="h-[28px] w-[56px] rounded-full border border-line bg-card" aria-hidden="true" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="relative flex h-[28px] w-[56px] items-center rounded-full border border-line bg-card transition-colors duration-300 hover:border-orange/50"
    >
      <span
        className={`absolute flex h-[22px] w-[22px] items-center justify-center rounded-full bg-orange text-white transition-all duration-300 ease-in-out ${
          theme === "dark" ? "left-[2px]" : "left-[32px]"
        }`}
      >
        {theme === "dark" ? <MoonIcon width={13} height={13} /> : <SunIcon width={13} height={13} />}
      </span>
    </button>
  );
}
