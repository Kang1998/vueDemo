<template>
  <div id="profile">
    <nav-bar>
      <div slot="center">我的</div>
    </nav-bar>
    <div @click="Print">打印</div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {debounce, throttle} from 'assets/utils/debounce'

export default {
  name: "Profile",
  components: {
    NavBar
  },
  methods: {
    claaa(){
      console.log('aaa');
    },

    Print() {
     debounce(this.claaa, 1000)
    }
    
  },
}
</script>

<style>
  @import '~assets/css/base.css';
</style>