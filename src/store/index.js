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
    mutations: {
        // setRootCartProducts(state, payload) {
        //     console.log("setRootCartProducts() called!");
        //     const prodId = payload.productId;
        //     if (state.cartProducts.length > 0) {
        //         const prodIndex = state.cartProducts.findIndex(
        //             (prod) => prod.productId === prodId
        //         );
        //         state.cartProducts.splice(prodIndex, 1);
        //     }
        //     state.cartProducts.unshift(payload);
        //     console.log(state);
        // }
    },
    actions: {
        // addRootCartProducts(context, payload) {
        //     context.commit("setRootCartProducts", payload);
        // }
    },
    getters: {
        // rootCartProducts(state) {
        //     return state.rootCartProducts;
        // },
        // hasCartProducts(state) {
        //     return state.rootCartProducts && state.rootCartProducts.length > 0;
        // },
        // hasThisCartProduct(state, cartProduct) {
        //     return state.rootCartProducts.includes(cartProduct.id);
        // },
    }
});

export default store;