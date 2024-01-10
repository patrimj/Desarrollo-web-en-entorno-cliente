import { Component } from '@angular/core';
import { ClaseComponent } from '../clase/clase.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ClaseComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  nombre = 'Francisco';
  estaLoggeado = false;
  profesor = 'Fernando'
}
