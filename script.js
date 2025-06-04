const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = input.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    input.value = "";
  }
});

function addTask(task) {
  const li = document.createElement("li");
  li.textContent = task;

  // Complete toggle
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(delBtn);
  list.appendChild(li);
}
