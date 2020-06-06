<template>
  <div class="cart">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <div slot="center">
        购物车({{cartLength}})
      </div>
    </nav-bar>

    <scroll class="content" ref="scroll"> 
      <!-- 列表区 -->
      <CartList :list="cartList" />

    </scroll>
    <!-- 结算 -->

    <cart-bottom-bar  />
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { mapGetters } from 'vuex'
// 滚动条组件
import Scroll from 'components/common/scroll/Scroll'
// 列表组件
import  CartList from './childComs/CartList'
import  CartBottomBar from './childComs/CartBottomBar'



export default {
  name: 'Cart',
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar
  },
  computed:{
    ...mapGetters(['cartLength', 'cartList'])
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: white;
  font-size: 18px;
}
.cart{
  height: 100vh;
}
.content{
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>