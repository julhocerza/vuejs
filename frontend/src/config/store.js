import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isMenuVisible: true,
        user: {
            name: 'Usuário Mock',
            email: 'mock@gmail.com'
        }
    },
    mutations: {
        toggleMenu(state, isVisible) {
            if(isVisible === undefined) {
            state.isMenuVisible = !state.isMenuVisible
        } else {
            state.isMenuVisible = isVisible
        }
    }
}
})




//import { Store } from 'vuex';
/* 
Vue.use(Vuex)
const mystore = {
    state: {
        isMenuVisible: true
    },
    mutations: {
        toggleMenu(state, isVisible) {
            if(isVisible === undefined) {
                state.isMenuVisible = !state.isMenuVisible
            } else {
                state.isMenuVisible = isVisible
            }
        }
    }
}

export default {
    name: 'store',
    mystore
} */