import fs from "fs";
import path from "path";

const base =
  "d:/Work/work/Zenio-Website/node_modules/lucide-react/dist/esm/icons";
const outFile =
  "d:/Work/work/Zenio-Website/src/components/icons/lucideIcons.tsx";

const iconNames = [
  "Activity",
  "Award",
  "BadgeCheck",
  "BarChart3",
  "Battery",
  "BellRing",
  "BookOpen",
  "Brain",
  "Briefcase",
  "Building2",
  "Cable",
  "Check",
  "CircleCheck",
  "CircleDollarSign",
  "Cloud",
  "Cpu",
  "Database",
  "Download",
  "Factory",
  "File",
  "FileText",
  "Gauge",
  "Globe2",
  "Headphones",
  "HeartHandshake",
  "History",
  "Info",
  "Lamp",
  "Layers",
  "LayoutDashboard",
  "LayoutGrid",
  "Lightbulb",
  "LineChart",
  "Lock",
  "LockKeyhole",
  "Mail",
  "MapPin",
  "Monitor",
  "Network",
  "Newspaper",
  "Phone",
  "Play",
  "Puzzle",
  "Radio",
  "Receipt",
  "Search",
  "Server",
  "Settings",
  "Share2",
  "ShieldCheck",
  "Sparkles",
  "Sun",
  "TestTube2",
  "Timer",
  "TrendingUp",
  "Unlock",
  "User",
  "Users",
  "Zap",
];

function toKebab(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replace(/([a-zA-Z])(\d+)/g, "$1-$2")
    .toLowerCase();
}

function resolveIconFile(name) {
  let file = path.join(base, `${toKebab(name)}.js`);
  const seen = new Set();
  while (fs.existsSync(file)) {
    if (seen.has(file)) break;
    seen.add(file);
    const src = fs.readFileSync(file, "utf8");
    const reExport = src.match(
      /export\s*\{\s*default\s*\}\s*from\s*['"]\.\/([^'"]+)['"]/,
    );
    if (reExport) {
      file = path.join(base, reExport[1].replace(/\.js$/, "") + ".js");
      continue;
    }
    return { file, src };
  }
  return null;
}

function parseNodes(src) {
  const m = src.match(/createLucideIcon\([^,]+,\s*(\[[\s\S]*?\])\s*\);/);
  if (!m) return null;
  try {
    return Function(`"use strict"; return (${m[1]})`)();
  } catch {
    return null;
  }
}

function attrsToJsx(attrs) {
  return Object.entries(attrs)
    .filter(([k]) => k !== "key")
    .map(([k, v]) => {
      if (typeof v === "number") return `${k}={${v}}`;
      return `${k}="${String(v).replace(/"/g, "&quot;")}"`;
    })
    .join(" ");
}

function nodesToJsx(nodes) {
  return nodes
    .map(([tag, attrs]) => `    <${tag} ${attrsToJsx(attrs)} />`)
    .join("\n");
}

let body = `/* Auto-generated local Lucide SVGs — no lucide-react runtime for these icons. */
import React from "react";
import type { IconsProps } from "./icons";

export type LucideIcon = React.FC<
  IconsProps & { strokeWidth?: string | number; size?: string | number }
>;

function createIcon(name: string, children: React.ReactNode): LucideIcon {
  const Icon: LucideIcon = ({
    width,
    height,
    size = 24,
    className = "",
    strokeWidth = 2,
    ...props
  }) => (
    <svg
      width={width ?? size}
      height={height ?? size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      data-icon={name}
      {...props}
    >
      {children}
    </svg>
  );
  Icon.displayName = name;
  return Icon;
}

`;

const missing = [];
for (const name of iconNames) {
  const resolved = resolveIconFile(name);
  if (!resolved) {
    missing.push(`${name} (file)`);
    continue;
  }
  const nodes = parseNodes(resolved.src);
  if (!nodes) {
    missing.push(`${name} (parse)`);
    continue;
  }
  body += `export const ${name} = createIcon(\n  "${name}",\n  <>\n${nodesToJsx(nodes)}\n  </>,\n);\n\n`;
}

fs.writeFileSync(outFile, body);
console.log("Wrote", outFile);
console.log("Missing:", missing.length ? missing.join(", ") : "none");
console.log("Icons:", iconNames.length - missing.length);
