import { defineClientConfig } from "vuepress/client";
import Blog from "./layouts/Blog.vue";

export default defineClientConfig({
  layouts: {
    // 注册自定义的Blog布局
    Blog,
  },
});