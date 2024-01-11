import { Routes } from '@angular/router';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component';
import { UserComponent } from './user/user.component';
import { ClaseComponent } from './clase/clase.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: HomeComponent},
    {path: 'clase', component: ClaseComponent},
    {path: 'user', component: UserComponent},
    {path: 'clase/alumno', component: DetalleAlumnoComponent},
];
