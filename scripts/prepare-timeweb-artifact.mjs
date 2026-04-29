#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const [, , targetDirArg, siteUrlArg] = process.argv;

if (!targetDirArg || !siteUrlArg) {
  console.error("Usage: node scripts/prepare-timeweb-artifact.mjs <dir> <site-url>");
  process.exit(1);
}

const targetDir = path.resolve(process.cwd(), targetDirArg);
const sourceBaseUrl = "https://yaroslavsigidin.github.io/woodholding";
const siteUrl = siteUrlArg.replace(/\/+$/, "");

const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }

    files.push(fullPath);
  }

  return files;
};

const textExtensions = new Set([".html", ".xml", ".txt"]);

for (const filePath of walk(targetDir)) {
  const ext = path.extname(filePath).toLowerCase();

  if (textExtensions.has(ext)) {
    const current = fs.readFileSync(filePath, "utf8");
    const next = current.replaceAll(sourceBaseUrl, siteUrl);

    if (next !== current) {
      fs.writeFileSync(filePath, next);
    }
  }

  if (path.basename(filePath) === "site.webmanifest") {
    const manifest = JSON.parse(fs.readFileSync(filePath, "utf8"));
    manifest.start_url = "/";
    manifest.scope = "/";
    fs.writeFileSync(filePath, `${JSON.stringify(manifest, null, 2)}\n`);
  }
}

