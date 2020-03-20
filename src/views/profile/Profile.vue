<template>
  <div id="profile">
    <nav-bar>
      <div slot="center">我的</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "Profile",
  components: {
    NavBar
  }
}
</script>

<style>
  @import '~assets/css/base.css';
</style>