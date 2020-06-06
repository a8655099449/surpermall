<template>
  <div >
    <div v-show="isShow"  class="message" >
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      isShow: false,
      msg: ''
    }
  },

  methods: {
    show(msg, time = 2000) {
      this.msg = msg
      this.isShow = true

      setTimeout(() => {
        this.msg = ''
        this.isShow = false
      }, time)
    }
  }
}
</script>

<style scoped>
.message {
  position: fixed;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px 8px;
  border-radius: 3px;
  z-index: 999;
}
</style>