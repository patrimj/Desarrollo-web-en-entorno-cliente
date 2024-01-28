import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent implements OnInit {

  nombre: string = '';
  
  constructor( private router: Router) { 
    let nombre = localStorage.getItem('usuario');
    this.nombre = nombre !== null ? nombre : ''; // con esto evitamos que nos salga null en el nombre y nos de error

  }

  ngOnInit(): void {
  }

  crearTarea(): void {
    this.router.navigate(['tareas/crear']);
  }

  modificarTarea(): void {
    this.router.navigate(['tareas/modificar']);
  }

  consultarTarea(): void {
    this.router.navigate(['tareas/consultar']);
  }



}
