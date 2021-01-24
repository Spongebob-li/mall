import {
    ADD_COUNTER,
    ADD_TOO_CART,

} from './mutation-types'


export default {
    [ADD_COUNTER](state, payload) {
        payload.count++
    },
    [ADD_TOO_CART](state, payload) {
        payload.checked = true,
        state.cartList.push(payload)
        // console.log(payload);
    }
}