const TodosApp = {
  data() {
    return {
      newTodo: "Learn Vue",
    };
  },
  methods: {
    saveTodo(event) {
      event.preventDefault();
      this.newTodo = "Updated!";
    },
  },
};

Vue.createApp(TodosApp).mount("#todos-app");
