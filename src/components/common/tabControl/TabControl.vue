<template>
  <div class="tab-control">
    <div v-for="(item, index) in title" :key="index" class="control-item" 
     :class="{'is-active':index === correntIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      correntIndex:0
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    },
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick: function(index) {
      this.correntIndex = index;
      // console.log(index);
      this.$emit('item-click', index)
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
  }

  .is-active {
    color: #1296db;
  }

  .control-item {
    flex: 1;
    background-color: rgb(255, 255, 255);
    font-size: 14px;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }

  .is-active span {
    padding: 8px;
    border-bottom: 2px solid #1296db
  }

</style>