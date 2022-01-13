<template>
  <form @submit.prevent="addNewUser">
      <label for="Name">Name</label>
      <input type="text" v-model="name">
      <label for="Age">Age</label>
      <input type="text" v-model="age">
      <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
    emits: ['add-user'],
    data() {
        return {
            name: '',
            age: ''
        }
    },
    methods: {
        addNewUser() {
            this.$emit('add-user', this.name, this.age)
        }
    }
}
</script>

<style>

</style>