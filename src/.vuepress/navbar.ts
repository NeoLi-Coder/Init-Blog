import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "文章",
    icon: "newspaper",
    link: "/article",
  },
  {
    text: "分类",
    icon: "arrow-up-wide-short",
    link: "/category",
  },
  {
    text: "标签",
    icon: "tags",
    link: "/tag"
  },
  {
    text: "时间线",
    icon: "history",
    link: "/timeline"
  },
  {
    text: "关于我",
    icon: "circle-user",
    link: "/intro"
  },
]);
