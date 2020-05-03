<template>
  <div id="bottom-bar">
    <div class="bar-left">
      <span class="iconfont icon-lianxikefu"></span><div class="left-item"><img src="">联系客服</div>
      <span class="iconfont icon-dianpu"></span><div class="left-item"><img src="">店铺</div>
      <span class="iconfont icon-gouwuchekong"></span><div class="left-item" @click="toShopcar"><img src="">购物车</div>
    </div>
    <div class="bar-right">
      <div class="right-item" @click="addToCart">加入购物车</div>
      <div class="right-item">立刻购买</div>    
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      // 发出时间给父组件detail
      this.$emit("addCart")
    },
    toShopcar() {
      this.$router.push('/shopcar')
    }
  },
  
}
</script>

<style scoped>
  @import url('~assets/css/iconfont/iconfont.css');
  .bottom-bar {
    height: 44px;
    background-color: rgb(0, 153, 204);
    color: #fff;
    display: flex;

  }
  .bar-left,
  .bar-right {
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 0px;
    flex: 1;
  }
  .bar-right {
    background-color: #FF6666;
  }
  .right-item {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 44px;
    border-left: 1px solid #fff;
  }
  .bar-left {
    font-size: 12px;
  }

</style>