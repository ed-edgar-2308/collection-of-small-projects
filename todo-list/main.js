"use strict";

const INPUT = $(".container__form input");
INPUT.value = "";
const todos = JSON.parse(localStorage.getItem("todos"));
todos.forEach(renderTodo);
listen();

$(".container__form button").onclick = (e) => {
  e.preventDefault();
  if (INPUT.value != "") addTodo(INPUT.value);
};

function listen() {
  $$("li").forEach(function (li) {
    li.onclick = function () {
      changeStatus(this);
    };
    li.querySelector("i").onclick = function (e) {
      e.stopPropagation();
      removeTodo(li);
    };
  });
}

function renderTodo(todo) {
  const li = document.createElement("li");
  li.dataset.id = `${todos.indexOf(todo)}`;
  li.innerHTML = `
		<span>${todo.text}</span>
		<i class="fas fa-trash"></i>
	`;
  $(".container__todos").appendChild(li);
  if (todo.status === "completed") {
    li.classList.add("completed");
  }
}

function addTodo(text) {
  todos.push({ text: text, status: "none" });
  localStorage.setItem("todos", JSON.stringify(todos));

  const li = document.createElement("li");
  li.dataset.id = `${todos.length - 1}`;
  li.innerHTML = `
	<span>${text}</span>
	<i class="fas fa-trash"></i>
  `;
  $(".container__todos").appendChild(li);
  INPUT.value = "";
  INPUT.focus();

  li.onclick = function () {
    changeStatus(this);
  };

  li.querySelector("i").onclick = function (e) {
    e.stopPropagation();
    removeTodo(li);
  };
}

function changeStatus(li) {
  li.classList.toggle("completed");
  todos[li.dataset.id].status =
    li.className == "completed" ? "completed" : "none";
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeTodo(li) {
  console.log("🚀 ~ li:", li);
  todos.splice(li.dataset.id, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  li.parentNode.innerHTML = "";
  todos.forEach(renderTodo);
  listen();
}
