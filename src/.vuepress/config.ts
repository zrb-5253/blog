import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Ice Blog ",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  theme,

  plugins: [
    [
      "vuepress-plugin-meting",
      {
        // 配置Meting，用于获取音乐
        meting: {
          server: "netease", // 音乐平台：netease（网易云音乐）
          type: "playlist",  // 类型：播放列表
          mid: "6838211960", // 歌单ID，需要替换成您自己的
        },
        // 配置APlayer播放器
        aplayer: {
          lrcType: 3,       // 启用歌词显示
          fixed: true,       // 开启固定模式（吸底）
          mini: true,        // 开启迷你模式
          autoplay: false,   // 禁止自动播放（避免打扰用户）
          theme: "#3eaf7c",  // 主题色，可调整以匹配您的网站
          mutex: true,       // 同时只允许一个播放器播放
        }
      },
    ],
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
