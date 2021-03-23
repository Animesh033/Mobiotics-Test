export default {
  setProducts(state, payload) {
    state.products = payload;
  },
  setCartProducts(state, payload) {
    state.cartProducts = payload;
  },
  setTotalAmount(state, payload) {
    state.totalAmount = payload.reduce((a, b) => a + b, 0);
    console.log(state.totalAmount);
  }
};