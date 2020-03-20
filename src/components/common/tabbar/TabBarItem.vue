<template>
    <div class="tab-bar-item" @click="itemClick" :class="{actived: !isActived}">
      <div v-if="!isActived"><slot  name="item-icon"></slot></div>
      <div v-else><slot  name="item-icon-actived"></slot></div>
      <div :style="activeStyle"><slot name="item-text" ></slot></div>
    </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return {
      
      }
  },
  props: {
    path: String,
    activedColor: {
      type: String,
      default: "#1296db"
    }
  },
  computed: {
    isActived() {
      return this.$route.path.indexOf(this.path) !== -1  
    },
    activeStyle() {
      return this.isActived ? {color: this.activedColor}: {}
    }
  },
  methods: {
    //  解决路由跳转
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 2px;
    vertical-align: middle;
  }
 
</style>