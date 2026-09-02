import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Fully static site — emit a plain HTML/CSS/JS bundle to `out/`.
  // Deployable on any static host (Cloudflare Pages, Netlify, GitHub Pages…)
  // with no Node adapter.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
