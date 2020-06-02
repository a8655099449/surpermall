<template>

  <swiper class="swipers">
    <swiper-item v-for="(item, index) in imgs" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>

</template>

<script>

import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name:'SwiperDetail',
  props:{
    imgs:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
  .swipers{
    height: 300px;
    overflow: hidden;
  }
</style>