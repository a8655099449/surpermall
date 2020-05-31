<template>
  <div>
    <nav-bar class="navBar">
      <div slot="center"> 
        首页
      </div>
    </nav-bar>
  </div>
</template>

<script>
// 引入入组件
import NavBar from 'components/common/navbar/NavBar'
// 映入网络请求模块
import {getHomeMultiData} from 'network/home'

export default {
  name:'Home',
  data() {
    return {
      result:null
    }
  },
  components:{
    NavBar
  },
  created() {
    getHomeMultiData().then(res=>{
      this.result= res
    })
  
  },
}
</script>

<style>
.navBar{
  background-color: var(--color-tint);
  color: white;
  font-size: 18px;
}
</style>