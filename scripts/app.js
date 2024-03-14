const TodosApp = {
  data() {
    return {
      enteredTodoText: "",
    };
  },
  methods: {
    saveTodo(event) {
      event.preventDefault();
      const newTodo = {
        text: this.enteredTodoText,
        id: new Date().toISOString(),
      };
      enteredTodoText = "";
    },
  },
};

Vue.createApp(TodosApp).mount("#todos-app");
