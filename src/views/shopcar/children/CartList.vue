<template>
  <div class="list-container">
    <div class="list-item" v-for="item in cartList" :key="item.iid">
      <div class="item-img">
        <img :src="item.img" />
      </div>
      <div class="item-info">
        <div class="show-titile">{{ item.title }}</div>
        <div class="show-price">
          <span class="price">￥{{ totalPrice(item.price, item.count) }}</span>
          <span class="count">
            <button @click="item.count--, subClick(item) ">-</button>
            {{ item.count }}
            <button @click="item.count++">+</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartList: null
  },
  methods: {
    totalPrice(price, count) {
      return (price * count).toFixed(2);
    },

    subClick(iid) {
      console.log(iid);
      let index  = this.cartList.indexOf(iid)
      if(iid.count === 0) {
        this.cartList.splice(index,1)
      }
    }
  }
};
</script>

<style scoped>
.list-container {
  height: 100vh;
  background-color: rgb(230, 230, 230);
}
.list-item {
  /* height: 20vh; */
  background-color: #fff;
  margin: 20px;
  margin-top: 0;
  padding: 20px;
  border-radius: 2vh;
  font-size: 12px;
  display: flex;
}

.item-img {
  min-width: 90px;
  width: 90px;
  height: 90px;
  overflow: hidden;
  border-radius: 8px;
  margin-right: 20px;
  box-sizing: border-box;
}

.item-info {
  height: 90px;
  max-height: 90px;
}
.show-titile {
  overflow: hidden;
  height: 60px;
}

.show-price {
  display: flex;
  justify-content: space-between;
}
</style>
