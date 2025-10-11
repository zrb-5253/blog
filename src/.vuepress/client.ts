import { defineClientConfig } from "vuepress/client";
import Blog from "./layouts/Blog.vue";
import vueAwesomeCountdown from 'vue-awesome-countdown'
export default defineClientConfig({
  layouts: {
    // 注册自定义的Blog布局
    Blog,
  },
  enhance({ app }) {
    // 注册 vue-awesome-countdown 插件
    app.use(vueAwesomeCountdown, 'vac')
  },
});