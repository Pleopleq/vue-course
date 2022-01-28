<template>
  <div class="main-container">
    <the-header></the-header>
    <the-sidebar>
      <ul>
        <li v-for="category in categories" :key="category">
          {{ category }}
        </li>
      </ul>
    </the-sidebar>
    <the-product-grid>
      <the-product
        v-for="product in products"
        :key="product.id"
        :product="product"
      >
      </the-product>
    </the-product-grid>
  </div>
</template>

<script>
import TheProductGrid from "./components/TheProductGrid.vue";
import TheSidebar from "./components/TheSidebar.vue";
import TheHeader from "./components/TheHeader.vue";
import TheProduct from "./components/TheProduct.vue";

export default {
  name: "App",
  components: { TheProductGrid, TheSidebar, TheHeader, TheProduct },
  data() {
    return {
      categories: [],
      products: [],
    };
  },
  methods: {
    getCategories() {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => (this.categories = json));
    },
    getProducts() {
      fetch("https://fakestoreapi.com/products?limit=5")
        .then((res) => res.json())
        .then((json) => (this.products = json));
    },
  },
  mounted() {
    this.getCategories();
    this.getProducts();
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.main-container {
  display: grid;
  height: 100%;
  grid-template-rows: 120px 120px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "sidebar"
    "main";
}

@media (min-width: 1200px) {
  .main-container {
    display: grid;
    grid-template-rows: 120px 1fr;
    grid-template-columns: 320px 1fr 1fr;
    grid-template-areas:
      "header header header"
      "sidebar main main"
      "sidebar main main";
  }
} ;
</style>
