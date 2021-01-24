import {
    ADD_COUNTER,
    ADD_TOO_CART,

} from './mutation-types'

export default {
    addCart(context,payload) {
       return new Promise((reslove,reject) => {
          // 新添加的商品
        // 1. 使用find方法查找之前的数组cartList中是否有该商品
        let oldProduct = context.state.cartList.find( item => item.iid === payload.iid
          )
          // 2. 判断oldProduct原先是否存在，如果存在，数量+1，如果不存在，则新增数量1 然后push添加到cartList中
            if(oldProduct) {
              context.commit(ADD_COUNTER, oldProduct)
              reslove('商品数量加1')
            }else {  // 添加新的商品
              payload.count = 1
              // context.state.cartList.push(payload)
              context.commit(ADD_TOO_CART,payload)
              reslove('添加了新的商品')

            }
       })
      }
}