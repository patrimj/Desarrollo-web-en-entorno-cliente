import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { timer } from 'rxjs';
import { map, takeWhile, finalize } from 'rxjs/operators';
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
  respuestaUsuario = new FormControl('');
  operacion;
  tiempoRestante$;

  constructor() {
    this.operacion = this.generarOperacion();
    this.tiempoRestante$ = timer(0, 1000).pipe(
      map(n => 20 - n),
      takeWhile(n => n >= 0),
      finalize(() => this.siguienteOperacion())
    );
  }

  generarOperacion() {
    const tiposOperacion = ['+', '-', '*', '/'];
    const tipoOperacion = tiposOperacion[Math.floor(Math.random() * tiposOperacion.length)];
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);

    switch (tipoOperacion) {
      case '*':
        num1 = Math.min(num1, num2);
        break;
      case '/':
        num1 = Math.max(num1, num2);
        break;
    }

    return {
      operacion: tipoOperacion,
      num1: num1,
      num2: num2
    };
  }

  siguienteOperacion() {
    this.operacion = this.generarOperacion();
    this.respuestaUsuario = new FormControl('');
    this.tiempoRestante$ = timer(0, 1000).pipe(
      map(n => 20 - n),
      takeWhile(n => n >= 0),
      finalize(() => this.siguienteOperacion())
    );
  }

  validarRespuesta() {
    let resultadoEsperado;

    switch (this.operacion.operacion) {
      case '+':
        resultadoEsperado = this.operacion.num1 + this.operacion.num2;
        break;
      case '-':
        resultadoEsperado = this.operacion.num1 - this.operacion.num2;
        break;
      case '*':
        resultadoEsperado = this.operacion.num1 * this.operacion.num2;
        break;
      case '/':
        resultadoEsperado = Math.round(this.operacion.num1 / this.operacion.num2);
        break;
    }

    let numeroRespuestaUsuario = this.respuestaUsuario.value ? parseInt(this.respuestaUsuario.value) : null;

    if (numeroRespuestaUsuario !== null && !isNaN(numeroRespuestaUsuario) && numeroRespuestaUsuario === resultadoEsperado) {
      alert("¡Correcto!");
      this.operacion = this.generarOperacion();
    } else {
      alert("Respuesta incorrecta.");
    }
  }
}