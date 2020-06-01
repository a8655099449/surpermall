<template>
  <div id="home">
    <nav-bar class="navBar-home">
      <div slot="center">
        首页
      </div>
    </nav-bar>
    <scroll class="content"
            ref='scroll'
            :probe="3"
            @scroll="scrollChange"
            :pullUpload='true'
            @pullingUp='loadGoods' 

            >

      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-contri class="home-tab-contri"
                  :titles="['热卖','新品','精选']"
                  @changeIndex="changeIndex" />
      <goods :goodsList="goods[nowGoods].list" />

    </scroll>
    <back-top @click.native="backTop" v-show="backTopShow" />
  </div>

</template>

<script>
// 引入入组件
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabContri from 'components/content/TabContri'
import Goods from 'components/content/Goods'
import BackTop from 'components/content/backtop/BackTop'

// 引入网络请求模块
import { getHomeMultiData, getHomeGoods } from 'network/home'

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
      backTopShow: false
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabContri,
    Goods,
    Scroll,
    BackTop
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
    },
    backTop() {
      console.log('backTop')
      this.$refs.scroll.backTo(0, 0)
    },
    scrollChange(position) {
      this.backTopShow = position.y < -1000 ? true : false
    },

    loadGoods(){
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
        this.$refs.scroll.refresh()
      })
    },
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
}
</script>

<style scoped>
.navBar-home {
  background-color: var(--color-tint);
  color: white;
  font-size: 18px;
}
#home {
  padding-top: 44px;
  height: 100vh;
  /* position: relative; */
}
.home-tab-contri {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  height: calc(100% - 50px);
  overflow: hidden;
  background-color: #fff;
}
</style>