export class Categoria {

    constructor() {
        this.nombres = [];
    }

    async obtenerCategorias() {
        const apiUrl = 'https://api.chucknorris.io';

        const response = await fetch(`${apiUrl}/jokes/categories`);
        this.nombres = await response.json();
        return this.nombres;
    }
    
}

export class Frase {
    async getFrasePorCategoria(categoria) { 
      const url = `https://api.chucknorris.io/jokes/random?category=${categoria}`;
      const response = await fetch(url); //obtiene una frase aleat por categoría
      const data = await response.json(); 
      return data.value;//devuelve la frase
    }
  
    async getFraseRandom() {
      const url = 'https://api.chucknorris.io/jokes/random';
      const response = await fetch(url);
      const data = await response.json();
      return data.value;
    }
  }