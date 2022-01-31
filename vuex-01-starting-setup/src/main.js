import { createApp } from 'vue';
import { createStore } from 'vuex'

import App from './App.vue';

const counterModule = {
    state(){
        return {
            counter: 0,
        }
    },
    mutations: {
        addOne(state) {
            state.counter++
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value
        },
    },
    actions: {
        increase(context, payload) {
            setTimeout(() => {
                context.commit('increase', payload)
            }, 2000);
        },
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2
        },
        normalizedCounter(state, getters) { 
            const finalCounter = getters.finalCounter 
            if(finalCounter < 0) {
                return 0
            }
            if(finalCounter > 100){
                return 100
            }
            return finalCounter
        }
    }
}

const store = createStore({
    modules: {
        counter: counterModule
    },
    state() {
        return {
            isLogged: false
        }
    },
    mutations: {
        authUser(state) {
            state.isLogged = !state.isLogged
        }
    },
    actions: {
        authUser(context) {
            context.commit('authUser')
        }
    },
    getters: {
        isUserLogged(state) {
            return state.isLogged
        }
    }
})

const app = createApp(App);

app.use(store)
app.mount('#app');
