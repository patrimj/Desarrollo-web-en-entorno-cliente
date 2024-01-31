import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../servicios/tarea.service';
import { Tarea } from '../../clases/tarea';

@Component({
  selector: 'app-consultar-tarea',
  standalone: true,
  imports: [],
  templateUrl: './consultar-tarea.component.html',
  styleUrl: './consultar-tarea.component.css'
})
export class ConsultarTareaComponent implements OnInit {
  opcionSeleccionada: string = '';
 
  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
  }
 
  buscar(): void {
     switch (this.opcionSeleccionada) {
       case 'ranking':
         this.tareaService.ranking().subscribe(
           data => console.log('Ranking:', data),
           error => console.error(error)
         );
         break;
       case 'tareasRealizadas':
         this.tareaService.tareasRealizadas().subscribe(
           data => console.log('Tareas realizadas:', data),
           error => console.error(error)
         );
         break;
       case 'tareasPendientes':
         this.tareaService.tareasPendientes().subscribe(
           data => console.log('Tareas pendientes:', data),
           error => console.error(error)
         );
         break;
       case 'tareasProgramador':
         let programadorId = 1;
         this.tareaService.tareasProgramadorID(programadorId).subscribe(
           data => console.log('Tareas de programador:', data),
           error => console.error(error)
         );
         break;
       default:
         console.error('Opción de consulta no reconocida');
     }
  }
 }
