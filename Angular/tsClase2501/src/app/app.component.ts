import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet,Router} from '@angular/router';
import {Persona,Generos} from './interfaces/interfacesaplicacion'
import { PersonaNormal,Alumno } from './clases/todas-las-clases';
import { OtraComponent } from './navegar/otra/otra.component';
import { PrecargaComponent } from './precarga/precarga.component';
import { PokemonService } from './servicios/pokemon.service';
import { Pokemon } from './interfaces/pokemon';
import { PopupsComponent } from './popups/popups.component';
import {DialogAnimationsExampleDialog} from './popups/popups.component'
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,OtraComponent,PrecargaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private pokemonService : PokemonService, private router : Router,public dialog: MatDialog){}
  pokemon?: Pokemon
  consultar(){
    
    this.pokemonService.getPokemon().subscribe({
      next: (poke:Pokemon | undefined) => {
        console.log(poke)
        this.pokemon=poke
        
        
      },
      error: (err) => {
        console.log(err)
      }
    })
    this.router.navigate(['/pokemonDetalle',this])
  }

    persona : Persona = {
      id: '11',
      nombre: 'Francisco',     
      apellidos:        'Alia',
      correo:        'fran@gmail.com',
      direccion: 'Calle Falsa 123',
      edad:       '31',
      genero : Generos.masculino
  }

  crearPersona(){
    const alumno = new Alumno('Ironman', 45, 'Tony');
    alumno.edad =56;
    console.log(alumno);
    sumarEdad(alumno,10)

    localStorage.setItem('alumno',JSON.stringify(alumno))
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
      disableClose: true,
      autoFocus : true,
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      
    });
    
  }

}
function sumar(a: number,b: number): number {
  
  return a+b;
}

function sumarEdad(alumno: Alumno, edad: number): void {
  if(alumno.edad){
    alumno.edad += edad
  } 

}

