<template>
  <div id="shopcar">
    <nav-bar>
      <div slot="center">购物车</div>
    </nav-bar>
    <cart-list :cartList="cartList" v-if="cartList.length===0? false:true">
    </cart-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from './children/CartList' 

export default {
  name: "shopcar",
  components: {
    NavBar,
    CartList
  },
  data() {
    return {
      cartList: this.$store.store.state.cartList
    };
  }
};
</script>

<style scoped>

</style>
