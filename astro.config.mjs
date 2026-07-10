import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import aws from "astro-sst";

export default defineConfig({
  output: "static",
  adapter: aws(),
  site: "https://bella.pathwayanalytics.com",
  integrations: [sitemap()],
});
