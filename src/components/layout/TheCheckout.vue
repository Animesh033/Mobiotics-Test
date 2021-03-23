<template>
	<base-dialog
		:show="checkout"
		title="Checkout successfully!"
		@close="handleCheckout"
	>
		<h1>Total price: {{ totalProductAmount }}</h1>
	</base-dialog>
	<header>
		<nav>
			<h2>Qty: {{ totalProdQty }}</h2>
			<h2>Total: {{ totalProductAmount }}</h2>
			<base-button @click="checkOut" v-if="totalProductAmount > 0"
				>Checkout</base-button
			>
		</nav>
	</header>
</template>
<script>
	import BaseButton from "../ui/BaseButton.vue";
	export default {
		data() {
			return {
				checkout: false,
			};
		},
		components: { BaseButton },
		computed: {
			totalProdQty() {
				return this.$store.getters["products/cartProducts"].length;
			},
			totalProductAmount() {
				return this.$store.getters["products/totalAmount"];
			},
		},
		methods: {
			checkOut() {
				this.checkout = true;
				console.log(this.$store.getters["products/cartProducts"]);
				console.log(this.$store.getters["products/totalAmount"]);
			},
			handleCheckout() {
				this.checkout = false;
			},
		},
	};
</script>

<style scoped>
	header {
		width: 100%;
		height: 5rem;
		background-color: #3d008d;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}

	header a {
		text-decoration: none;
		color: #f391e3;
		display: inline-block;
		padding: 0.75rem 1.5rem;
		border: 1px solid transparent;
	}

	a:active,
	a:hover,
	a.router-link-active {
		border: 1px solid #f391e3;
	}

	h1 {
		margin: 0;
	}

	h1 a {
		color: white;
		margin: 0;
	}

	h1 a:hover,
	h1 a:active,
	h1 a.router-link-active {
		border-color: transparent;
	}

	header nav {
		width: 90%;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	header ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	li {
		margin: 0 0.5rem;
	}
</style>