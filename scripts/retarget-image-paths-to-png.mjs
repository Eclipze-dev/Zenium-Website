import fs from "fs";
import path from "path";

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (/\.(ts|tsx)$/.test(entry.name)) acc.push(full);
  }
  return acc;
}

for (const file of walk("src")) {
  const original = fs.readFileSync(file, "utf8");
  const updated = original
    .replace(/\/news\/([^"'`]+)\.webp/g, "/news/$1.png")
    .replace(/\/image\.webp/g, "/image.png")
    .replace(/\/aqwe\.webp/g, "/aqwe.png");

  if (updated !== original) {
    fs.writeFileSync(file, updated);
    console.log("updated", file);
  }
}
