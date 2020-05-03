<template>
  <div class="shop-info" v-if="shopInfo !== null">
    <div class="base-info">
      <a :href="shopInfo.shopUrl">
        <div class="shop-logo">
          <img :src="shopInfo.shopLogo">  
          <span>{{shopInfo.name}}</span>
        </div>
      </a>
      <div class="see-more">
        <span><a :href="shopInfo.allGoodsUrl">全部宝贝</a></span>
        <span><a :href="shopInfo.shopUrl">进店逛逛</a></span>
      </div>
  </div>

    <div class="shop-score">
      <div v-for="(item, index) in shopInfo.score"
       :key="index">
       <span>
         {{item.name}}
         {{item.score}}分
       </span>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: null,
  }
}
</script>

<style scoped>
  @import url('~assets/css/base.css');
  .base-info {
    margin-top: 5px;
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    line-height: 40px;
    margin-bottom: 5px;    
  }

  .base-info>a, 
  .base-info>a:visited {
    color: black;
  }

  .shop-logo >img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
  .shop-logo >span {
    vertical-align: middle;
  }


  .avgScore {
    font-size: 8px;
  }

  .see-more > span{
    font-size: 12px;
    padding: 3px 3px;
    margin-right: 6px;
    background-color: rgba(0, 153, 204,.8);
    border-radius: 25px;
  }

  .see-more a,a:visited {
    color: #fff;
  }

  .shop-score {
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    color: rgba(0, 153, 204,.8);
    line-height: 30px;
    border-bottom: 4px solid rgba(153, 153, 153, .1);
  }
  .shop-score >span {
    line-height: 30px;
  }
</style>