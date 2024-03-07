const TodosApp = {
  data() {
    return {
      newTodo: "Learn Vue",
    };
  },
};

Vue.createApp(TodosApp).mount("#todos-app");
