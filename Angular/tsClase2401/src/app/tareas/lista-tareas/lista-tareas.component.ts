import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DetalleTareaComponent } from '../detalle-tarea/detalle-tarea.component';


@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [RouterLink,DetalleTareaComponent],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
   tareas = [
    {
      id: '1',
      titulo: 'GC-CrearAutorizacion',
      detalle: 'Crear formulario de autorizacion de permiso de armas'
    },
    {
      id: '2',
      titulo: 'GC-ActualizarAutorizacion',
      detalle: 'Crear formulario de actualización de autorizacion de permiso de armas'
    }
  ]
}
