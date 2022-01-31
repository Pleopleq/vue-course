<template>
  <div class="main-container">
    <the-header>
      <the-navbar></the-navbar>
    </the-header>
    <the-aside></the-aside>
    <the-feed>
      <the-article v-for="dummy in dummyData" :key="dummy"></the-article>
    </the-feed>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheHeader from "./components/TheHeader.vue";
import TheAside from "./components/TheAside.vue";
import TheFeed from "./components/TheFeed.vue";
import TheArticle from "./components/TheArticle.vue";
export default {
  components: { TheHeader, TheNavbar, TheAside, TheFeed, TheArticle },
  name: "App",
  data() {
    return {
      dummyData: [1, 2, 3],
    };
  },
};
</script>

<style>
body {
  height: 100vh;
}
.main-container {
  margin: 0px;
  padding: 0px;
  height: 100vh;

  display: grid;
  grid-auto-rows: 150px 150px 1fr;
  grid-auto-columns: 1fr 1fr;
  grid-template-areas:
    "header header header"
    "sidebar sidebar sidebar"
    "main main main";
}

@media (min-width: 1200px) {
  .main-container {
    display: grid;
    grid-auto-rows: 150px 1fr;
    grid-auto-columns: 150px 1fr 1fr;
    grid-template-areas:
      "header header header"
      "sidebar main main"
      "sidebar main main";
  }
}
</style>
