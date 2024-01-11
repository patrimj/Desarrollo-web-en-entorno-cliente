import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
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
  ]
}
