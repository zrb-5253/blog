<!-- .vuepress/layouts/CustomLayout.vue -->
<template>
    <div class="custom-layout-container">
      <!-- 您可以保留导航栏、侧边栏，或完全自定义 -->
      <main class="my-custom-content" :style="{ maxWidth: contentWidth }">
        <Content /> <!-- 此组件将渲染 Markdown 内容 -->
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contentWidth: '90px' // 在此控制宽度
      }
    }
  }
  </script>
  
  <style scoped>
  .my-custom-content {
    margin: 0 auto; /* 居中 */
  }
  </style>