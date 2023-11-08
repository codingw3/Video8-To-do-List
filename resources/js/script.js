const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");

    li.innerHTML = `
              <input type="checkbox" class="checkbox">
              
              <span>${taskText}</span>

              <button class="delete">
                x
              </button>
          `;

    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Enter a task");
  }
});

taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  } else if (event.target.classList.contains("checkbox")) {
    const task = event.target.nextElementSibling;

    if (event.target.checked) {
      task.classList.add("complete");
    } else {
      task.classList.remove("complete");
    }
  }
});
