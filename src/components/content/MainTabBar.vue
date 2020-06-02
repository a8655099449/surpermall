<template>
  <div>
   

    <tab-bar>
      <tab-bar-item textColor='#ff5777' path="/home"> 
        <i slot="item-icon">
          <img src="~assets/img/tabbar/home.svg" alt="tabIcon">
          <img src="~assets/img/tabbar/home_active.svg" alt="tabIcon" class="action_icon">

        </i>
        <div slot="item-text"> 首页</div>
      </tab-bar-item>
      <tab-bar-item textColor='#ff5777' path="/category"> 
        <i slot="item-icon">
          <img src="~assets/img/tabbar/category.svg" alt="tabIcon">
          <img src="~assets/img/tabbar/category_active.svg" alt="tabIcon" class="action_icon">
        </i>
        <div slot="item-text"> 分类</div>
      </tab-bar-item>
      <tab-bar-item textColor='#ff5777' path="/cart"> 
        <i slot="item-icon">
          <img src="~assets/img/tabbar/shopcart.svg" alt="tabIcon">
          <img src="~assets/img/tabbar/shopcart_active.svg" alt="tabIcon" class="action_icon">

        </i>
        <div slot="item-text"> 购物车</div>
      </tab-bar-item>
      <tab-bar-item textColor='#ff5777' path="/profile"> 
        <i slot="item-icon">
          <img src="~assets/img/tabbar/profile.svg" alt="tabIcon">
          <img src="~assets/img/tabbar/profile_active.svg" alt="tabIcon" class="action_icon">

        </i>
        <div slot="item-text"> 我的</div>
      </tab-bar-item>
    </tab-bar>
    
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'  
import TabBarItem from 'components/common/tabbar/TabBarItem'  

export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>