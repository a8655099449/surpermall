<template>
  <div>
    <CartListItem  v-for="(item, index) in list" :key="index" :item="item" />

    <!-- <CartListItem/> -->
  </div>
</template>

<script>
import CartListItem from './CartListItem'


export default {
  name:'CartList',
  props:{
    list:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    CartListItem
  }
}
</script>

<style>

</style>