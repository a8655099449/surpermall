<template>
  <div class="content" ref='content'>
    <div >
      <slot></slot>
    </div>
  </div>
</template>



<script>
import Scroll from 'better-scroll'

export default {
  name:'Scroll',
  data() {
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll = new Scroll(this.$refs.content,{
      click:true,
      probeType:this.probe,
      pullUpLoad:this.pullUpload
    })

    this.scroll.on('scroll',(poition)=>{
      this.$emit('scroll',poition)
    })

    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')

    })

  },

  methods: {
    backTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll.refresh()
    }
  },
  props:{
    probe:{
      type:Number,
      default(){
        return 0
      }
    },
    pullUpload:{
      type:Boolean,
      default(){
        return false
      }
    }
  }
}
</script>

<style >


</style>

