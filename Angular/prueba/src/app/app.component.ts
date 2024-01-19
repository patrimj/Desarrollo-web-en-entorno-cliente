import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { DatosComponent } from './datos/datos.component';
import { RankingComponent } from './ranking/ranking.component';
import { JugarComponent } from './jugar/jugar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, BodyComponent, RouterLink, DatosComponent,  JugarComponent, RankingComponent ], // importarlo aqui
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre = 'Patricia  ';
  
}

//1º importarlo > UserComponent
//2º en app.component.html -->  <app-user></app-user> > importarlo