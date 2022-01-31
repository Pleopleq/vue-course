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
  grid-area: main;
  gap: 1rem;
  margin: 1rem;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  background-color: aquamarine;
}
</style>
