import type { NextConfig } from "next";

/**
 * GitHub Pages serves this project from https://<user>.github.io/myresume/,
 * so the production build needs a base path. Local `next dev` keeps the site
 * at "/" — the prefix is only applied inside the Pages workflow.
 */
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
// A user/organisation Pages site reports "/"; Next.js wants an empty string there.
const basePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");

const nextConfig: NextConfig = {
  // Emit a plain HTML/CSS/JS bundle into ./out — GitHub Pages has no Node server.
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
