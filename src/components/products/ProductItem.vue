<template>
	<section>
		<base-card>
			<div class="product-item">
				<div class="product-photo">
					<img :src="imgUrl" alt="Image" />
					<p class="product-offer-text">{{ offerText }}</p>
				</div>
				<div class="main">
					<div class="product-info">
						<h3>{{ brandName }}</h3>
						<p>{{ productName }}</p>
						<p>{{ quantity }}</p>
						<p>MRP {{ mrp }}</p>
						<p>
							<b>Rs. {{ totalPrice }}</b>
						</p>
					</div>
					<div class="actions">
						<base-button @click="addToCart()">Add cart</base-button>
						<base-button @click="incItem()">+</base-button>
						<span>{{ numberOfProduct }}</span>
						<base-button @click="decItem()">-</base-button>
					</div>
				</div>
			</div>
		</base-card>
		<hr />
	</section>
</template>

<script>
	export default {
		props: [
			"id",
			"brandName",
			"productName",
			"quantity",
			"price",
			"mrp",
			"imageUrl",
			"offerText",
		],
		data() {
			return {
				productId: this.id,
				numberOfProduct: this.quantity,
				productPrice: this.price,
				cartProducts: [],
			};
		},
		computed: {
			imgUrl() {
				return require("../../assets/" + this.imageUrl);
			},
			totalPrice() {
				return this.price * this.numberOfProduct;
			},
		},
		methods: {
			addToCart() {
				const productItem = {
					productId: this.id,
					numberOfProduct: this.numberOfProduct,
					totalPrice: this.productPrice * this.numberOfProduct,
				};
				this.$store.dispatch("products/addCartProducts", productItem);
				this.updateCheckout();
			},
			incItem() {
				this.numberOfProduct++;
			},
			decItem() {
				const nop = this.numberOfProduct--;
				if (nop <= 1) {
					this.numberOfProduct = 1;
				}
			},
			updateCheckout() {
				let amount = 0;
				let amountArr = [];
				amountArr = this.$store.getters["products/cartProducts"].map((prod) => {
					return amount + prod.price;
				});
				console.log(amountArr);
				this.$store.commit("products/setTotalAmount", amountArr);
			},
		},
	};
</script>

<style scoped>
	.header,
	.footer {
		flex: 1 100%;
	}
	.product-photo {
		width: 100%;
	}
	.main {
		width: 100%;
	}
	.product-item {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}
	.product-info,
	.product-offer-text {
		text-align: left;
		padding: 0 50px;
	}
	.actions {
		padding: 0 50px;
		text-align: left;
	}
	.actions span {
		padding: 0 10px;
		text-align: left;
	}
	img {
		width: 100%;
		height: auto;
	}
	@media screen and (min-width: 600px), screen and (orientation: landscape) {
		img {
			width: 100%;
			height: 100%;
			max-width: 300px;
			max-height: 300px;
		}
	}
</style>