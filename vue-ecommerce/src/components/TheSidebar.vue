<template>
  <aside>
    <h1>Categories</h1>
    <slot></slot>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
aside {
  grid-area: sidebar;
  height: 100%;
  background-color: violet;
}
</style>
