<template>
  <div>
    <aside></aside>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 1rem 0 1rem 0;
  grid-area: sidebar;
}
aside {
  background-color: blanchedalmond;
  width: 100%;
}

@media (min-width: 1200px) {
  div {
    padding: 0 1rem 0 1rem;
  }

  aside {
    width: 100%;
  }
}
</style>
