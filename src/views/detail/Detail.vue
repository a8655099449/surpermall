<template>
  <div id="datail">
    <!-- 导航 -->
    <NavBarDetail class="navBar" />

    <scroll class="content" ref="scroll">
      <!-- 轮播图 -->
      <SwiperDetail :imgs="imgs" />

      <!-- 商品信息展示 -->
      <DetailBaseInfo :goods="goods" />

      <!-- 店铺信息 -->
      <DetailShopInfo :shop="shopInfo" />

      <detail-goods-info :detailInfo ="goodsImgs" @imageLoad="imageLoad" /> 
      <DetailParamInfo :paramInfo="paramInfo" />
    </scroll>
    <h1> {{iid}} </h1>
  </div>
</template>

<script>
import NavBarDetail from './childComs/NavBarDetail'
import SwiperDetail from './childComs/SwiperDetail'
import DetailBaseInfo from './childComs/DetailBaseInfo'
import DetailShopInfo from './childComs/DetailShopInfo'
import DetailGoodsInfo from './childComs/DetailGoodsInfo'
import DetailParamInfo from './childComs/DetailParamInfo'


import Scroll from 'components/common/scroll/Scroll'

import { getDetailData, Goods, Shop, GoodsParam } from 'network/detail'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      imgs: [],
      goods: {},
      shopInfo:{},
      goodsImgs:{},
      paramInfo:{}
    }
  },
  components: {
    NavBarDetail,
    SwiperDetail,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo
  },
  created() {
    this.iid = this.$route.params.iid
    this.getDetailData()
  },

  methods: {
    getDetailData() {
      getDetailData(this.iid).then(res => {
        const data = res.result
        console.log(data);
        
        // 轮播图数据
        this.imgs = data.itemInfo.topImages
        // 商品标题等数据
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        )
        // 店铺信息数据
        this.shopInfo = new Shop(data.shopInfo)
        // 商品展示图片数据

        this.goodsImgs = data.detailInfo

         this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      
      })
    },
    imageLoad(){
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scpoed> 
#datail{
  height: 100vh;
  position: relative;
  z-index: 100;
  background-color: #fff;
  
}

.content{
  height: calc(100% - 44px);
  /* margin-top: 44px; */
}
.navBar{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>