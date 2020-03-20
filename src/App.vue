<template>
  <div id="app">
    <router-view></router-view>
    <main-tabbar/>
  </div>
</template>

<script>
import MainTabbar from 'components/content/maintabbar/Maintabbar'
export default {
  name: 'App',
  components: {
    MainTabbar,
  }
}
</script>

<style>
</style>
