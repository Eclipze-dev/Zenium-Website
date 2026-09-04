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
    .replace(/\/news\/([^"'`]+)\.png/g, "/news/$1.webp")
    .replace(/\/image\.png/g, "/image.webp")
    .replace(/\/aqwe\.png/g, "/aqwe.webp");

  if (updated !== original) {
    fs.writeFileSync(file, updated);
    console.log("updated", file);
  }
}
