<template>
  <div class="goods-item" @click="goDetail">
    <!-- <div> -->
      <img v-lazy="imgs" @load="goodsImgLord">
      <div class="goods-item-info">
        <p class="text_row_1"> {{goods.title}} </p>
        <p class="price_box"><span class="price"> {{goods.price}} </span><span class="cfav"> {{goods.cfav}} </span> </p>
      </div>
    <!-- </div> -->

  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    goodsImgLord(){
      this.$bus.$emit('goodsImgLord')
    },
    goDetail(){
      // console.log(this.goods.iid);
      this.$router.push('/detail'+this.goods.iid)
    }
  },
  computed:{
    imgs(){
      
      // return this.goods.show.img || this.goods.image
      // return this.goods.image || this.goods.show.img
      return this.goods.image ?   this.goods.image : this.goods.show.img 
    }
  }
}
</script>

<style >
.goods-item {
  width: 48%;
  padding-bottom: 48px;
  /* height: 310px; */
  position: relative;
}
.goods-item-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
  line-height: 20px;
}
.goods-item img {
  width: 100%;
  /* height:100%; */
  border-radius: 3px;
}
.price_box {
  text-align: center;
}
.price {
  color: var(--color-tint);
  font-weight: 600;
  margin-right: 20px;
}
.cfav{
  position: relative;
}
.cfav::after {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>