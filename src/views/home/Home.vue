<template>
  <div id="home">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <SliderItem :banners="banners"></SliderItem>
    <RecommendView :recommends="recommends"></RecommendView>     
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import SliderItem from 'components/common/swiper/SliderItem'
import RecommendView from './childComps/RecommendView'


import getMultiData from 'network/home.js'


export default {
  name: "Home",
  data: function() {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    SliderItem,
    RecommendView
  },
  created() {
    getMultiData().then(res => {
      this.banners = res.data.banner['list'];
      this.recommends = res.data.recommend['list'];
    })
  }
}
</script>

<style>
  @import '~assets/css/base.css';
</style>