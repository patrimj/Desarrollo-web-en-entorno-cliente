import { HttpClient,HttpHeaders } from '@angular/common/http';
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
    const headers = new HttpHeaders({
      'x-token' : this.getToken(),
      'Otra-Cabecera': 'Valor',
    });
    return this.http.get<Pokemon>(this.baseUrl,).pipe(
      catchError((error) =>{
        return of(undefined)
      })
    )
  }

  private token: string | number  = '';

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string | number {
    return this.token;
  }

  clearToken(): void {
    this.token = '';
  }

  

}





