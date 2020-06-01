<template>
  <div class="navBar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'NavBar'
}
</script>

<style>
.navBar{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgb(100,100,100,.1);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
}
.left ,.right{
  width: 60px;
}
.center{
  flex:1;
}


</style>