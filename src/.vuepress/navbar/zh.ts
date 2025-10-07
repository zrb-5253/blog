import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  // "/zh/demo/",
  "/zh/code/",
  "/zh/study/",
  "/zh/book/",
  // "/zh/TEST001/",
  { text: "测试", link: "/zh/TEST001/test002.md", icon: "bug" },

  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
