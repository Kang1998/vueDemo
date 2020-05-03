<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :key="index" :itemData="item" class="goods-item">
    </goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'


export default {
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default: []
    },
    currentType: 'pop'
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
  }

  .goods-item {
    padding-bottom: 5px;
    width: 48%;
    flex-shrink: 1;
    font-size: 12px;
    overflow: hidden;
  }

</style>