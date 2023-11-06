import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme(
  {
    fullscreen: true,
    hotReload: true,
    logo: "/logo.png",
    author: {
      name: "Neo",
      url: "https://neocoder.top/",
      email: "neoli.coder@gmail.com",
    },
    iconAssets: "fontawesome-with-brands",
    hostname: "https://neocoder.top/",
    // 项目库地址，用于点击在GitHub上修改时跳转到仓库md文件目录
    repo: "NeoLi-Coder/neoBlog",
    repoLabel: "GitHub",
    // 是否在导航栏内显示仓库链接，默认为 `true`
    repoDisplay: false,
    docsDir: "src",
    // navbar
    navbar,

    // sidebar
    sidebar,

    footer: "默认页脚",

    displayFooter: true,

    blog: {
      description: "一个全栈开发者",
      roundAvatar: true,
      intro: "/intro.html",
      timeline: "TimeLine",
      articlePerPage: 10,
      articleInfo: ["Author", "Original", "Date", "PageView", "Category", "Tag", "ReadingTime"],
      medias: {
        BiliBili: "https://space.bilibili.com/565415069",
        Gitee: "https://gitee.com/null1970",
        GitHub: "https://github.com/NeoLi-Coder",
      },
    },

    // 文章加密
    encrypt: {
      config: {
        "/demo/encrypt.html": ["1234"],
      },
    },

    // page meta
    metaLocales: {
      editLink: "Edit Page On GitHub",
    },

    plugins: {
      prismjs: false,

      blog: true,

      // install @waline/client before enabling it
      // WARNING: This is a test server for demo only.
      // You should create and use your own comment service in production.
      // 评论组件
      comment: {
        provider: "Waline",
        serverURL: "https://blog-d5ytghixn-nullsoul.vercel.app/",
      },
      // 视频播放组件
      components: {
        // 你想使用的组件
        components: ["ArtPlayer", "AudioPlayer", "VideoPlayer", "Badge", "BiliBili", "YouTube", "PDF", "Share", "SiteInfo", "VidStack"],
      },

      // all features are enabled for demo, only preserve features you need here
      mdEnhance: {
        // 自定义对齐
        align: true,
        attrs: true,
        card: true,
        codetabs: true,
        // 代码演示
        demo: true,

        // 启用 figure
        figure: true,
        // 启用图片懒加载
        imgLazyload: true,
        // 启用图片标记
        imgMark: true,
        // 启用图片大小
        imgSize: true,
        // 导入文件
        include: true,
        // 待办
        tasklist: true,
        // 脚注
        footnote: true,

        mermaid: true,
        // 自定义容器
        container: true,

        // 标记
        mark: true,
        // 演示
        playground: {
          presets: ["ts", "vue"],
        },
        // 幻灯片
        revealJs: {
          plugins: ["highlight", "math", "search", "notes", "zoom"],
        },
        // install chart.js before enabling it
        // chart: true,

        // install echarts before enabling it
        // echarts: true,

        // gfm requires mathjax-full to provide tex support
        // gfm: true,

        // install katex before enabling it
        // katex: true,

        // install mathjax-full before enabling it
        // mathjax: true,

        // 样式化
        stylize: [
          {
            matcher: "Recommended",
            replacer: ({ tag }) => {
              if (tag === "em")
                return {
                  tag: "Badge",
                  attrs: { type: "tip" },
                  content: "Recommended",
                };
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,

        // install @vue/repl before enabling it
        // vuePlayground: true,
      },

      // uncomment these if you want a PWA
      // pwa: {
      //   favicon: "/favicon.ico",
      //   cacheHTML: true,
      //   cachePic: true,
      //   appendBase: true,
      //   apple: {
      //     icon: "/assets/icon/apple-icon-152.png",
      //     statusBarColor: "black",
      //   },
      //   msTile: {
      //     image: "/assets/icon/ms-icon-144.png",
      //     color: "#ffffff",
      //   },
      //   manifest: {
      //     icons: [
      //       {
      //         src: "/assets/icon/chrome-mask-512.png",
      //         sizes: "512x512",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-mask-192.png",
      //         sizes: "192x192",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-512.png",
      //         sizes: "512x512",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-192.png",
      //         sizes: "192x192",
      //         type: "image/png",
      //       },
      //     ],
      //     shortcuts: [
      //       {
      //         name: "Demo",
      //         short_name: "Demo",
      //         url: "/demo/",
      //         icons: [
      //           {
      //             src: "/assets/icon/guide-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // },
    },
  },
  { custom: true }
);
