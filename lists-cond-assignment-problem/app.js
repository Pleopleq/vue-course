const App = {
  data() {
    return {
      task: "",
      tasks: [],
      isHidden: false,
    };
  },
  computed: {
    buttonCaption() {
      return this.isHidden ? "Hide" : "Show";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
    },
    showList() {
      this.isHidden = !this.isHidden;
    },
  },
};

Vue.createApp(App).mount("#assignment");
