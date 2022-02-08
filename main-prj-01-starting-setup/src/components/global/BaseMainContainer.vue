<template>
  <main class="main-container">
    <slot></slot>
  </main>
</template>
<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem 2rem 0 2rem;
  height: 100vh;
}
</style>
