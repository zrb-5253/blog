import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "编程",
    icon: "code",
    link: "/zh/code",
  },
  {
    text: "科研",
    icon: "user-graduate",
    link: "/zh/study",
  },
  {
    text: "文章",
    icon: "book",
    link: "/zh/book",
  },

  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
