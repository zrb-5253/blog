import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
  "/zh/book/": [
    "", // 这对应 `/zh/book/README.md` 文件，通常作为目录页
    {
      text: "书籍推荐",
      icon: "book", // 可以选择一个合适的图标
      prefix: "book/",
      link: "demo/",
      children: "structure", // 自动生成 `books/` 目录下的所有子项
    },
    {
      text: "读书笔记",
      icon: "note",
      prefix: "notes/",
      children: "structure", // 自动生成 `notes/` 目录下的所有子项
    },
  ],
  "/zh/code/": [
    "", // 这对应 `/zh/book/README.md` 文件，通常作为目录页
    {
      text: "编程",
      icon: "book", // 可以选择一个合适的图标
      prefix: "promgram/",
      
      children: "structure", 
    },
    {
      text: "工具",
      icon: "note",
      prefix: "tools/",
      children: "structure", 
    },

  ],
  "/zh/study/": [
    "", // 这对应 `/zh/book/README.md` 文件，通常作为目录页
    {
      text: "写论文必学",
      icon: "book", // 可以选择一个合适的图标
      
      
      children: "structure", // 自动生成 `books/` 目录下的所有子项
    },

  ],
});
