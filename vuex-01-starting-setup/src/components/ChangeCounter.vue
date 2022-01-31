<template>
  <div>
    <button @click="addOne">Add {{ increaseBy }}</button>
    <input type="number" v-model="increaseBy" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      increaseBy: 0,
    };
  },
  methods: {
    addOne() {
      this.$store.commit({
        type: 'increase',
        value: this.increaseBy,
      });
    },
  },
};
</script>

<style></style>
