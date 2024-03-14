const TodosApp = {
  data() {
    return {
      todos: [],
      enteredTodoText: "",
    };
  },
  methods: {
    saveTodo(event) {
      event.preventDefault();
      const newTodo = {
        text: this.enteredTodoText,
        id: new Date().toISOString(),
        editedTodoId: null,
      };

      this.todos.push(newTodo);
      enteredTodoText = "";
    },
    startEditTodo() {
      this.editedTodoId;
    },
  },
};

Vue.createApp(TodosApp).mount("#todos-app");
