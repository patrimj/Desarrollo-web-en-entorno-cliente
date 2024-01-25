import { Component, OnInit } from '@angular/core';
import {Alumno} from '../clases/todas-las-clases'
import { PokemonService } from '../servicios/pokemon.service';

@Component({
  selector: 'app-precarga',
  standalone: true,
  imports: [],
  templateUrl: './precarga.component.html',
  styleUrl: './precarga.component.css'
})
export class PrecargaComponent implements OnInit{
  

  alumno = new Alumno()
  ngOnInit(): void {
    const serializedObj = localStorage.getItem('alumno');
    if (serializedObj) {
     const alumno =  JSON.parse(serializedObj) as Alumno
     console.log(alumno)
     this.alumno = alumno
  }

}
}
