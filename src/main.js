import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import toast from 'components/common/toast'


import LazyLoad from 'vue-lazyload'



// 加入鼠标减少延迟的插件

import FastClick from 'fastclick'

FastClick.attach(document.body);


// 加载弹出层
Vue.use(toast)

Vue.use(LazyLoad,{
  // 懒加载可以传入其他的参数  比如没加载出来的时候显示的图片
  loading:require('./assets/img/common/placeholder.png')
})

Vue.config.productionTip = false

// 用于非父子组件传值而实例出来的对象
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  components:{
    App
  },
  render: h => h(App),
}).$mount('#app')
