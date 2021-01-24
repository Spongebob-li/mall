import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import Vuelazyload from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false


Vue.prototype.$bus = new Vue() // vue 实例可以作为事件总线,添加事件总线对象

// 安装 toast 插件
Vue.use(toast)

//  解决移动端300ms的延迟 
FastClick.attach(document.body)

// 使用懒加载的插件
Vue.use(Vuelazyload,{
  loading:require('./assets/img/common/placeholder.png')
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
