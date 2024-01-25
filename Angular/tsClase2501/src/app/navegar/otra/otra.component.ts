import { Component, OnInit } from '@angular/core';
import {Alumno, PersonaNormal, User } from '../../clases/todas-las-clases';
import { Router} from '@angular/router';
import { ListaTareasComponent } from '../../tareas/lista-tareas/lista-tareas.component';

import { ConfirmarComponent } from '../../popups/confirmar/confirmar.component';
import {
  MatDialog
} from '@angular/material/dialog';


@Component({
  selector: 'app-otra',
  standalone: true,
  imports: [ListaTareasComponent],
  templateUrl: './otra.component.html',
  styleUrl: './otra.component.css'
})

export class OtraComponent implements OnInit{
  constructor(private router : Router,private dialog: MatDialog){
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
      this.personaNormal.nombre = nombre
      
      const dialog = this.dialog.open( ConfirmarComponent, {
        width: '250px',
        data: this.personaNormal,
        
      });

      dialog.afterClosed().subscribe(
        (result) => {
          if( result) {
            this.router.navigate (['/listaTarea'] ,{skipLocationChange: true})
          }
        }
      )
     

      
    }
  }

  aceptarPopup(){
    alert('Aceptado')
  }
}
