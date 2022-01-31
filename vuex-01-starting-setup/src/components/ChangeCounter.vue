<template>
  <div>
    <button @click="increase({ value: increaseBy })">
      Add {{ increaseBy }}
    </button>
    <input type="number" v-model="increaseBy" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      increaseBy: 0,
    };
  },
  methods: {
    // addOne() {
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: this.increaseBy,
    //   });
    ...mapActions(['increase']),
  },
};
</script>

<style></style>
