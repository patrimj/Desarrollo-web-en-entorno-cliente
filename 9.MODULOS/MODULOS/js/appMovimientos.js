import { Pokemon } from "./pokemon.js"

var pokemon
function cargarDatos(){
    var pokemonString = localStorage.getItem("pokemon")
    var pokemonAux = JSON.parse(pokemonString)
    pokemon = new Pokemon(pokemonAux.id,pokemonAux.nombre);
    pokemon.agregarMovimientos(pokemonAux.movimientos)
    //pokemon = new Pokemon (pokemonAux.id,pokemonAux.nombre,pokemon.movimientos)
}
cargarDatos()
cargarMovimientos()

function cargarMovimientos(){
    var tabla = document.getElementById('tabla-movimientos').getElementsByTagName('tbody')[0]
    pokemon.movimientos.forEach(function(movimiento) {
        var fila = tabla.insertRow()
      
        // Insertar celdas con los datos de la cuenta y la tarjeta
        var nombreMovimientos = fila.insertCell(0)
        
        nombreMovimientos.innerHTML = movimiento.nombre
      
        
        
        
      });
}
