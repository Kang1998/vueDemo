<template>
  <div class="item-info" @click="itemClick" >
      <img :src="itemData.show.img" @load="imgLoad" alt="">
      <div class="detail">
        <div class="desc">{{itemData.title}}</div>
        <div class="price">
          <span>仅售: ￥{{itemData.price}}</span>
          <span><del>{{itemData.orgPrice}}</del></span>
        </div>
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
      //   query: {'id':this.itemData.iid}
      // })
    }
  },
}
</script>

<style scoped> 
  .item-info {
    color:rgb(204, 204, 204);
  }
  
  .desc {
    margin: 4px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .price {
    display: flex;
    justify-content: space-between;
    color: rgb(18, 150, 219);
    margin-bottom: 4px;
  }
  .price > div {
    flex: 1; 
  }
</style>