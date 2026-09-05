import fs from "fs";
import path from "path";

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (/\.(tsx|ts)$/.test(e.name)) acc.push(p);
  }
  return acc;
}

const root = "d:/Work/work/Zenio-Website/src";
const files = walk(root);
let n = 0;

for (const f of files) {
  const s = fs.readFileSync(f, "utf8");
  if (!s.includes("lucide-react")) continue;
  const next = s.replaceAll(
    /from ["']lucide-react["']/g,
    'from "@/components/icons/lucideIcons"',
  );
  if (next !== s) {
    fs.writeFileSync(f, next);
    n += 1;
    console.log("updated", path.relative("d:/Work/work/Zenio-Website", f));
  }
}

console.log("files", n);
