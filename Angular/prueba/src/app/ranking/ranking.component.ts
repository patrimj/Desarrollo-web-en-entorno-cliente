import { Component } from '@angular/core';
import { usuario } from '../clases/usuario';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {
  
  rankings = [
    {
      Id: 1,
      nombre: 'Patricia', 
      puntos: 100
    },
    {
      Id: 2,
      nombre: 'Jaime',
      puntos: 200
    },
    {
      Id: 3,
      nombre: 'Elena',
      puntos: 300
    }
  ];

  constructor() {
    usuario = new Usuario(
      JSON.parse(localStorage.getItem('id') || '0'),
      localStorage.getItem('nombre') || '',
      '', 
      '', 
      '', 
      '', 
      JSON.parse(localStorage.getItem('puntos') || '0')
    );

    this.rankings.push({
      Id: this.usuario.id,
      nombre: this.usuario.nombre,
      puntos: this.usuario.puntos
    });
  }

}