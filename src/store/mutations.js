export default {
  addCart(state, payload) {
    // 给商品添加默认值

    // 检查state.cartList.有没有这个商品
    let index = state.cartList.find( item => item.iid === payload.iid)
    if(index) {
      index.count +=1;
    }else {
      payload.count = 1
      state.cartList.push(payload)
    }    
  }
}