<template>
  <div v-if="detailImage !== null">
    <div v-for="(item,index) in detailImage"  :key="index" >
        <img :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailImages',
  props: {
    detailImage: null,
  },
  methods: {
    imgLoad() {
      // console.log("图片加载完成");
      // 传出事件不能大写
      this.$emit("load-over")

    }
  },
}
</script>

<style scoped>
</style>