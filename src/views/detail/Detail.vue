<template>
  <div id="detail">
    <!-- 导航 -->
    <detail-nav-bar/>
    <!-- 轮播图 -->
  </div>
</template>

<script>
import DetailNavBar from './detailComps/DetailNavBar'
export default {
  name: 'Detail',
  components: {
    DetailNavBar
  },
  data() {
    return {
      iid: null
    }
  },
  created() {
    this.iid = this.$route.params

  },
}
</script>

<style scoped>

</style>
