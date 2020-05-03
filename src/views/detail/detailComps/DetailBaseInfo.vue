<template>
  <div  class="base-info" v-if="goods !== null">
    <div class="info-title">{{goods.title}}</div>
    <div class="price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price"><del>{{goods.oldPrice}}</del></span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <div class="info-service-item" v-for="index in goods.services.length-1"
       :key="index">
       <img :src="goods.services[index].icon">
       <span>{{goods.services[index-1].name}}</span>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object
    }
  },
}
</script>

<style scoped>
  .base-info {
  width: 100%;
  margin-top: -15px;
  border-bottom: 5px solid #f2f5f8;
}
  .base-info div{
   margin: 8px 0;
  }

  .price {
    padding-left: 6px;
    color: rgb(0, 153, 204,1);
    font-size: 20px;
  }
  .o-price {
    font-size: 15px;
    padding: 0 3px;
  } 

  .discount {
    padding: 0 8px;
    margin-left: 8px;
    color: #fff;
    background-color: rgba(0, 153, 204, .45);
    border-radius: 4px;
  }
  .info-other {
    display: flex;
    color: #999999;
    padding: 10px 0;
    font-size: 15px;
    justify-content: space-between;
  }

  .info-service {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  }


 .info-service img {
   width: 15px;
   height: 15px;
   margin-right: 2px;
   background-color: rgba(0, 153, 204, .45) ;
   border-radius: 50%;
 }


  .info-service-item>span {
    /* position: relative; */
    bottom: 3px;
  }

</style>