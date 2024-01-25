import { Routes } from '@angular/router';
import { OtraComponent } from './navegar/otra/otra.component';
import { PrecargaComponent } from './precarga/precarga.component';
import { ListaTareasComponent } from './tareas/lista-tareas/lista-tareas.component';
import { DetalleTareaComponent } from './tareas/detalle-tarea/detalle-tarea.component';
import { PopupsComponent } from './popups/popups.component';

export const routes: Routes = [
    {path: 'home', component: OtraComponent },
    {path: 'precarga', component: PrecargaComponent},
    {path: 'listaTarea', component: ListaTareasComponent},
    {path: 'detalleTarea/:id', component: DetalleTareaComponent},
    {path: 'popups', component: PopupsComponent},
    
];
