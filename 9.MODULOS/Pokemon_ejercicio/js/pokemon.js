export class Pokemon {
    constructor(id, nombre) {
      this.id = id;
      this.nombre = nombre;
      this.movimientos = [];
    }
  
    mostrarInfo() {
        console.log('ID:', this.id, 'Nombre:', this.nombre, 'Movimientos:', this.movimientos.join(', '));
      }
}

    function cargarPokemon(data) {
        var pokemon = new Pokemon(data.id, data.nombre);
        nomPokemon.value = pokemon.nombre;
        numeroPokemon.value = pokemon.id;
        pokemon.mostrarInfo();
        spokemon = JSON.stringify(pokemon);
        localStorage.setItem('pokemon', spokemon);
    }
  
  