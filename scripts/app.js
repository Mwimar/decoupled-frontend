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
    startEditTodo(todoId) {
      this.editedTodoId = todoId;
      const todo = this.todos.find(function (todoItem) {
        return (todoItem.id = todoId);
      });
      this.enteredTodoText = todo.text;
    },
  },
};

Vue.createApp(TodosApp).mount("#todos-app");
