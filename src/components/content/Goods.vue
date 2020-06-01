<template>
  <div class="goods">
    <goods-item v-for="(item, index) in goodsList" :key="index" :goods="item"  />
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  name:'Goods',
  components:{
    GoodsItem,
  },
  props:{
    goodsList:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3px;
  }
</style>