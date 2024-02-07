import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError,of } from 'rxjs';
import {Pokemon} from '../interfaces/pokemon';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  private baseUrl : string = environment.baseUrl

  
  getPokemon(pokemon:string): Observable<Pokemon | undefined> {
 
    return this.http.get<Pokemon>(this.baseUrl+pokemon,{params: {auth: 'si', hola: 'adios'}})
     
  }
}





