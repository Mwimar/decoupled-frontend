const TodosApp = {
  data() {
    return {
      newTodo: "Learn Vue",
      enteredTodoText: "",
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
