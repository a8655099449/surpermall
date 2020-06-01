<template>
  <div class="tab-contri">
    <div class="tab-contri-item" v-for="(item, index) in titles" :key="index" 
    :class="{'active':index===activeIndex}" 
    @click="changeAcive(index)">

      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabContri',
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
  .tab-contri{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #fff;
  }
  .tab-contri-item{
    flex:1;
  }
  .tab-contri-item span{
    padding: 5px;
  }
  .tab-contri .active span{
    color: var(--color-tint);
    border-bottom: 3px solid var(--color-tint);
  }
</style>