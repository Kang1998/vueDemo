<template>
  <div class="item-info" @click="itemClick" >
      <img :src="itemData.show.img" @load="imgLoad" alt="">
      <div class="detail">
        <span>{{itemData.title}}</span>
        <span>原价：<del>{{itemData.orgPrice}}</del></span><br>
        <span class="price">仅售: ￥{{itemData.price}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "GoodItem",
  props: {
    itemData: {
      type:Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
//  传递事件跨越层级过多  这种情况用事件总线$bus
    this.$bus.$emit('imgLoad');
    },
    itemClick() {
      // 跳转到详情页
      this.$router.push('/detail/'+this.itemData.iid)
      // query的router方法
      // this.$router.push({
      //   path: 'detail',
      //   query: {

      //   }
      // })


      // console.log(this.itemData.iid);
    }
  },
}
</script>

<style> 
  .item-info img {
    border-radius: 5%;
  }

  .detail {
    position: relative;
  }

  .detail>span:first-child {
    white-space: nowrap;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  
  .price {
    color: hotpink
  }
</style>