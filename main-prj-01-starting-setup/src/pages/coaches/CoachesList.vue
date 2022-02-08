<template>
  <main-container>
    <div class="coaches-list__title">
      <h1>Coaches Avaliable</h1>
    </div>
  </main-container>
</template>

<script>
export default {
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
.coaches-list__title {
  text-align: center;
}
</style>
