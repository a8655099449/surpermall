<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>

      <div slot="center" class="navBar">
          <div v-for="(item, index) in titles" :key="index"
            :class="{'action':actionIndex === index}"
            @click="actionIndex = index"
          >
            {{item}}
          </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'


export default {
  name:'NavBarDetail',
  components:{
    NavBar
  },
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      actionIndex:0
    }
  },
  methods: {
    back(){
      this.$router.back()
    }
  },
}
</script>

<style scoped>
  .navBar{
    display: flex;
  }
  .navBar>div{
    flex: 1;
  }
  .back img{
    vertical-align: middle;
  }
  .action{
    color: var(--color-tint);
  }
</style>