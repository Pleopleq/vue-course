<template>
  <main-container>
    <div class="coachesList-title">
      <h1>Coaches Avaliable</h1>
    </div>
    <section class="coachesList-container" v-if="hasCoaches">
      <coach-details
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :description="coach.description"
        :rate="coach.rate"
        :roles="coach.roles"
      >
      </coach-details>
    </section>
    <h3 v-else>No coaches</h3>
  </main-container>
</template>

<script>
import CoachDetails from './CoachDetails.vue';

export default {
  components: { CoachDetails },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches'];
    },
    hasCoaches() {
      return this.$store.getters['hasCoaches'];
    },
  },
};
</script>

<style scoped>
.coachesList-container {
  display: flex;
  flex-direction: column;
  align-self: center;
}
</style>
