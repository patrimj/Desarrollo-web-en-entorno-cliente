import { Categoria } from "./Categoria.js";

async function mostrarCategorias() { 
    const categoria = new Categoria(); // hace una petición get a la API
    const data =  await categoria.obtenerCategorias();  ///llama al método obtenerCategorias para obtener las categorías

    const tabla = document.getElementById('tabla'); 

    data.forEach(function(categoria) { 
        const fila = document.createElement('tr'); // crea una fila
        const enlaceCelda = document.createElement('td'); // crea una celda
        const enlace = document.createElement('a'); // crea un enlace

        enlace.href = `frase.html?categoria=${categoria}`; // añade el atributo href al enlace
        enlace.textContent = categoria; // añade el texto al enlace
        enlaceCelda.appendChild(enlace); // añade el enlace a la celda
        fila.appendChild(enlaceCelda); // añade la celda a la fila
        tabla.appendChild(fila); // añade la fila a la tabla
    })
}

const botonGenerar = document.getElementById('generar');
botonGenerar.addEventListener('click', function() {
    window.location.href = 'frase.html';
});

mostrarCategorias();
