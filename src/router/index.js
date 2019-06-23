import Vue from 'vue'
import Router from 'vue-router'

// 优先查找文件，如果文件找不到就找目录
// 找到目录，有限加载目录中的index.js
Vue.use(Router)
export default new Router({
  routes: [{
    name: 'home',
    path: '/',
    component: () => import('@/views/home')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login')

  }

  ]
})
