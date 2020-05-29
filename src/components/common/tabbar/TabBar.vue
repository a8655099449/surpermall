<template>
  <div>
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 49px;
  background-color: #f5f5f5;
  box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.06);
}
</style>