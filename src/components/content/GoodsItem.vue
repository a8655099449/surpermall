<template>
  <div class="goods-item">
    <!-- <div> -->
      <img :src="goods.show.img" @load="goodsImgLord">
      <div class="goods-info">
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
    }
  },
}
</script>

<style>
.goods-item {
  width: 48%;
  padding-bottom: 48px;
  /* height: 310px; */
  position: relative;
}
.goods-info {
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