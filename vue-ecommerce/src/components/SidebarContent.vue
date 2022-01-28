<template>
  <div class="sidebar-content">
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="item of items" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["items", "title"],
};
</script>

<style>
.sidebar-content {
  width: 100vw;
}

@media (min-width: 1200px) {
  .sidebar-content {
    width: 0;

    height: 100vh;
  }
}
</style>
