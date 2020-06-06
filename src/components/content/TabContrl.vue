<template>
  <div class="tab-contrl" >
    <div class="tab-contrl-item" v-for="(item, index) in titles" :key="index" 
    :class="{'active':index===activeIndex}" 
    @click="changeAcive(index)" >

      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabContrl',
  data() {
    return {
      activeIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    changeAcive(i){
      this.activeIndex=i
      this.$emit('changeIndex',i)
    }
  },
}
</script>

<style>
  .tab-contrl{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #fff;
    font-size: 18px;
  }
  .tab-contrl-item{
    flex:1;
  }
  .tab-contrl-item span{
    padding: 5px;
  }
  .tab-contrl .active span{
    color: var(--color-tint);
    border-bottom: 3px solid var(--color-tint);
  }
</style>