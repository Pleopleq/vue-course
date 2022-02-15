<template>
  <main-container>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ price }}/Hour</h3>
      <p v-for="role in selectedCoach.roles" :key="role">{{ role }}</p>
      <div>
        <h2>Interested? Reach out now!</h2>
        <button :to="contactLink">Contact</button>
        <router-view></router-view>
      </div>
    </base-card>
  </main-container>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    price() {
      return this.selectedCoach.cost;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>

<style></style>
