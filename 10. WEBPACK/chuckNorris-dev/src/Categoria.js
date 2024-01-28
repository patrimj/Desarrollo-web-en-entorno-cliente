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

