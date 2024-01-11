import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
    ranking = 'ranking';
    misdatos = 'misdatos';
    jugar = 'jugar';
    abierto1 = false;
    abierto2 = false;
    abierto3 = false;
    
    alerta1() {
      window.alert('Hola');
      this.abierto1 = true;
    }
  
    alerta2() {
      window.alert('Hola');
      this.abierto2 = true;
    }
  
    alerta3() {
      window.alert('Hola');
      this.abierto3 = true;
    }
}
