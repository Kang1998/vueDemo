import Vue from 'vue'
import VueRouter from 'vue-router'
import TabBar from 'components/common/tabbar/TabBar.vue'
// import Home from '../views/home/home.vue'
// import Category from '../views/category/category.vue'
// import Profile from '../views/profile/profile.vue'
// import ShopCar from '../views/shopcar/shopcar.vue'
// 使用懒加载
const Home = () => import('@/views/home/Home.vue')
const Category = () => import('@/views/category/Category.vue')
const Profile = () => import('@/views/profile/Profile.vue')
const ShopCar = () => import('@/views/shopcar/ShopCar.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'TabBar',
    component: TabBar
  },
  {
    path: '/Category',
    name: 'Category',
    component: Category
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/ShopCar',
    name: 'ShopCar',
    component: ShopCar
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
})
