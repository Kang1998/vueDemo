<template>
  <div id="recomends">
    <div v-for="(item, index) in this.recommends" :key="index" class="recom-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default: null
    }
  },
  methods: {

  }

}
</script>

<style>
  a,a:visited {
    text-decoration: none;
    color:black;
  }

  #recomends {
    width: 100%;
    display: flex;
    border-bottom: 5px solid rgba(230, 230, 230, .5)

  }


  .recom-item {
    width: 100%;
    margin: 10px 5px;
    /* flex-shrink: 1; */
    text-align: center;
    font-size: 14px;
    text-decoration: none;
  }

</style>