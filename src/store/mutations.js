export default {
  addToCart(state, payload) {
    payload.checked= false
    state.catList.push(payload)
  },
  addCount(state , payload){

    
    payload.count++
  }
};
