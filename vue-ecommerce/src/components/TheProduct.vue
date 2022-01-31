<template>
  <div class="product-card">
    <h2>{{ product.title }}</h2>
    <img :src="product.image" alt="" width="120" height="120" />
    <p>{{ product.category }}</p>
    <p>${{ product.price }}</p>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style>
.product-card {
  border: 1px black solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
</style>
