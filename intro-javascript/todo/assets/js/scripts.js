const { formTask } = document.forms;
const taskListEl = document.querySelector(".task-list");

function validateForm(field) {
  if (field.length === 0) {
    alert("Campo obrigatório.");
    return false;
  }

  return true;
}

function renderTaskDOM(task) {
  taskListEl.insertAdjacentHTML(
    "afterbegin",
    `
        <li>
            <span>${task}</span>
            <button class="delete">delete</button>
        </li>
    `
  );

  const { children } = taskListEl;

  for (let child of children) {
    const { children } = child;

    children[0].addEventListener("click", doneTask);
    children[1].addEventListener("click", deleteTask);
  }
}

function addTask(e) {
  e.preventDefault();

  let { task } = formTask;
  let isValid = validateForm(task.value);

  if (isValid) {
    renderTaskDOM(task.value);
    return;
  }
}

function deleteTask() {
  this.parentElement.remove();
}

function doneTask() {
  this.classList.toggle("completed");
}

formTask.addEventListener("submit", addTask);
