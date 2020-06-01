<template>
  <div :class="{'bar-item':true, 'isAction':is_Action}" :style="actionColor" @click="changePath" >
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data() {
    return {
      isAction:true
    }
  },
  props:{
    path:{
      type:String,
    },
    textColor:{
      type:String,
      default:'rgb(251, 114, 153)'
    }
  },
  methods: {
    changePath(){
      if (this.$route.path!=this.path) {
        this.$router.push(this.path)
      }
    }
  },
  computed: {
    is_Action(){

      return this.$route.path.indexOf(this.path) !== -1
      // return false
    },
    actionColor(){

      return this.is_Action? {'color':this.textColor}:{}
    }
  },
}
</script>

<style>


.bar-item i{
  display: block;

  line-height: 24px;
  font-size: 24px;
  margin: 3px 0;
}
.bar-item img{
  display: block;
  height:24px;
  width:24px;
  margin: 0 auto;
}
.bar-item {
  flex: 1;
  text-align: center;
}
.bar-item .action_icon{
  display: none;
}
.isAction i .action_icon{
  display: block;
}
.isAction i img{
  display: none;
}

</style>