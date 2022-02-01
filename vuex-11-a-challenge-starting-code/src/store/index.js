import { createStore } from 'vuex'
import productList from '../mocks/productList.json'
import rootGetters from './getters'
import cartStore from './cart/index'


const store = createStore({
    modules: { cart: cartStore },
    state() {
        return {
            products: productList
        }
    },
    getters: rootGetters
})

export default store