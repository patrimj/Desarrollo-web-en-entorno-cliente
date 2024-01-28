import { Pokemon } from "./pokemon.js";

function obtenerPokemonGuardado() {
  const pokemonGuardado = JSON.parse(localStorage.getItem('pokemon'));
  return pokemonGuardado;
}

function mostrarMovimientos() {
    const pokemonGuardado = obtenerPokemonGuardado();
  
    if (pokemonGuardado) {
      const movimientosDiv = document.getElementById('movimientos');
      movimientosDiv.innerHTML = ''; // Limpiar los movimientos anteriores
      const pokemonId = pokemonGuardado.id;
  
      // Hacer una solicitud a la API de PokeAPI para obtener los movimientos del Pokémon
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(data => {
          // Obtener los movimientos del Pokémon de la respuesta de la API
          const movimientos = data.moves.map(move => move.move.name);
          // Crear un elemento de lista para cada movimiento y agregarlo al div de movimientos
          movimientos.forEach(move => {
            const li = document.createElement('li');
            li.textContent = move;
            movimientosDiv.appendChild(li);
          });
        })
        .catch(error => {
          console.error('Error al obtener los movimientos del Pokémon:', error);
          alert('Error al obtener los movimientos del Pokémon. Vuelve a la página de inicio.');
          window.location.href = 'index.html';
        });
    } else {
      // Si no se encontró un Pokémon guardado, puedes mostrar un mensaje de error o redireccionar a la página de inicio.
      alert('No se encontró información del Pokémon. Vuelve a la página de inicio.');
      window.location.href = 'index.html';
    }
  }

function volverAtras() {
  window.location.href = 'index.html';
}

mostrarMovimientos();

window.volverAtras = volverAtras;

