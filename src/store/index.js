import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

// 安装插件
Vue.use(Vuex)

// 创建store对象
// Vuex.Store()  S不能小写
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

// 挂载实例到vue
export default {store}