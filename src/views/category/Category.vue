<template>
  <div id="category">
    <nav-bar>
      <div slot="center">分类</div>
    </nav-bar>
    <scroll>
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/BScroll'

export default {
  name: "category",
  components: {
    NavBar,
    Scroll
  }
}
</script>

<style>
  @import '~assets/css/base.css';
</style>