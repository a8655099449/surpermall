<template>
  <div id="datail">

    <!-- 导航 -->
    <NavBarDetail class="navBar"
                  @navChange="navChange"
                  ref="navBar" />

    <scroll class="content"
            ref="scroll"
            @scroll="scrollChange"
            :probe="3">
      <!-- 轮播图 -->

   
      <SwiperDetail :imgs="imgs" />

      <!-- 商品信息展示 -->
      <DetailBaseInfo :goods="goods" />

      <!-- 店铺信息 -->
      <DetailShopInfo :shop="shopInfo" />
      <!--商品详情信息 -->
      <detail-goods-info :detailInfo="goodsImgs"
                         @imageLoad="imageLoad" />
      <!-- 参数信息 -->
      <DetailParamInfo ref="params"
                       :paramInfo="paramInfo" />
      <!-- 评论信息 -->
      <DetailComment ref="comment"
                     :comment="commentInfo" />
      <!-- 推荐信息 -->
      <GoodsList ref="recomment"
                 :goodsList="recomment" />

    </scroll>
    <back-top @click.native="backTop"
              v-show="backTopShow" />
    <DetailBottomBar @addEvent="addCart" />
    <!-- <Toast/> -->
    <!-- <h1> {{iid}} </h1> -->
  </div>
</template>

<script>
import NavBarDetail from './childComs/NavBarDetail'
import SwiperDetail from './childComs/SwiperDetail'
import DetailBaseInfo from './childComs/DetailBaseInfo'
import DetailShopInfo from './childComs/DetailShopInfo'
import DetailGoodsInfo from './childComs/DetailGoodsInfo'
import DetailParamInfo from './childComs/DetailParamInfo'
import DetailComment from './childComs/DetailComment'
import DetailBottomBar from './childComs/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/Goods'
// import Toast from 'components/common/toast/Toast'

import {
  getDetailData,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from 'network/detail'
import { debounce } from 'common/utils'
import { itemImgListener } from 'common/mixin'
import { backTop } from 'common/mixin'
import { mapActions } from 'vuex'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      imgs: [],
      goods: {},
      shopInfo: {},
      goodsImgs: {},
      paramInfo: {},
      commentInfo: {},
      recomment: [],
      newRefresh: null,
      // 用于记录每个区块的高度
      tops: [],
      topChange: null
    }
  },
  components: {
    NavBarDetail,
    SwiperDetail,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    GoodsList,
    DetailBottomBar,
    // Toast
  },
  created() {
    this.iid = this.$route.params.iid
    this.getDetailData()
    this.getRecommend()

    this.topChange = debounce(item => {
      item.y -= 150
      let index = 0
      if (!this.$refs.navBar) {
        return
      }
      if (item.y <= -this.tops[3]) {
        index = 3
      } else if (item.y <= -this.tops[2]) {
        index = 2
      } else if (item.y <= -this.tops[1]) {
        index = 1
      } else {
        index = 0
      }

      if (index !== this.$refs.navBar.actionIndex) {
        console.log('-----')
        this.$refs.navBar.actionIndex = index
      }
    }, 10)
  },
  
  methods: {
    ...mapActions({
      addCartV:'addCart'
    }),
    getDetailData() {
      getDetailData(this.iid).then(res => {
        const data = res.result
        // console.log(data)

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
        // 获取参数信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        )
        // 获取评论信息

        if (data.rate.cRate != 0) {
          this.commentInfo = data.rate.list[0]
        }

        this.newRefresh = debounce(this.$refs.scroll.refresh, 100)
        // this.newRefresh = () => refresh()

        this.$bus.$on('goodsImgLord', this.newRefresh)
      })
    },
    getRecommend() {
      getRecommend().then(res => {
        this.recomment = res.data.list
      })
    },

    imageLoad() {
      this.loadTop()
    },
    // 加载初始高度值的函数
    loadTop() {
      this.tops = []
      this.tops.push(0)

      this.tops.push(this.$refs.params.$el.offsetTop)
      this.tops.push(this.$refs.comment.$el.offsetTop)
      this.tops.push(this.$refs.recomment.$el.offsetTop)
    },
    navChange(item) {
      this.$refs.scroll.scroll.scrollTo(0, -(this.tops[item] - 44), 500)
    },
    scrollChange(item) {
      this.topChange(item)
      this.isBackToShow(item.y)
    },
    // 加入购物车
    addCart() {
      // console.log('--加入购物车-');
      const obj = {
        iid: this.iid,
        desc: this.goods.desc,
        price: this.goods.realPrice,
        title: this.goods.title,
        img: this.imgs[0]
      }
      // 这是第一种办法 但是为了规范 mutation里面最好只做一件事情 所以最好把方法放到actions里面

      // this.$store.commit('addCart' , obj)
      this.addCartV(obj).then(res =>{

        console.log(this.$toast.show);
        
        this.$toast.show(res)
        
      })
    }
  },
  mixins: [backTop],
  destroyed() {
    this.$bus.$off('goodsImgLord', this.newRefresh)
  }
}
</script>

<style scpoed>
#datail {
  height: 100vh;
  position: relative;
  z-index: 100;
  background-color: #fff;
  /* margin-top: 44px; */
}

.content {
  height: calc(100% - 44px);
  overflow: hidden;
  /* margin-top: 44px; */
}
.navBar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>