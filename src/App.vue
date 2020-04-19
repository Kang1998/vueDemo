<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
    <main-tabbar  expect="/detail"/>
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
