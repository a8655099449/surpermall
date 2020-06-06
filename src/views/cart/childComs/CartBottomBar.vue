<template>
  <div class="calcPrice">
    <div class="left">
      <CartCheckButton :is-checked = "isAll" @click.native = "checkAll"  />全选
    </div>
    <div class="center">
      合计：￥ {{calcTotal}}
    </div>
    <div class="right">
      结算（{{checkedLength}}）
    </div>
  </div>
</template>

<script>
import CartCheckButton from './CartCheckButton'
import { mapGetters } from 'vuex'


export default {
  name:'CartBottomBar',
  components:{
    CartCheckButton
  },
  computed:{
    ...mapGetters(['calcTotal','checkedLength','cartList']),
    isAll(){
      if (this.cartList.length === 0 || this.cartList.length !==  this.checkedLength) {
        return false
      }
      return true
    }
  },
  methods :{
    checkAll(){
      if (this.isAll) {
        return this.cartList.forEach(item => item.checked = false);
      }      

      this.cartList.forEach(item => item.checked = true);
    }
  }
}
</script>

<style scoped>
  .calcPrice{
    height: 40px;
    background-color: rgba(240,240,240);
    display: flex;
    text-align: center;
    line-height: 40px;

  }
  .left{
    width: 80px;
    display: flex;
    font-size: 12px;
  }
  .center{
    flex: 1;
  }
  .right{
    width: 100px;
    background: rgb(221, 0, 27);
    color: #fff;
    height: 100%;
    /* line-height: 40px; */
  }
</style>