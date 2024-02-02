import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../servicios/tarea.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TareaAsignada } from '../../clases/tarea-asignada';
import { Tarea } from '../../clases/tarea';
import { TareaAsignadaPro } from '../../interfaces/tarea-asignada';

@Component({
  selector: 'app-consultar-tarea',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './consultar-tarea.component.html',
  styleUrl: './consultar-tarea.component.css'
})
export class ConsultarTareaComponent implements OnInit {
  tareas: Tarea[] = []; // Array de tareas siendo Tarea una interfaz
  tarea: Tarea = { id: 0, descripcion: '', dificultad: '', horas_previstas: 0, horas_realizadas: 0, porcentaje_realizacion: 0, completada: false };

  tareasPro: TareaAsignadaPro[] = [];
  tareaPro: TareaAsignadaPro = { id_tarea: 0, id_usuario: 0, tarea: { id: 0, descripcion: '', dificultad: '', horas_previstas: 0, horas_realizadas: 0, porcentaje_realizacion: 0, completada: false, createdAt: '', updatedAt: '' }, createdAt: '', updatedAt: '' }; // Array de tareas asignadas siendo TareaAsignada una interfaz

  tareasAsig: TareaAsignada[] = [];
  tareaAsig: TareaAsignada = { id: 0, id_tarea: 0, id_usuario: 0, tareas_realizadas: 0 }; // Array de tareas asignadas siendo TareaAsignada una interfaz

  tipoConsulta = ''; // para el select
  idProgramador = 0; // para el input

  constructor(private tareaService: TareaService) { }

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
        this.buscar()
        break;

      default:


        break;
    }
  }
  hayRegistros(): boolean {
    return this.tareas.length > 0;
  }



  buscar() {

    if (this.tipoConsulta === 'programador') {

      this.tareaService.tareasProgramadorID(this.idProgramador).subscribe(tareas => {
        this.tareasPro = tareas;
      });
    }
  }



}
