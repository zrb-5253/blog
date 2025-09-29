// .vuepress/client.js
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
      // 在客户端执行
      window.addEventListener('load', () => {
        const tagline = document.querySelector('.tagline')
        if (tagline) {
          const text = tagline.textContent
          tagline.innerHTML = `<span class="typewriter-text">${text}</span>`
          
          // 添加打字机效果
          let i = 0
          const speed = 100
          const typewriterElement = tagline.querySelector('.typewriter-text')
          typewriterElement.textContent = ''
          
          function typeWriter() {
            if (i < text.length) {
              typewriterElement.textContent += text.charAt(i)
              i++
              setTimeout(typeWriter, speed)
            }
          }
          
          typeWriter()
        }
      })
    }
  }
})