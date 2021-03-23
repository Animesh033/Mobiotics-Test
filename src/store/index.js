import {
    createStore
} from 'vuex';

import productsModule from './modules/products/index.js';

const store = createStore({
    modules: {
        products: productsModule,
    },
    state() {
        return {
            cartProducts: [],
        };
    },
    mutations: {},
    actions: {},
    getters: {}
});

export default store;