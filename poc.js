// script.js

const listaDesplegable = document.getElementById('listaDesplegable');
const contenedorElementos = document.getElementById('contenedorElementos');

const datosJSON = [
    { "id": 1, "valor": "Elemento 1" },
    { "id": 2, "valor": "Elemento 2" },
    { "id": 3, "valor": "Elemento 3" },
    // ... agregar más elementos aquí
];

function cargarOpciones() {
    datosJSON.forEach(elemento => {
        const option = document.createElement('option');
        option.value = elemento.id;
        option.textContent = elemento.valor;
        listaDesplegable.appendChild(option);
    });
}

function agregarElementoAlDiv() {
    const elementoSeleccionado = listaDesplegable.options[listaDesplegable.selectedIndex];
    const elementoDiv = document.createElement('p');
    elementoDiv.classList.add('elemento-eliminable');
    elementoDiv.textContent = elementoSeleccionado.textContent;
    elementoDiv.dataset.id = elementoSeleccionado.value;
    contenedorElementos.appendChild(elementoDiv);

    elementoSeleccionado.remove();
}

function eliminarElementoDelDiv(elementoId) {
    const elementoDiv = contenedorElementos.querySelector(`[data-id="${elementoId}"]`);
    if (elementoDiv) {
        elementoDiv.remove();
        const nuevaOption = document.createElement('option');
        nuevaOption.value = elementoId;
        nuevaOption.textContent = elementoDiv.textContent;
        listaDesplegable.appendChild(nuevaOption);
    }
}

listaDesplegable.addEventListener('change', agregarElementoAlDiv);

contenedorElementos.addEventListener('click', function(event) {
    if (event.target.classList.contains('elemento-eliminable')) {
        const elementoId = event.target.dataset.id;
        eliminarElementoDelDiv(elementoId);
    }
});

cargarOpciones();

