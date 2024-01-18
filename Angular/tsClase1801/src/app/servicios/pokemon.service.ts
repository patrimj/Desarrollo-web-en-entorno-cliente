import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError,of } from 'rxjs';
import {Pokemon} from '../interfaces/pokemon'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  private baseUrl : string = environment.baseUrl

  getPokemon(): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(this.baseUrl).pipe(
      catchError((error) =>{
        return of(undefined)
      })
    )
  }
}
