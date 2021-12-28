const app = new Vue({
  el: "#assignment",
  data: {
    numberToCompare: 0,
  },
  computed: {
    numberToReach() {
      if (this.numberToCompare < 35) {
        return "Not there yet";
      }
      if (this.numberToCompare > 35) {
        return "Too much!";
      }
      return "Thats it, its 35";
    },
  },
  watch: {
    numberToCompare(value) {
      const that = this;
      setTimeout(() => {
        that.numberToCompare = 0;
      }, 2000);
    },
  },
  methods: {
    add(number) {
      this.numberToCompare += number;
    },
  },
});
