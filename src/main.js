// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入Mint UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 请求数据
import VueResource from 'vue-resource'
// 引入font-awesome字体图标
import 'font-awesome/css/font-awesome.css'
// 引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// 引用Mint UI
Vue.use(MintUI)
// 引用VueResource
Vue.use(VueResource)
Vue.config.productionTip = false
// 引用Element ui
Vue.use(ElementUI)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
