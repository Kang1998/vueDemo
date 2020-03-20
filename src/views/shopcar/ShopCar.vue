<template>
  <div id="shopcar">
    <nav-bar>
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "shopcar",
  components: {
    NavBar
  }
}
</script>

<style>
  @import '~assets/css/base.css';
</style>