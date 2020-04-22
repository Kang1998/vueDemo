<template>
  <div id="detail">
    <!-- 导航 -->
    <detail-nav-bar/>
    <!-- 轮播图 -->
    <detail-swiper :banners="topImages"/>
      
  </div>
</template>

<script>
import DetailNavBar from './detailComps/DetailNavBar'
import SliderItem from 'components/common/swiper/SliderItem'
import {getDetail} from 'network/detail'
import DetailSwiper from './detailComps/DetailSwiper'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      topImages: [],
    }
  },
  created() {
    // console.log(this.$route);
    this.iid = this.$route.params.id
    getDetail(this.iid).then(res => {
      console.log(res);
      this.topImages = res.result.itemInfo.topImages
    })
  },
}
</script>

<style scoped>
</style>