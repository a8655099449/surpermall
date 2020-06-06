<template>
  <div class="item_check">
    <div class="check_box" :class="{ checked: isChecked }"></div>
  </div>
</template>
<script>
export default {
  props: {
    isChecked: Boolean
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.item_check {
  width: 40px;
}
.check_box {
  position: relative;
  top: 10px;
  width: 20px;
  height: 20px;
  margin: 0 auto;
  border-radius:50%;

  border:1px solid rgba(128, 128, 128, 0.4);
}

.check_box.checked {
  width: 20px;
  height: 20px;
  border-style: none;
  top: 10px;
  background: url("~assets/img/cart/yes.svg") 0 0/90% no-repeat;
}
</style>
