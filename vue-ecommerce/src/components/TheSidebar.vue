<template>
  <aside>
    <slot></slot>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
aside {
  grid-area: sidebar;
  padding: 1rem;
  background-color: violet;
}
</style>
