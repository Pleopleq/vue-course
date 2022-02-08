<template>
  <article class="base-card">
    <slot></slot>
  </article>
</template>

<script>
export default {};
</script>

<style>
.base-card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 1rem;
  border: 1px solid gray;
  text-align: center;
}
</style>
