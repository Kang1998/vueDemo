import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Router from "vue-router";
import store from "./store";

// 全局注册Swiper
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.use(VueAwesomeSwiper);
import "swiper/dist/css/swiper.css";
import "./assets/css/base.css";

import { Button, Sidebar, SidebarItem, GridItem, Grid } from "vant";
import { Image as VanImage } from 'vant';

Vue.use(Button)
  .use(Sidebar)
  .use(SidebarItem)
  .use(Grid)
  .use(GridItem)
  .use(VanImage);

Vue.config.productionTip = false;

// 事件总线定义成一个新的vue实例
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// 解决重复跳转路由err
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
