export default {
  products(state) {
    return state.products;
  },
  hasProducts(state) {
    return state.products && state.products.length > 0;
  },
  cartProducts(state) {
    return state.cartProducts;
  },
  hasCartProducts(state) {
    return state.cartProducts && state.cartProducts.length > 0;
  },
  hasThisCartProduct(state, cartProduct) {
    return state.cartProducts.includes(cartProduct.id);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
  totalAmount(state) {
    return state.totalAmount;
  }
};