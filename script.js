// Referencias a los elementos del DOM
const clientForm = document.getElementById('admin-client-form');
const listaClientes = document.getElementById('lista-clientes-admin');

// Escuchar el evento de envío del formulario
clientForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se refresque

    // Obtener valores de los inputs
    const nombre = document.getElementById('client-name').value;
    const cedula = document.getElementById('client-id').value;

    // Crear una nueva fila para la tabla
    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${cedula}</td>
        <td>
            <button onclick="eliminarFila(this)" style="color: red; border: none; background: none; cursor: pointer;">
                Eliminar
            </button>
        </td>
    `;

    // Agregar la fila a la tabla
    listaClientes.appendChild(fila);

    // Limpiar el formulario para el siguiente registro
    clientForm.reset();
});

// Función para eliminar clientes de la lista
function eliminarFila(boton) {
    if(confirm('¿Estás seguro de eliminar este cliente?')) {
        boton.parentElement.parentElement.remove();
    }
}