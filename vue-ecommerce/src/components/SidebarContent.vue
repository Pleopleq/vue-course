<template>
  <section>
    <div class="sidebar-title">
      <h2>{{ title }}</h2>
    </div>
    <div class="sidebar-content">
      <ul class="sidebar-content__list">
        <li v-for="item of items" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: ["items", "title"],
};
</script>

<style>
.sidebar-title > h2 {
  margin: 0;
  text-align: center;
}

.sidebar-content__list {
  display: flex;
  padding: 0 1rem 0 1rem;
  justify-content: space-between;
  list-style-type: none;
}

@media (min-width: 1200px) {
  .sidebar-content {
    height: 100vh;
  }
}
</style>
