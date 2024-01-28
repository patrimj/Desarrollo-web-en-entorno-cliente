import { Pokemon } from "./pokemon.js"
import { Movimiento } from "./pokemon.js"


var buscar = document.getElementById('buscar')
var mensajeError = document.getElementById('mensajeError')
var movimientos = document.getElementById('movimientos')
// URL de la API de la Pokédex
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
var pokemon 
// Función para realizar la llamada asíncrona
async function obtenerInformacionPokemon(nombrePokemon) {
  try {
    const response = await fetch(apiUrl + nombrePokemon);
    if (!response.ok) {
      throw new Error('No se pudo obtener la información del Pokémon ${nombrePokemon}`');
    }

    const data = await response.json();
    cargarPokemon(data)
    console.log('Información del Pokémon:', data);
  } catch (error) {
    console.error(error);
  }
}
buscar.addEventListener('click',function(){
  if(validarBusqueda()){
    obtenerInformacionPokemon(document.getElementById('nombre').value);
  }
  
})

// Llama a la función con el nombre del Pokémon que deseas buscar
//obtenerInformacionPokemon('pikachu');

function cargarPokemon(data){
  var pokemon = new Pokemon(data.id,data.name)
  cargarDatosPantalla(pokemon)
  pokemon = cargarMovimientos(data,pokemon)
  document.getElementById('movimientos').disabled = false
  localStorage.setItem("pokemon",JSON.stringify(pokemon))
}

function cargarDatosPantalla(pokemon){
  document.getElementById('id').value = pokemon.id
  document.getElementById('nombrePokemon').value = pokemon.nombre
}

function validarBusqueda(){
  var valido = true
  if(document.getElementById('nombre').value == 0){
    mensajeError.textContent = 'Se debe introducir un pokemon'
    valido = false
  }
  return valido
  
}

movimientos.addEventListener('click',function(){
  window.location.href='movimientos.html'
})

function cargarMovimientos(data,pokemon) {
  data.moves.forEach(element => {
      var movimiento = new Movimiento(element.move.name)
      pokemon.agregarMovimiento(movimiento)
  });
  
  return pokemon
}
