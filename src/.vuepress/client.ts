import { defineClientConfig } from "@vuepress/client";
import { setupRunningTimeFooter } from "./components/presets/footerRunningTime.ts";

import "vuepress-theme-hope/presets/bounce-icon.scss";
import "vuepress-theme-hope/presets/left-blog-info.scss";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";

export default defineClientConfig({
  setup() {
    setupRunningTimeFooter(
      new Date("2023-11-13"),
      {
        // "/": "Running time: :day days :hour hours :minute minutes :second seconds",
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      false,
    );
  },
});
