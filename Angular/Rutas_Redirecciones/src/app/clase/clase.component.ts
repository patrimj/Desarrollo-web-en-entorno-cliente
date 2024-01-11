import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clase',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './clase.component.html',
  styleUrl: './clase.component.css'
})
export class ClaseComponent {
  @Input()  profesor= ''

  alumnos = [
    {
      id: 1,
      nombre: 'Jaime'
    },
    {
      id:2,
      nombre: 'Elena'
    }
  ]
}
