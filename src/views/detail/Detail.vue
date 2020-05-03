<template>
  <div id="detail">
        <!-- 导航 -->
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content" ref="scroll">
      <!-- 轮播图 -->
    <detail-swiper :banners="topImages"/>
    <detail-base-info :goods="goods" />
    <detail-shop-info :shopInfo="shopInfo"/>
    <detail-images :detailImage="detailImage" @load-over="loadOver"/>
      
    </scroll>
    <detail-bottom-bar class="bottom-bar" @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from './detailComps/DetailNavBar'
import DetailSwiper from './detailComps/DetailSwiper'
import DetailBaseInfo from './detailComps/DetailBaseInfo'
import DetailShopInfo from './detailComps/DetailShopInfo'
import DetailImages from './detailComps/DetailImages'
import DetailBottomBar from './detailComps/DetailBottomBar'

import SliderItem from 'components/common/swiper/SliderItem'
import Scroll from 'components/common/scroll/BScroll'

import {getDetail, Goods} from 'network/detail'

import {debounce} from 'assets/utils/debounce'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImages,
    DetailBottomBar,

    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: null,
      shopInfo: null,
      detailImage: [],
    }
  },
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.id

    // 请求detail数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.result;
      // 轮播图数据
      this.topImages = data.itemInfo.topImages

      // 商品信息数据
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      // 店铺信息 
      this.shopInfo = data.shopInfo
      this.detailImage = data.detailInfo.detailImage[0].list

    })
  },
  methods: {
    // 刷新视口高度
    loadOver() {
       debounce(this.$refs.scroll.scroll.refresh())
    },
    // 将物品加入vuex管理的购物车
    addToCart() {
      // 获取购物车要展示的信息
      const product = {
        'iid': this.iid,
        'img': this.topImages[0],
        'title': this.goods.title,
        'desc': this.goods.desc,
        'price':this.goods.realPrice
      }
      // 加入购物车中  vuex  通过mutations可以给检测到变化
        // console.log(this.$store);
        // 通过commit去调用mutations中的方法 并将payload传过去
        this.$store.store.commit("addCart", product)
    }
  },
  deactivated() {
    console.log('aaa');
  },
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 66;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  background-color: #fff;
  z-index: 99;
}

.content {
  height: calc(100% - 44px);
}

.bottom-bar {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 99;
}
</style>