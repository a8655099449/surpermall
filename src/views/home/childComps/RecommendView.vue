<template>
  <div class="recommend" >
    <div class="recommend-item" v-for="(item, index) in recommends" :key="index"> 
      <a :href="item.link">
        <img :src="item.image" >
        <p> {{ item.title }} </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .recommend{
    display: flex;
    border-bottom:8px #ccc solid ;
    padding: 10px 0 15px;
  }
  .recommend-item{
    flex:1;
    text-align: center;
  }
  .recommend-item img{
    width: 65px;
    height: 65px;
  }
</style>