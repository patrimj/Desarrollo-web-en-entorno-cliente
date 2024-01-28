import { Pokemon } from "./pokemon.js";


const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

async function obtenerInformacionPokemon(nombrePokemon) {
  try {
    const response = await fetch(apiUrl + nombrePokemon);
    
    if (!response.ok) {
      throw new Error(`No se pudo obtener la información del Pokémon ${nombrePokemon}`);
    }

    const data = await response.json();
    const id = data.id;
    const nombre = data.name;
    const movimientos = data.moves.map(move => move.move.name);

    document.getElementById("id").value = id;
    document.getElementById("nombre").value = nombre;
    

    console.log('Información del Pokémon:', data);

    // Guardar el objeto Pokemon en el almacenamiento local
    const pokemon = new Pokemon(id, nombre);
    pokemon.movimientos = movimientos;
    localStorage.setItem('pokemon', JSON.stringify(pokemon));
  } catch (error) {
    console.error(error);
  }
}

function buscarPokemon() {
  const nombrePokemon = document.getElementById('nombrePokemon').value;
  obtenerInformacionPokemon(nombrePokemon);
}

function mostrarMovimientos() {
  window.location.href = 'movimientos.html';
}


window.buscarPokemon = buscarPokemon;
window.mostrarMovimientos = mostrarMovimientos;
