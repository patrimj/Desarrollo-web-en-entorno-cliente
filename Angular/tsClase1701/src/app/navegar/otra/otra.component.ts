import { Component } from '@angular/core';
import { PersonaNormal,Alumno } from '../../clases/todas-las-clases';

@Component({
  selector: 'app-otra',
  standalone: true,
  imports: [],
  templateUrl: './otra.component.html',
  styleUrl: './otra.component.css'
})
export class OtraComponent {
  alumno = new Alumno()
  recogerPersona(){
    const serializedObj = localStorage.getItem('alumno');
    if (serializedObj) {
     const alumno =  JSON.parse(serializedObj) as Alumno
     console.log(alumno)
     this.alumno = alumno
    }
  }
}
