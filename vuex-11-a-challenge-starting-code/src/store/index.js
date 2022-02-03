import { createStore } from 'vuex'
import productList from '../mocks/productList.json'
import rootGetters from './getters'
import cartStore from './cart/index'


const store = createStore({
    modules: { cart: cartStore },
    state() {
        return {
            products: productList,
            isLoggedIn: false
        }
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
    actions: {
        login(context) {
            context.commit('login')
        },
        logout(context) {
            context.commit('logout')
        }
    },
    getters: rootGetters
})

export default store