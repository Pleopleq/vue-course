<template>
  <main-container>
    <div class="coachesList-title">
      <h1>Coaches Avaliable</h1>
    </div>
    <section class="coachesList-container">
      <coach-details
        v-for="coach in coachesList"
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
  </main-container>
</template>

<script>
import CoachDetails from './CoachDetails.vue';

export default {
  components: { CoachDetails },
  data() {
    return {
      coachesList: [
        {
          id: 1,
          firstName: 'Felix',
          lastName: 'Anducho',
          description: 'asdf',
          rate: 8,
          roles: ['Front-End'],
        },
        {
          id: 2,
          firstName: 'Luis',
          lastName: 'Anducho',
          description: 'asdf',
          rate: 10,
          roles: ['Front-End', 'Back-End'],
        },
      ],
    };
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
