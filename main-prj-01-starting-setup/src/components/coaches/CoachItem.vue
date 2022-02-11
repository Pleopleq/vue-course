<template>
  <base-card>
    <h2>{{ firstName + ' ' + lastName }}</h2>
    <span v-for="role in roles" :key="role">{{ role }}</span>
    <p>Rating: {{ rate }}</p>
    <router-view></router-view>
    <router-link to="/coaches/c1/contact">Contact</router-link>
  </base-card>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'roles'],
};
</script>

<style></style>
