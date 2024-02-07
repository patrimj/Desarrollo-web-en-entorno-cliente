import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { guardEjemploGuard } from './guard-ejemplo.guard';

export const routes: Routes = [
    
    {path: 'home', component: HomeComponent, canActivate:[guardEjemploGuard]},
    {path: 'error', component: PaginaErrorComponent},
];
