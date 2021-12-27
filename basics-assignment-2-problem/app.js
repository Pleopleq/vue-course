var assigment = new Vue({
  el: "#assignment",
  data: {
    message: "Alert message",
    userName: "",
    confirmedUsername: "",
  },
  methods: {
    alertMessage() {
      alert(this.message);
    },
    setUser(e) {
      this.userName = e.target.value;
    },
    setConfirmedUsername(e) {
      this.confirmedUsername = e.target.value;
    },
  },
});
