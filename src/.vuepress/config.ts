import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  // alias: {
  //   "@theme-hope/modules/blog/components/BlogHero": path.resolve(
  //     __dirname,
  //     "./components/BlogHero.vue",
  //   ),
  // },

  theme,
  // Enable it with pwa
  // shouldPrefetch: false,

  base: "/",

  lang: "zh-CN",
  title: "Neo's Blog",
  description: "hello world",

  // Enable it with pwa
  // shouldPrefetch: false,
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
    shikiPlugin({
      // 你的选项
      theme: "one-dark-pro",
    }),
  ],
});
