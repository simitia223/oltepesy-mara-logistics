import type { NextConfig } from "next";
import path from "node:path";

// When deploying to a GitHub Pages *project* site the app is served from
// https://<user>.github.io/<repo>/ , so it needs a base path. The deploy
// workflow sets PAGES_BASE_PATH. For a custom domain (apex) leave it unset.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Fully static site — emit a plain HTML/CSS/JS bundle to `out/`.
  // Deployable on any static host with no Node adapter.
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  images: { unoptimized: true },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
