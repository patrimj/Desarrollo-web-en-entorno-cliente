import { Routes } from '@angular/router';
import { OtraComponent } from './navegar/otra/otra.component';
import { PrecargaComponent } from './precarga/precarga.component';

export const routes: Routes = [
    {path: 'home', component: OtraComponent },
    {path: 'precarga', component: PrecargaComponent},
];
