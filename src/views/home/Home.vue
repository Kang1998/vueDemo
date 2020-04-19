<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" :probeType="3" :pullUpLoad="true" ref="scroll" 
                      @scroll="contentScorll" @pullUpLoad="loadMore()">
      <slider-item :banners="banners"></slider-item>
      <recommend-view :recommends="recommends"></recommend-view>
      <tab-control ref="tabControl" :title="['流行', '新款', '精选']" class="home-tab-control" @item-click="TabBarClick"></tab-control>
      <good-list :goods="goods[this.currentType].list"></good-list>
    </scroll>
    <!-- 监听组件的点击.native -->
    <back-top class="back-top"  @click.native="backClick" v-show="showBackTop"/>
  </div>
</template>

<script>
// 公有组件
import NavBar from 'components/common/navbar/NavBar'
import SliderItem from 'components/common/swiper/SliderItem'
import TabControl from 'components/common/tabControl/TabControl'
import Scroll from 'components/common/scroll/BScroll'
import BackTop from 'components/common/backTop/BackTop'

// 私有组件
import GoodList from 'components/content/goods/GoodsList'
import RecommendView from './childComps/RecommendView'

// 网络请求
import {getMultiData, getGoodsData} from 'network/home.js'
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0,list: []},
        'new': {page: 0,list: []},
        'sell': {page: 0,list: []},
      },
      currentType: 'pop',
      currentPage: 0,
      showBackTop: false,
    }
  },


  components: {
    NavBar,
    SliderItem,
    Scroll,
    TabControl,
    BackTop,

    RecommendView,

    GoodList
  },

  created() {
    // 1.请求多个数据
    this.getHomeData();

      // 2.请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');




  },

  mounted() {
        // 3事件总线的监听
    this.$bus.$on('imgLoad',() => {
      // this.$refs.scroll.scroll.refresh()
      // this.refresh()
      this.debounce(this.$refs.scroll.scroll.refresh, 100)
      // this.debounce(this.$refs.scroll.scroll.refresh)
    })
  },

  methods: {

    // 防抖节流函数。
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if(timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay);
        }
    },

    loadMore: function() {
      this.getHomeGoods(this.currentType)
    },
    
    contentScorll: function(position)  {
      this.showBackTop = -position.y > 1000
    },

    backClick: function() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 1500)
    },


    TabBarClick: function(index) {
      switch(index){
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
        break;
      }
    },

    getHomeData: function() {
      getMultiData().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(res);
      })
    },

    getHomeGoods: function(type) {
      const page = this.goods[type].page+1;
      getGoodsData(type, page).then(res => {
        // 不要直接讲数据塞到列表里  否则会变成二维列表
        // this.goods.type = res.data.list XXXXXX

        this.goods[type].list.push(...res.data.list);
        this.goods[type].page +=1
        this.$refs.scroll.scroll.finishPullUp()
      })
    }
  } 
}
</script>

<style>
  @import '~assets/css/base.css';
  @import '~assets/css/normalize.css';
  
  #home {
    position: relative;
    height: 100vh;
  }
  

  .home-nav {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 10;
  }

  .home-tab-control {
    z-index: 5;
    position: sticky;
    top: 38px;
  }

  .content {
    height: calc(100vh - 49px);
    overflow: hidden;
  }

</style>