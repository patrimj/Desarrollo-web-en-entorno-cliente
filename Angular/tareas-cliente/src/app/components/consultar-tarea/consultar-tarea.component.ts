import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../servicios/tarea.service';
import { Tarea } from '../../clases/tarea';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TareaAsignada } from '../../clases/tarea-asignada';

@Component({
  selector: 'app-consultar-tarea',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './consultar-tarea.component.html',
  styleUrl: './consultar-tarea.component.css'
})
export class ConsultarTareaComponent implements OnInit {
  tareas: Tarea[] = [];
  tareasAsig : TareaAsignada[] = [];
  tareaAsig : TareaAsignada = { id: 0, id_tarea: 0, id_usuario: 0, tareas_realizadas: 0 };
  tarea: Tarea = { id: 0, descripcion: '', dificultad: '', horas_previstas: 0, horas_realizadas: 0, porcentaje_realizacion: 0, completada: false };
  usuario = { id: 0, nombre: '', apellido: '', email: '', password: '', rol: '' };
  tipoConsulta = '';

  constructor(private tareaService: TareaService) { }

  busquedaProgramadorId: string = '';

  ngOnInit(): void {
     this.cargarTareas();
  }
 
  cargarTareas() {
     switch (this.tipoConsulta) {
       case 'ranking':
         this.tareaService.ranking().subscribe(tareas => {
           this.tareasAsig = tareas;
         });
         break;
       case 'realizadas':
         this.tareaService.tareasRealizadas().subscribe(tareas => {
           this.tareas = tareas;
         });
         break;
       case 'pendientes':
         this.tareaService.tareasPendientes().subscribe(tareas => {
           this.tareas = tareas;
         });
         break;
       case 'programador':
         if (this.busquedaProgramadorId) {
           this.tareasProgramadorID(+this.busquedaProgramadorId);
         }
         break;
       default:

         break;
     }
  }
  hayRegistros(): boolean {
    return this.tareas.length > 0;
  }

  tareasProgramadorID(id_ususario: number) {
    this.tareaService.tareasProgramadorID(id_ususario).subscribe(tareas => {
      this.tareas = tareas;
    });
  }
}
