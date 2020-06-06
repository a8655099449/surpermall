export default {
  cartLength(state){
    return state.catList.length

  },
  cartList(state){
    return state.catList
  },
  // 计算被选中的总价
  calcTotal(state){
    return state.catList.filter(i=>i.checked).reduce((preValue,item)=>{
      return  preValue +  item.count * item.price
    },0).toFixed(2)
  },
  // 选中商品的数量
  checkedLength(state){
    return state.catList.filter(i=>i.checked).length
  }



}