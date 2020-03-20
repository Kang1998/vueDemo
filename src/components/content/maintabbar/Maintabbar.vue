<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="首页">
      <img slot="item-icon-actived" src="~assets/img/tabbar/home_actived.svg" alt="首页">
      <div slot="item-text" id="home">首页</div>
    </tab-bar-item>
      
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="分类">
      <img slot="item-icon-actived" src="~assets/img/tabbar/category_actived.svg" alt="分类">
      <div slot="item-text">分类</div>
    </tab-bar-item>


    <tab-bar-item path="/shopcar">
      <img slot="item-icon" src="~assets/img/tabbar/shop_car.svg" alt="购物车">
      <img slot="item-icon-actived" src="~assets/img/tabbar/shop_car_actived.svg" alt="购物车">
      <div slot="item-text">购物车</div>
    </tab-bar-item>

    
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="我的">
      <img slot="item-icon-actived" src="~assets/img/tabbar/profile_actived.svg" alt="我的">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
  

    <!-- 自定义color
  <tab-bar path="/category" activedColor="red"> -->

</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  components: {
    TabBar,
    TabBarItem
  },
  methods: {
    isActived() {
      console.log(this.$router.path.indexOf(this.$route)
      )
      return this.$router.path.indexOf(this.$route)
    }
  }
}
</script>

<style>
@import '~/assets/css/base.css';
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0; 
    box-shadow: 0px -3px 2px rgba(100, 100, 100, .1);
    border-radius: 3%;
  }
</style>