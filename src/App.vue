<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    
    <main-tabbar v-if="true"/>
  </div>
</template>

<script>
import MainTabbar from 'components/content/maintabbar/Maintabbar'
export default {
  name: 'App',
  components: {
    MainTabbar,
  },
}


</script>

<style scoped>
</style>
