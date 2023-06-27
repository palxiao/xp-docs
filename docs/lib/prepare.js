// 由于docsify为运行时，手动检测卜算子以保证挂载
var timer = setInterval(() => {
    if (document.getElementById('busuanzi_container_site_pv')) {
      const link_element = document.createElement('script')
      link_element.setAttribute('src', 'lib/busuanzi.js')
      document.head.appendChild(link_element)
      clearInterval(timer)
    }
  }, 2000)