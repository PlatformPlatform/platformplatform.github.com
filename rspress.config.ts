import * as path from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  globalStyles: path.join(__dirname, "styles/index.css"),
  root: path.join(__dirname, "docs"),
  title: "PlatformPlatform",
  description: "PlatformPlatform documentation",
  icon: "/icon.png",
  logo: {
    light: "/logo-long-light.png",
    dark: "/logo-long-dark.png",
  },
  themeConfig: {
    outlineTitle: "Table of Contents",
    lastUpdated: true,
    enableContentAnimation: true,
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/platformplatform/PlatformPlatform",
      },
    ],
    footer: {
      message: "Made with ❤️ by PlatformPlatform",
    },
  },
});
