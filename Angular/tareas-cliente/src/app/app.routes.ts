import { Routes } from '@angular/router';
import { TareasComponent } from './tareas/tareas.component';
import { LoginComponent } from './login/login.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { ModificarTareaComponent } from './modificar-tarea/modificar-tarea.component';
import { ConsultarTareaComponent } from './consultar-tarea/consultar-tarea.component';
import { InicioProgramadorComponent } from './inicio-programador/inicio-programador.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/login'},
    {path: 'login', component: LoginComponent},
    {path: 'tareas', component: TareasComponent}, // Tareas para mi es el [INICIO] donde se encontrarán las diferentes funciones [crear, modificar, colsultar] --> ADMIN & [inicio] --> USUARIO
    {path: 'tareas/crear', component: CrearTareaComponent}, // ADMIN
    {path: 'tareas/modificar', component: ModificarTareaComponent}, //ADMIN
    {path: 'tareas/consultar', component: ConsultarTareaComponent},  //ADMIN
    {path: 'tareas/inicio', component: InicioProgramadorComponent}, //PROGRAMADOR
];


