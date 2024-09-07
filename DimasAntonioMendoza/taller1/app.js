// Arreglo para almacenar las tareas
let tareas = [];

// Función para agregar una tarea
function agregarTarea() {
    const inputTarea = document.getElementById('nuevaTarea').value;

    if (inputTarea !== '') {
        const tarea = {
            id: Date.now(),
            texto: inputTarea
        };

        tareas.push(tarea); // Añadir la tarea al arreglo
        guardarTareas();    // Guardar las tareas en localStorage
        mostrarTareas();    // Mostrar las tareas en la lista
        document.getElementById('nuevaTarea').value = ''; // Limpiar el campo de texto
    }
}

// Función para mostrar las tareas
function mostrarTareas() {
    const listaTareas = document.getElementById('listaTareas');
    listaTareas.innerHTML = ''; // Limpiar la lista antes de mostrarla nuevamente

    tareas.forEach((tarea) => {
        const li = document.createElement('li');
        li.textContent = tarea.texto;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarTarea(tarea.id);

        li.appendChild(botonEliminar);
        listaTareas.appendChild(li);
    });
}

// Función para eliminar una tarea
function eliminarTarea(id) {
    tareas = tareas.filter((tarea) => tarea.id !== id); // Filtrar las tareas
    guardarTareas();    // Guardar los cambios
    mostrarTareas();    // Actualizar la vista
}

// Función para guardar las tareas en localStorage
function guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Función para cargar las tareas al abrir la página
function cargarTareas() {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
        tareas = JSON.parse(tareasGuardadas);
        mostrarTareas();
    }
}

// Cargar las tareas almacenadas al iniciar la aplicación
window.onload = cargarTareas;
