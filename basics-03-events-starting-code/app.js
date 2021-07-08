const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    substract() {
      this.counter--;
    }
  }
});

app.mount('#events');
