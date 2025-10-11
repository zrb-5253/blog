---
title: 布局与功能禁用
icon: gears
order: 4
category:
  - 使用指南
tag:
  - 禁用

navbar: false
sidebar: false

breadcrumb: false
pageInfo: false
contributors: false
editLink: false
lastUpdated: false
prev: false
next: false
comment: false
footer: false

backtotop: false
---

你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。

<!-- more -->

本页面就是一个示例，禁用了如下功能:

- 导航栏
- 侧边栏
- 路径导航
- 页面信息
- 贡献者
- 编辑此页链接
- 更新时间
- 上一篇/下一篇 链接
- 评论
- 页脚
- 返回顶部按钮
<vac 
  :end-time="new Date('2024-12-31 23:59:59').getTime()"
  tag="div"
>
  <template slot="process" slot-scope="{ timeObj }">
    <div style="text-align: center; padding: 20px; background: #f5f5f5; border-radius: 8px;">
      <h3>距离2025年还有：</h3>
      <div style="font-size: 24px; font-weight: bold;">
        {{ timeObj.d }}天 {{ timeObj.h }}小时 {{ timeObj.m }}分钟 {{ timeObj.s }}秒
      </div>
    </div>
  </template>
  <template slot="finish">
    <div style="text-align: center; color: red; font-size: 24px;">
      🎉 新年快乐！
    </div>
  </template>
</vac>

## 测试2：简单用法
<vac :end-time="new Date('2024-06-01 00:00:00').getTime()">
  倒计时：{{ time.d }}天 {{ time.h }}小时 {{ time.m }}分钟 {{ time.s }}秒
</vac>