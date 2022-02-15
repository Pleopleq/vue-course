<template>
  <base-card>
    <h2>{{ firstName + ' ' + lastName }}</h2>
    <span v-for="role in rolesToUpperCase" :key="role">{{ role }}</span>
    <p>Rating: {{ rate }}</p>
    <router-view></router-view>
    <router-link :to="coachContactLink">Contact</router-link>
    <router-link :to="coachDetailsLink">View Details</router-link>
  </base-card>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'roles'],
  computed: {
    coachContactLink() {
      return '/coaches/' + this.id + '/contact';
    },
    coachDetailsLink() {
      return '/coaches/' + this.id;
    },
    rolesToUpperCase() {
      return this.roles.map((role) => {
        return role.toUpperCase();
      });
    },
  },
};
</script>

<style></style>
