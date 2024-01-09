import * as path from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "PlatformPlatform",
  description: "PlatformPlatform documentation",
  icon: "/icon.png",
  logo: {
    light: "/logo-long.png",
    dark: "/logo-long.png",
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/platformplatform/PlatformPlatform",
      },
    ],
  },
});
