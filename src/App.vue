<template>
	<router-view></router-view>
	<TheCheckout />
	<TheFooter />
</template>

<script>
	// import { mapActions, mapGetters } from "vuex";
	import TheFooter from "./components/layout/TheFooter.vue";
	import TheCheckout from "./components/layout/TheCheckout.vue";
	export default {
		name: "App",
		components: { TheFooter, TheCheckout },
		mounted() {
			console.log(this.$store.getters["products/cartProducts"]);
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
