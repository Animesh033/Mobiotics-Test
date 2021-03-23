<template>
	<div>
		<base-dialog
			:show="!!error"
			title="An error occurred!"
			@close="handleError"
		>
			<p>{{ error }}</p>
		</base-dialog>
		<section>
			<div class="controls">
				<base-button mode="outline" @click="loadProducts(true)"
					>Refresh</base-button
				>
			</div>
			<div v-if="isLoading">
				<base-spinner></base-spinner>
			</div>
			<div v-else-if="hasProducts">
				<product-item
					v-for="product in products"
					:key="product.id"
					:id="product.id"
					:brandName="product.brandName"
					:productName="product.productName"
					:quantity="product.quantity"
					:price="product.price"
					:mrp="product.mrp"
					:imageUrl="product.imageUrl"
					:offerText="product.offerText"
				></product-item>
			</div>
			<h3 v-else>No products found.</h3>
		</section>
	</div>
</template>

<script>
	import ProductItem from "../../components/products/ProductItem.vue";

	export default {
		components: {
			ProductItem,
		},
		data() {
			return {
				isLoading: false,
				error: null,
			};
		},
		computed: {
			products() {
				const products = this.$store.getters["products/products"];
				// console.log(products);
				return products;
			},
			hasProducts() {
				return !this.isLoading && this.$store.getters["products/hasProducts"];
			},
		},
		created() {
			this.loadProducts();
		},
		methods: {
			async loadProducts(refresh = false) {
				this.isLoading = true;
				try {
					await this.$store.dispatch("products/loadProducts", {
						forceRefresh: refresh,
					});
				} catch (error) {
					this.error = error.message || "Something went wrong!";
				}
				this.isLoading = false;
			},
			handleError() {
				this.error = null;
			},
		},
	};
</script>

<style scoped>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.controls {
		display: flex;
		justify-content: space-between;
	}
</style>