<template>
  <div id="home">
    <router-view></router-view>
    <nav-bar class="navBar-home">
      <div slot="center">
        
        首页
      </div>
    </nav-bar>

     <tab-contrl class="home-tab-contrl"
                  :titles="['热卖','新品','精选']"
                  @changeIndex="changeIndex" 
                  v-show="isFixed"
                  ref="contrl2"  
                  />
    <scroll class="content"
            ref='scroll'
            :probe="3"
            @scroll="scrollChange"
            :pullUpload='true'
            @pullingUp='loadGoods'>

      <home-swiper 
      :banners="banners"
      @swiperImgLoad="swiperImgLoad"
      />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-contrl :titles="['热卖','新品','精选']"
                  @changeIndex="changeIndex" ref="contrl1" />

      <goods :goodsList="goods[nowGoods].list" />

    </scroll>
    <back-top @click.native="backTop"
              v-show="backTopShow" />
  </div>

</template>

<script>
// 引入入组件
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabContrl from 'components/content/TabContrl'
import Goods from 'components/content/Goods'

// import BackTop from 'components/content/backtop/BackTop'

// 引入网络请求模块
import { getHomeMultiData, getHomeGoods } from 'network/home'

import  {backTop} from 'common/mixin'

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      nowGoods: 'pop',
      // backTopShow: false,
      isFixed:false,
      offsetTop:0,
      saveY:0,
      itemListener:null  
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabContrl,
    Goods,
    Scroll,
    // BackTop
  },
  created() {
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /**
     * 业务相关
     */

    changeIndex(item) {
      switch (item) {
        case 1:
          this.nowGoods = 'new'
          break
        case 2:
          this.nowGoods = 'sell'
          break

        default:
          this.nowGoods = 'pop'
          break
      }
      this.$refs.contrl1.activeIndex=item
      this.$refs.contrl2.activeIndex=item

    },
    // backTop() {
    //   this.$refs.scroll.backTo(0, 0)
    // },
    scrollChange(position) {
      this.isBackToShow(position.y)
      this.isFixed = position.y < -this.offsetTop ? true : false


    },
    swiperImgLoad(){
      this.offsetTop=this.$refs.contrl1.$el.offsetTop
    },
    loadGoods() {
      this.getHomeGoods(this.nowGoods)
    },
    /**
     * 网络请求相关
     */
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
        this.$refs.scroll.finishPullUp()
    
        this.itemListener = this.debounce(this.$refs.scroll.refresh,100)
        // this.itemListener = () => refresh()
        // 开启监听
        this.$bus.$on('goodsImgLord',this.itemListener)
      })
    },
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },

    /**
     * 防抖函数
     */

    debounce(fn, delay) {
      let timer = null
      return function(...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(this,args)
        }, delay);

      }
    }
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated() {
    // console.log(this.$refs.scroll.);

    // 离开的使用记录位置
    this.saveY=this.$refs.scroll.scroll.y
    // 离开的时候关闭图片的监听
    this.$bus.$off('goodsImgLord',this.itemListener)
  },
  mixins:[backTop]

}
</script>

<style scoped>
.navBar-home {
  background-color: var(--color-tint);
  color: white;
  font-size: 18px;
}
#home {
  /* padding-top: 44px; */
  height: 100vh;
  /* position: relative; */
}
.home-tab-contrl {
  position: relative;
  z-index: 9;
}
.content {
  height: calc(100% - 50px);
  overflow: hidden;
  background-color: #fff;
}
</style>