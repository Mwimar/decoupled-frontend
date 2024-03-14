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
      if (this.editedTodoId) {
        const todoIndex = this.todos.findIndex(function (todoItem) {
          return todoItem.id === this.editedTodoId;
        });
        const updatedTodoItem = {
          id: this.todos[todoIndex].id,
          text: this.enteredTodoText,
        };

        this.todos[todoIndex] = updatedTodoItem;
      } else {
        const newTodo = {
          text: this.enteredTodoText,
          id: new Date().toISOString(),
          editedTodoId: null,
        };

        this.todos.push(newTodo);
      }
      enteredTodoText = "";
    },
    startEditTodo(todoId) {
      this.editedTodoId = todoId;
      const todo = this.todos.find(function (todoItem) {
        return todoItem.id === todoId;
      });
      this.enteredTodoText = todo.text;
    },
  },
};

Vue.createApp(TodosApp).mount("#todos-app");
