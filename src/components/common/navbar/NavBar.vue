<template>
  <div class="nav-bar">
    <div class="left"><slot></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .nav-bar {
    display: flex;
    height: 44px;
    background-color: #1296db;
    line-height: 44px;
    box-shadow: 0 3px 1px rgba(100, 100, 100, .1);
    color: #fff;
  }

  .left, 
  .right {
    display: block;
    width: 50px;
  }

  .center {
    flex: 1;
    text-align: center;
    font-size: 20px;
  }
</style>