import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jugar',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css']
})
export class JugarComponent {
  operacionStr: string = ''; 
  respuestaUsuario: number = 0;
  resultado: number = 0; 

  generarOperacionAleatoria() {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    var operacion = Math.floor(Math.random() * 3);
    switch (operacion) {
      case 0:
        this.resultado = num1 + num2;
        this.operacionStr = num1 + " + " + num2 + " = ";
        break;
      case 1:
        this.resultado = num1 - num2;
        this.operacionStr = num1 + " - " + num2 + " = ";
        break;
      case 2:
        this.resultado = num1 * num2;
        this.operacionStr = num1 + " * " + num2 + " = ";
        break;
      default:
        this.resultado = 0;
        break;
    }
  }

  verificarRespuesta() {
    if (this.respuestaUsuario == this.resultado) {
      alert("Correcto");
    } else {
      alert("Incorrecto");
    }
  }
}