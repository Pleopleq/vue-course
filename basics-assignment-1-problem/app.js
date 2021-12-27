const app = Vue.createApp({
  data() {
    return {
      name: "Felix Anducho",
      age: "26",
      image: "https://c.tenor.com/2zxX8_0EIQUAAAAC/booba-xviangel.gif",
    };
  },
  methods: {
    randomNumber() {
      return Math.floor(Math.random() * 2);
    },
  },
});

app.mount("#assignment");
