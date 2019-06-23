import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

// 创建vue实例，把App根组件替换到这里
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
