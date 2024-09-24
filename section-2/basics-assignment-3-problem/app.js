const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    result(value) {
      setTimeout(() => {
        this.number = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet!";
      } else if(this.number === 37) {
        return this.number;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    addNumber(num) {
      this.number = this.number + num;
    },
  },
});

app.mount("#assignment");
