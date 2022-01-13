<template>
  <div>
      <h1>Components assigment</h1>
      <user-data @add-user="addUser"></user-data>
      <active-user 
      v-for="user in users" 
      :key="user.id"
      :name="user.name"
      :age="user.age"
      >
      </active-user>
  </div>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'
export default {
    components: { ActiveUser, UserData },
    data() {
        return {
            users: []
        }
    },
    methods: {
        addUser(name, age) {
            const newUser = {
                id: new Date().toISOString(),
                name,
                age
            }
            this.users.push(newUser)
        }
    }
}
</script>

<style>

</style>


