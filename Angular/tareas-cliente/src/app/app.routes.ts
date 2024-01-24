import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TareasComponent } from './tareas/tareas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/login'},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'inicio/tareas', component: TareasComponent},
    {path: 'inicio/usuarios', component: UsuariosComponent},
];
