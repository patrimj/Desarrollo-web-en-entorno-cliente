import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { RespuestaLogin } from '../interfaces/respuesta-login';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<RespuestaLogin | undefined> {
    return this.http.post<RespuestaLogin>(`${this.baseUrl}/login`, { email, password }).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          console.log('Usuario correcto:', response)
          console.log('Usuario con token:', response.token)
        } else {
          throw new Error('Error, datos incorrectos');
        }
      }),
      catchError((error) => {
        console.error(error);
        throw error; 
      })
    );
  }


  private token: string | number = '';

  setToken(token: string | number): void { // guarda el token en el localstorage
    this.token = token;
    localStorage.setItem('token', token.toString());
  }

  getToken(): string | number { // obtiene el token del localstorage
    if (!this.token) {
      this.token = localStorage.getItem('token') || '';
    }
    return this.token;
  }

  logout(): void { // elimina el token del localstorage
    this.token = '';
    localStorage.removeItem('token');
  }

}
