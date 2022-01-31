<template>
  <button @click="authUser" v-if="!isAuth">Login</button>
  <button @click="authUser" v-if="isAuth">Logout</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    computed: {
      isAuth() {
        return this.$store.getters.isUserLogged
      }
    },
    methods: {
        ...mapActions(['authUser'])
    }
}
</script>

<style>

</style>