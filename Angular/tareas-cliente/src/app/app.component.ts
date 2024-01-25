import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TareasComponent } from './tareas/tareas.component';
import { LoginComponent } from './login/login.component';
import { ModificarTareaComponent } from './modificar-tarea/modificar-tarea.component';
import { InicioProgramadorComponent } from './inicio-programador/inicio-programador.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { ConsultarTareaComponent } from './consultar-tarea/consultar-tarea.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TareasComponent, LoginComponent, ModificarTareaComponent,InicioProgramadorComponent, CrearTareaComponent, ConsultarTareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tareas Cliente';
}
