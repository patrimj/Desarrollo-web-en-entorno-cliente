
/* EJEMPLO FRAN
const options = {
    method: 'POST',
    body: JSON.stringify(jsonData),
};

const headers = new Headers();
headers.set ("Content-Type", "application/json");
headers.set("Content-Encoding", "br");

fetch (url, options)
    .then(response => response.text())
    .then(data => {

    });*/

const headers = new Headers();
    headers.set ("Content-Type", "application/json");
    headers.set("Content-Encoding", "br");

const optionsGet = {
    method: "GET",
};
    
const optionsPut = {
    method: "PUT",
    body: JSON.stringify(persona),
};

const optionsDelete = {
    method: "DELETE",
};

const optionsPost = {
    method: "POST",
    body: JSON.stringify(persona),
};


// Función para hacer una petición GET
function getUsuarios() {
    fetch('http://127.0.0.1:9090/api/usuarios', optionsGet)
      .then(response => response.json()) // recibide la respuesta del servidor
      .then(data => console.log(data)) // si la promesa se resuelve, recibimos los datos
      .catch((error) => {// si la promesa no se resuelve, recibimos el error
        console.error('Error:', error);
      });
  }

function crearUsuario(persona) { //mete un usuario en la base de datos
    fetch('http://127.0.0.1:9090/api/usuarios', optionsPost)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });

}

function modificarUsuario(dni){
    fetch ('http://127.0.0.1:9090/api/usuarios', optionsPut)
        .then (response => response.json())
        .then (data => console.log(data))
        .catch ((error) => {
            console.error('Error:', error);
        });
}

function borrarUsuario(){
    fetch ('http://127.0.0.1:9090/api/usuarios', optionsDelete)
        .then (response => response.json ())
        .then (data => console.log (data))
        .catch ((error) => {
            console.error ('error', error)
        })
}
  
  //para probar las funciones
    getUsuarios();
    crearUsuario({dni: 12345678, nombre: 'Juan', telefono: 123456789, edad: 20})
    modificarUsuario(12345678, {nombre: 'Juan', telefono: 123456789, edad: 20});
    borrarUsuario(12345678);
