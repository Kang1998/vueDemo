<template> 
    <nav-bar id="detail-nav-bar">
      <div slot="left" id="back" @click="backClick">
        <img src="~assets/img/back.svg" >
      </div>
      <div slot="center" class="titles">
        <div v-for="(item, index) in this.titles" 
        :key="index"
        :class="{active: index === currentIndex}"
        class="titileItem">{{item}}
        </div>
      </div>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      currentIndex: 0,
      titles: ['商品', '参数','评论', '推荐'],
    }
  },
  methods: {
    backClick() {
      this.$router.back()
    }
  },
}
</script>

<style scoped>

  #detail-nav-bar {
    background-color: #fff;
    color: black;
  }

  #back>img {
    position: relative;
    top: 8px;
    left: 20%;
    width: 50%;
    height: 50%;
    line-height: 44px;
  }

  .active {
    color: #1296db
  }

  .titles {
    display: flex;
    justify-content: space-around;

  }

  .titleItem {
    flex: 1;
    text-align: center;
  }
</style>