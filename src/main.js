import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 创建vue实例，把App根组件替换到这里
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
