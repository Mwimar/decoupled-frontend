const TodosApp = {
  data() {
    return {
      newTodo: "Learn Vue",
    };
  },
  methods: {
    saveTodo(event) {
      event.preventDefault();
    },
  },
};

Vue.createApp(TodosApp).mount("#todos-app");
