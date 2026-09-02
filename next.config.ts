import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Fully static site — `next build` emits a plain HTML/CSS/JS bundle to `out/`,
  // deployable on any static host (Cloudflare Pages) with no Node adapter.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
