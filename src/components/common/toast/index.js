// 注册全局组件

import Toast from './Toast.vue'

const obj = {}
obj.install = (vue)=>{
  // console.log('我被使用了' , vue);
  const ToastCon = vue.extend(Toast)
  const toast  = new ToastCon()


  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)

  vue.prototype.$toast = toast

}

export default  obj
