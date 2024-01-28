import { Frase } from "./clases.js";

export class Frases {
  constructor() {
    this.frase = new Frase(); 
    this.url = new URLSearchParams(window.location.search); // se utiliza para analizar y manipular los parámetros de la cadena de consulta
    this.categoria = this.url.get('categoria'); // http:...?categoria=explicit --> sacará explicit
  }

  async mostrarFrasePorCategoria() {
    if (this.categoria) {
      const fraseCategoria = await this.frase.getFrasePorCategoria(this.categoria); 
      const div = document.getElementById('frase');
      div.textContent = fraseCategoria; // mete la frase en el html
    } else {
      this.mostrarFraseRandom();
    }
  }

  async mostrarFraseRandom() {
    const fraseRandom = await this.frase.getFraseRandom();
    const div = document.getElementById('frase');
    div.textContent = fraseRandom;
  }
}

const frases = new Frases();
frases.mostrarFrasePorCategoria();
