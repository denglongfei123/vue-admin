import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import request from '@/utils/request'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/css/common.css'
import '@/assets/css/iconfont.css'

import Cookie from 'js-cookie'

Vue.use(ElementUI, {
  size: Cookie.get('size') || 'medium'
})
Vue.use(request)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
