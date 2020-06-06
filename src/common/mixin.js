export const itemImgListener = {


  // data() {
  //   return {
  //     itemListener:null,
  //     newRecrach
  //   }
  // },
  // mounted() {
  //   console.log('我是mixin');
    
  // },

  

}

import BackTop from 'components/content/backtop/BackTop'

export const backTop = {
  components:{
    BackTop
  },
  data() {
    return {
      backTopShow: false,
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.backTo(0, 0)
    },
    isBackToShow(y){
      this.backTopShow = y < -1000 ? true : false

    }
    
  },

}

// import Scroll from 'components/common/scroll/Scroll'

// export const scroll = {
//   comments:{
//     Scroll
//   },
//   methods: {
//     scrollChange(position) {
//       this.isBackToShow(position.y)
//       this.isFixed = position.y < -this.offsetTop ? true : false

//     },
//   },


// }