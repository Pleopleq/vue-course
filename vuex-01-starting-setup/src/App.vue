<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <other-counter></other-counter>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import TheCounter from './components/TheCounter.vue';
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import OtherCounter from './components/OtherCounter.vue';
import UserAuth from './components/UserAuth.vue'

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    OtherCounter,
    UserAuth
  },
  computed: {
    isAuth() {
      return this.$store.getters.isUserLogged;
    }
  },
  methods: {
    addOne() {
      this.$store.state.counter++;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
