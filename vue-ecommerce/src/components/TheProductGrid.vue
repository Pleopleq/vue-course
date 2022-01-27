<template>
  <div class="product-list">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.product-list {
  display: grid;
  gap: 1rem;
  grid-area: main;
  height: 100vh;
  background-color: burlywood;
}

@media (min-width: 1200px) {
  .product-list {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1420px) {
  .product-list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
