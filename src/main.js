import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'

Vue.config.productionTip = false

// 事件总线定义成一个新的vue实例
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// 解决重复跳转路由err
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}