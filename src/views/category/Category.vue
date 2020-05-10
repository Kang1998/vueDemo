<template>
  <div id="category">
    <nav-bar>
      <div slot="center">分类</div>
    </nav-bar>
    <!-- <scroll> -->
      <cate-list :data-list="result"></cate-list>
    <!-- </scroll> -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/BScroll";
import CateList from "./childrenComp/cateList";

import { getCateData } from "network/category";

export default {
  name: "category",
  components: {
    NavBar,
    Scroll,
    CateList
  },
  data() {
    return {
      result: []
    };
  },
  methods: {},
  created() {
    getCateData().then(res => {
      this.result = res.data.category.list;
      console.log(this.result);
    });
  },
  mounted() {}
};
</script>

<style>
@import "~assets/css/base.css";
</style>
