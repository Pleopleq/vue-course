<template>
  <main-container>
    <div class="coachesList-title">
      <h1>Coaches Avaliable</h1>
    </div>
    <the-coach-filter @change-filter="setFilters"></the-coach-filter>
    <section class="coachesList-container" v-if="hasCoaches">
      <coach-item
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :description="coach.description"
        :rate="coach.rate"
        :roles="coach.roles"
      >
      </coach-item>
    </section>
    <h3 v-else>No coaches</h3>
  </main-container>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import TheCoachFilter from '../../components/TheCoachFilter.vue';
export default {
  components: { CoachItem, TheCoachFilter },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
      },
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches'];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.roles.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.roles.includes('backend')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters['hasCoaches'];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
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
