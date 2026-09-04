import sharp from "sharp";
import fs from "fs";
import path from "path";

const newsDir = path.join("public", "news");
const files = fs.readdirSync(newsDir).filter((f) => f.endsWith(".png"));

for (const file of files) {
  const input = path.join(newsDir, file);
  const output = path.join(newsDir, file.replace(/\.png$/i, ".webp"));
  const before = fs.statSync(input).size;
  await sharp(input)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(output);
  const after = fs.statSync(output).size;
  console.log(
    `${file} ${Math.round(before / 1024)}KB -> ${path.basename(output)} ${Math.round(after / 1024)}KB`,
  );
}

for (const name of ["aqwe", "image"]) {
  const input = path.join("public", `${name}.png`);
  if (!fs.existsSync(input)) continue;
  const output = path.join("public", `${name}.webp`);
  const before = fs.statSync(input).size;
  await sharp(input)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(output);
  const after = fs.statSync(output).size;
  console.log(
    `${name}.png ${Math.round(before / 1024)}KB -> ${name}.webp ${Math.round(after / 1024)}KB`,
  );
}
