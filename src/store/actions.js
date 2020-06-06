export default {
  addCart(context,payload){

    return new Promise((resolve,reject)=>{

      const oldCart = context.state.catList.find(item => {
        return item.iid == payload.iid;
      });
      // console.log(context.state.catList);
      if (oldCart) {
        context.commit('addCount',oldCart )
        resolve('商品数量+1')
      }else{
        payload.count = 1 
        context.commit('addToCart',payload )
        resolve('加入购物车成功')
        
      }
  
    })

   
  }




}