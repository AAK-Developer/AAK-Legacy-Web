import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const previewBase = process.env.AAK_PREVIEW_BASE || "/";

export default defineConfig({
  site: "https://aaklegacy.com",
  base: previewBase,
  integrations: [sitemap()],
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory"
  }
});
