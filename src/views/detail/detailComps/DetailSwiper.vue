<template>
  <div>
    <swiper :options="swiperOptions" ref="swiper">
        <swiper-slide v-for="(item, index) in banners"  class="slide-item"
              :key="index">
              <img :src="item">
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" ></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: "DetailSwiper",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      // banners:[],
      swiperOptions: {
        autoplay: {
          delay: 1500,
          disableOnInteraction: false, //用户滑动后继续轮播
        },
        loop : true,
        speed: 300, //切换图片的速度
        splacebetten: 30,
        pagination: {
          el: '.swiper-pagination'  //分页器放在Swiper外
      },
      },
    }
  },
  props: {
    banners: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
  .slide-item {
    height: 40vh;
  }

  .swiper-pagination {
    position: relative;
    bottom: 30px;
  }

</style>

<style>
  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 1;
    margin: 2px;
  }
  .swiper-pagination-bullet-active {
    background-color: #1296bf;
  }
</style>