<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
export default {
  components: { TheHeader },
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
