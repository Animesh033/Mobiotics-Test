export default {
  async loadProducts(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `http://localhost:3000/products`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const products = [];
    for (const key in responseData) {
      const product = {
        id: responseData[key].id,
        brandName: responseData[key].brand_name,
        productName: responseData[key].product_name,
        quantity: responseData[key].quantity,
        price: responseData[key].price,
        mrp: responseData[key].mrp,
        imageUrl: responseData[key].image_url,
        offerText: responseData[key].offer_text
      };
      products.push(product);
    }

    context.commit('setProducts', products);
  },
  addCartProducts(context, payload) {
    if (payload && payload.productId) {
      const prodId = payload.productId;
      const prodQty = payload.numberOfProduct;
      const prodTotalPrice = payload.totalPrice;
      if (context.state.cartProducts.length > 0) {
        context.state.cartProducts = context.state.cartProducts.filter(
          (prod) => prod.id !== prodId
        );
      }
      const item = context.state.products.filter(
        (prod) => prod.id === prodId
      )[0];
      const cartProduct = {
        id: item.id,
        brandName: item.brandName,
        productName: item.productName,
        imageUrl: item.imageUrl,
        offerText: item.offerText,
        price: prodTotalPrice,
        quantity: prodQty,
      };
      context.state.cartProducts.unshift(cartProduct);
      console.log(context.state.cartProducts);
    }
  },
  removeCartProducts(context, prodId) {
    const prodIndex = context.state.cartProducts.findIndex(
      (prod) => prod.id === prodId
    );
    context.getters.cartProducts.splice(prodIndex, 1);
  },
};