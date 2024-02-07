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
  token = ''
  
  getPokemon(pokemon:string): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(this.baseUrl+pokemon,{params: {auth: 'si', hola: 'adios'}})     
  }

  autentificado(){
    let auth = false
    if(this.token.length > 0){
      auth = true
    } else {
      auth = false
    }
    
    return auth
  }


}





