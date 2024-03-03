const todoFormElement = document.querySelector("#todo-management form");
const todoListElement = document.getElementById("todos-list");

let editedTodoElement;

let response;

async function loadTodos() {
  try {
    response = await fetch("http://localhost:3000/todos");
  } catch (error) {
    alert("Something Went wrong!");
  }
  return;
}

if (!response.ok) {
  alert("Something went wrong!");
  return;
}
