<template>
  <div class="sub-container">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item
        :title="i.title"
        v-for="i in dataList"
        :key="i.maitKey"
        @click="getSubCate(i.maitKey)"
      />
    </van-sidebar>
    <van-grid :border="false" :column-num="4">
      <van-grid-item v-for="item in subList" :key="item.id" class="sub-item" square>
        <van-image :src="item.image" />{{item.title}}
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { getSubCategory } from "network/category";

export default {
  name: "cateList",
  data() {
    return {
      activeKey: 0,
      subList: []
    };
  },
  props: {
    dataList: {
      type: Array,
      default: []
    }
  },
  methods: {
    getSubCate(maitKey) {
      getSubCategory(maitKey).then(res => {
        this.subList = res.data.list;
        // console.log(res);
      });
      // console.log(this.activeKey);
    }
  },
  created() {
    this.getSubCate(3627);
  },
  mounted() {}
};
</script>

<style scoped>
 .sub-container {
   width: 100vw
 }
 .van-sidebar {
   width: 10vw;
 }

</style>
