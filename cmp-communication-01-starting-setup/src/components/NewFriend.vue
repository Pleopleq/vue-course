<template>
  <div>
      <h1>Add new friend</h1>
      <form @submit.prevent="emitNewFriend">
          <label for="">Name</label>
          <input type="text" v-model="name">
          <label for="">Phone</label>
          <input type="text" v-model="phone">
          <label for="">Email</label>
          <input type="text" v-model="email">
          <button type="submit">Submit</button>
      </form>
  </div>
</template>

<script>
export default {
    emits: ['add-friend'],
    data() {
        return {
            name: '',
            phone: '',
            email: ''
        }
    },
    methods: {
        emitNewFriend() {
            this.$emit('add-friend', this.name, this.phone, this.email)
        }
    }
}
</script>

<style>

</style>