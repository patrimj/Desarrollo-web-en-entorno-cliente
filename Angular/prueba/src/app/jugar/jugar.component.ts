import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css']
})
export class JugarComponent implements OnInit {
  ope: string = '';
  respuestaUsuario: number = 0;
  resultado: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    var num1 = Math.floor(Math.random() * 9) + 1;
    var num2 = Math.floor(Math.random() * 9) + 1;
    var operacion = Math.floor(Math.random() * 4);
    switch (operacion) {
      case 0:
        this.resultado = num1 + num2;
        this.ope = num1 + " + " + num2 + " = ";
        break;
      case 1:
        this.resultado = num1 - num2;
        this.ope = num1 + " - " + num2 + " = ";
        break;
      case 2:
        this.resultado = num1 * num2;
        this.ope = num1 + " * " + num2 + " = ";
        break;
      case 3:
        this.resultado = Math.round(num1 / num2);
        this.ope = num1 + " / " + num2 + " = ";
        break;
      default:
        this.resultado = 0;
        break;
    }
    this.temporizador();
  }

  contadorCorrectas: number = 0;

  verificarRespuesta() {
    if (this.respuestaUsuario == this.resultado) {
      alert("Correcto");
      this.contadorCorrectas++;
      localStorage.setItem('puntos', JSON.stringify(this.contadorCorrectas));
      this.respuestaUsuario = 0;
      this.ngOnInit();
    } else {
      alert("Incorrecto");
    }
  }

  tiempo: number = 20;

  temporizador() {
    setInterval(() => {
      this.tiempo--;
      if (this.tiempo == 0) {
        alert("TIEMPOOOOOOOO ¿QUIERES VER EL RANKING?");
        this.router.navigate(['home/ranking']);
      }
    }, 1000);
  }
}