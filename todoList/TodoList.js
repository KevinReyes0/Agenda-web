const Form = document.getElementById('Form');
const List = document.getElementById('List');
const botonAltaBaja = document.getElementById('botonAltaBaja');
const botonBajaAlta = document.getElementById('botonBajaAlta');
let todos = JSON.parse(localStorage.getItem('todos')) || [];

document.addEventListener('DOMContentLoaded', renderTodos);

Form.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskName = document.getElementById('taskName').value.trim();
  const taskPriority = parseInt(document.getElementById('taskPriority').value);

  if (taskName) {
    todos.push({ id: Date.now(), name: taskName, priority: taskPriority });
    updateTodos();
  }
  Form.reset();
});


function renderTodos() {
  List.innerHTML = todos
    .map(
      (task) => `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>
          <strong>${task.name}</strong>
          <span class="badge ms-2" style="color:black;">${getPriorityLabel(task.priority)}</span>
        </span>
        <div>
          <button class="btn btn-sm me-2" onclick="editTask(${task.id})">Editar</button>
          <button class="btn btn-sm" onclick="deleteTask(${task.id})">Eliminar</button>
        </div>
      </li>`
    )
    .join('');
}

function updateTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
}

const getPriorityLabel = (priority) =>
  ({ 1: 'Alta', 2: 'Media', 3: 'Baja' }[priority]);

function editTask(id) {
  const task = todos.find((t) => t.id === id);
  if (task) {
    const newName = prompt('Edita el nombre de la tarea:', task.name) || task.name;
    const newPriority = parseInt(
      prompt('Edita la prioridad (1 = Alta, 2 = Media, 3 = Baja):', task.priority)
    ) || task.priority;

    Object.assign(task, { name: newName.trim(), priority: newPriority });
    updateTodos();
  }
}

function deleteTask(id) {
  todos = todos.filter((task) => task.id !== id);
  updateTodos();
}

botonAltaBaja.addEventListener('click', () => {
  todos.sort((a, b) => a.priority - b.priority);
  updateTodos();
});

botonBajaAlta.addEventListener('click', () => {
  todos.sort((a, b) => b.priority - a.priority);
  updateTodos();
});

const name = localStorage.getItem("name");
const correo = localStorage.getItem("correo");
const contra = localStorage.getItem("contra");


document.getElementById("correo").innerHTML = `
  ${correo}
  
`;

document.getElementById("name").innerHTML = `
  ${name}
  
`;

document.getElementById("correo1").innerHTML = `
  ${correo}
  
`;

document.getElementById("name1").innerHTML = `
  ${name}
  
`;

document.getElementById("contra").innerHTML = `
  ${contra}
  
`;


    