<template> 
    <nav-bar id="detail-nav-bar">
      <div slot="left">
        <img src="~assets/img/back.svg" alt="">
      </div>
      <div slot="center">
        
      </div>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  }
}
</script>

<style scoped>
  #detail-nav-bar {
    background-color: #fff;
  }
</style>