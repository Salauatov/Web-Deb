"use strict";
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
form.addEventListener("submit", function (event) {
 event.preventDefault();
 const taskText = input.value.trim();
 if (taskText === "") return;
 const li = document.createElement("li");
 const checkbox = document.createElement("input");
 checkbox.type = "checkbox";
 const span = document.createElement("span");
 span.textContent = taskText;
 const deleteBtn = document.createElement("button");
 deleteBtn.textContent = "Delete";
 checkbox.addEventListener("change", function () {
   span.classList.toggle("done");
 });
 deleteBtn.addEventListener("click", function () {
   list.removeChild(li);
 });
 li.appendChild(checkbox);
 li.appendChild(span);
 li.appendChild(deleteBtn);
 list.appendChild(li);
 input.value = "";
});