import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { PokemonService } from './servicios/pokemon.service';
import { Pokemon } from './interfaces/pokemon';
import { HomeComponent } from './home/home.component';
import { ImagenPipe } from './pipes/imagen-pipe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,HomeComponent,ImagenPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  mostrarFormulario = false
  constructor(private servicioPokemon:PokemonService,private router:Router){}
  pokemon?: Pokemon

  buscarPokemon(){
    
    var nombre = (<HTMLInputElement>document.getElementById("pokemon")).value;
    let pokemon = this.servicioPokemon.getPokemon(nombre).subscribe({
      next: (poke:Pokemon | undefined) => {
        this.mostrarFormulario=true
        console.log(poke)
        this.pokemon=poke
        
      },
      error: (err) => {
        console.log(err)
      
      }
    })
  }

  comprobarLogin(){
    console.log('login')
    this.servicioPokemon.autentificado()
      this.router.navigate(['/home'])
    }
  }

