import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {Persona,Generos} from './interfaces/interfacesaplicacion'
import { PersonaNormal,Alumno } from './clases/todas-las-clases';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    persona : Persona = {
      id: '11',
      nombre: 'Francisco',     
      apellidos:        'Alia',
      correo:        'fran@gmail.com',
      direccion: 'Calle Falsa 123',
      edad:       '31',
      genero : Generos.masculino
  }

  crearPersona(){
    const alumno = new Alumno('Ironman', 45, 'Tony');
    alumno.edad =56;
    console.log(alumno);


    localStorage.setItem('alumno',JSON.stringify(alumno))
    const serializedObj = localStorage.getItem('alumno');
    if (serializedObj) {
     const alumno =  JSON.parse(serializedObj) as Alumno
     console.log(alumno)
    }

  }
  number = sumar(3,3)
}
function sumar(a: number,b: number): number {
  
  return a+b;
}

