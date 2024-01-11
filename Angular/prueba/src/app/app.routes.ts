import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RankingComponent } from './ranking/ranking.component';
import { DatosComponent } from './datos/datos.component';
import { JugarComponent } from './jugar/jugar.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: BodyComponent},
    {path: 'home/ranking', component: RankingComponent},
    {path: 'home/datos', component: DatosComponent},
    {path: 'home/jugar', component: JugarComponent},
];
