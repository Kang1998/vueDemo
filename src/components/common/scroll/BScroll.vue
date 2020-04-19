<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScorll from 'better-scroll'

export default {
  name: 'BScorll',
  data() {
    return {
      scroll: null,
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    }
  },
  mounted: function() {
    this.scroll = new BScorll(this.$refs.wrapper,{
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad,
    })

//  滚动时传出事件
    this.scroll.on('scroll', (position) => {
      // console.log(position);
      this.$emit('scroll', position) 
    })


// 上拉加载更多 
    this.scroll.on('pullingUp',()=>{
      // console.log("上拉");
      this.$emit('pullUpLoad')
      setTimeout(() => {
        this.scroll.finishPullUp()
      }, 1000);
    })

    
  },


}
</script>

<style scoped>

</style>