import { defineClientConfig } from "vuepress/client";
import Blog from "./layouts/Blog.vue";
import vueAwesomeCountdown from 'vue-awesome-countdown'
export default defineClientConfig({
  layouts: {
    // 注册自定义的Blog布局
    Blog,
  },
  enhance({ app }) {
    console.log('开始注册 vue-awesome-countdown 插件')
    
    try {
      app.use(vueAwesomeCountdown, 'vac')
      console.log('vue-awesome-countdown 插件注册成功')
      
      // 测试是否注册成功
      if (app.component('vac')) {
        console.log('vac 组件已成功注册')
      } else {
        console.error('vac 组件注册失败')
      }
    } catch (error) {
      console.error('插件注册错误:', error)
    }
  },
  
  setup() {
    console.log('客户端配置加载完成')
  },
});