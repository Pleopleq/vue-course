<template>
  <base-card>
    <h2>{{ firstName + ' ' + lastName }}</h2>
    <span v-for="role in roles" :key="role">{{ role }}</span>
    <p>Rating: {{ rate }}</p>
  </base-card>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'roles'],
};
</script>

<style></style>
