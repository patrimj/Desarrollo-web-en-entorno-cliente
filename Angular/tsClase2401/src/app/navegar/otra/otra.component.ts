import { Component, OnInit } from '@angular/core';
import {Alumno, PersonaNormal, User } from '../../clases/todas-las-clases';
import { Router} from '@angular/router';
import { ListaTareasComponent } from '../../tareas/lista-tareas/lista-tareas.component';

@Component({
  selector: 'app-otra',
  standalone: true,
  imports: [ListaTareasComponent],
  templateUrl: './otra.component.html',
  styleUrl: './otra.component.css'
})
export class OtraComponent implements OnInit{
  constructor(private router : Router){
    let user = new User()
  }
  ngOnInit(): void {
     
  }
  
  alumno = new Alumno()
  personaNormal = new PersonaNormal()
  recogerPersona(){
    const serializedObj = localStorage.getItem('alumno');
    if (serializedObj) {
     const alumno =  JSON.parse(serializedObj) as Alumno
     console.log(alumno)
     this.alumno = alumno
     
    }
  }

  static ff(params:string) {
    console.log('dd')
  }

  login(){
    
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    var pwd = (<HTMLInputElement>document.getElementById("pwd")).value;
    //Aqui vosotros tendreis que validar algo mejor que lo mio
    if(nombre === 'fran' && pwd === '1234'){
      this.router.navigate (['/listaTarea'] ,{skipLocationChange: true})
    }
  }
}
