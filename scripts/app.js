const TodosApp = {
  data() {
    return {
      newTodo: "Learn Vue",
      enteredTodoText: "new tod0....",
    };
  },
  methods: {
    saveTodo(event) {
      event.preventDefault();
      this.newTodo = this.enteredTodoText;
    },
  },
};

Vue.createApp(TodosApp).mount("#todos-app");
