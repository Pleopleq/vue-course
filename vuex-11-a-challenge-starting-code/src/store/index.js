import { createStore } from 'vuex'
import productList from '../mocks/productList.json'
import rootGetters from './getters'


const store = createStore({
    state() {
        return {
            products: productList
        }
    },
    getters: rootGetters
})

export default store