import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RankingInterface } from '../interfaces/interfacesTodas';


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

    /// si el localsotrage esta vacio, redirigir a login
    const serializedObj = localStorage.getItem('usuario');
    if (!serializedObj) {
      this.router.navigate(['home/datos']);
      alert("Debes insertar datos para jugar");
    }
    this.operacion();
    this.temporizador();
  }

operacion(){
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
        this.Ranking();
        this.router.navigate(['home/ranking']);
      }
    }, 1000);
  }

  usuario() {
    const serializarObj = localStorage.getItem('usuario');

    if (serializarObj) {
      const ususario = JSON.parse(serializarObj);
      return ususario;
    }

  }

  partida: number = 1;
  Ranking() {
    const usuario = this.usuario();
    const usuarioJSON = JSON.parse(JSON.stringify(usuario));
    let id_partida = Number(localStorage.getItem('id_partida') || 1);
    const puntos = Number(localStorage.getItem('puntos') || 0);


      id_partida++
      localStorage.setItem('id_partida', String(id_partida));
  

    let listaRank: RankingInterface[] = JSON.parse(localStorage.getItem('ranking') || '[]');

    var ranking: RankingInterface = {
      id_partida: id_partida,
      nick_usuario:     usuarioJSON.nick|| '',
      puntos: puntos,
    };

    listaRank.push(ranking);
    localStorage.setItem('ranking', JSON.stringify(listaRank));

    let serializarObj = localStorage.getItem('ranking');

    if (serializarObj) {
      listaRank = JSON.parse(serializarObj);
    }
  }
}