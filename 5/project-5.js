// Variables for Buttons
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

// Event Listener for the Add button
addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.classList.add("checkTask");
  checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteTask");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  task.appendChild(deleteButton);

  if (inputTask.value === "") alert("Please enter a task");
  else taskContainer.appendChild(task);

  inputTask.value = "";

  checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "line-through";
  });

  deleteButton.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.parentElement.remove();
  });
});
