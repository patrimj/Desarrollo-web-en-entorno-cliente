import { Pokemon } from "./pokemon.js"


// URL de la API de la Pokédex
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

// Función para realizar la llamada asíncrona
async function obtenerInformacionPokemon(nombrePokemon) {
  try {
    const response = await fetch(apiUrl + nombrePokemon);
    if (!response.ok) {
      throw new Error('No se pudo obtener la información del Pokémon ${nombrePokemon}`');
    }

    const data = await response.json();
    guardarPokemon(data)

    console.log('Información del Pokémon:', data);
  } catch (error) {
    console.error(error);
  }
}

// Llama a la función con el nombre del Pokémon que deseas buscar
obtenerInformacionPokemon('pikachu');

function guardarPokemon(data){
  var pokemon = new Pokemon(data.id,data.name)
  pokemon.mostrarInfo()
}