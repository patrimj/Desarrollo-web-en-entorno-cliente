import { Frase } from "./frase.js"; 

export class Frases {
  constructor() {
    this.api = new Frase(); 
    this.urlParams = new URLSearchParams(window.location.search); // se utiliza para analizar y manipular los parámetros de la cadena de consulta
    this.categoria = this.urlParams.get('categoria'); // http:...?categoria=explicit --> sacará explicit
  }

  async mostrarFrasePorCategoria() {
    if (this.categoria) {
      const frase = await this.api.getFrasePorCategoria(this.categoria); /// hace una petición get a la API
      const contenedor = document.getElementById('frase');
      contenedor.textContent = frase; // mete la frase en el html
    } else {
      this.mostrarFraseRandom();
    }
  }

  async mostrarFraseRandom() {
    const frase = await this.api.getFraseRandom();
    const contenedor = document.getElementById('frase');
    contenedor.textContent = frase;
  }
}

const frases = new Frases();
document.addEventListener('DOMContentLoaded', () => { //DOMContentLoaded --> se dispara cuando el documento HTML ha sido completamente cargado y parseado, evitando errores de carga de recursos externos (CSS o JS)
  frases.mostrarFrasePorCategoria();
});