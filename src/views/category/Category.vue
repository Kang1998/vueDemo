<template>
  <div id="category">
    <nav-bar>
      <div slot="center">分类</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "category",
  components: {
    NavBar
  }
}
</script>

<style>
  @import '~assets/css/base.css';
</style>