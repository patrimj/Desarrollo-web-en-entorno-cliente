import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { PokemonService } from '../../servicios/pokemon.service';

@Component({
  selector: 'app-detalle-tarea',
  standalone: true,
  imports: [],
  templateUrl: './detalle-tarea.component.html',
  styleUrl: './detalle-tarea.component.css'
})
export class DetalleTareaComponent implements OnInit {
  
  ngOnInit(): void {
    let id = this.rutaActiva.snapshot.params['id']
    alert('id')

  
  }
  constructor(private router : Router,private rutaActiva: ActivatedRoute, private service:PokemonService){
  }
  
}
