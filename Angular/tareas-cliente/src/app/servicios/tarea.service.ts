import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Tarea } from '../clases/tarea';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient,  private authService: AuthService) { }

  crearTarea(descripcion: string, dificultad:string, horas_previstas: number, horas_realizadas: number, porcentaje_realizacion: number, completada: boolean): Observable<Tarea | undefined> {
    const headers = new HttpHeaders({
      'x-token' : this.authService.getToken(),
    });
    return this.http.post<Tarea>(`${this.baseUrl}/tarea/crear`, { descripcion, dificultad, horas_previstas, horas_realizadas, porcentaje_realizacion, completada }, { headers }).pipe(
      tap(response => {
        console.log('Response:', response);
        if (response) {
          console.log('Tarea creada:', response)
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

  modificarTarea(id: number, descripcion: string, dificultad:string, horas_previstas: number, horas_realizadas: number, porcentaje_realizacion: number, completada: boolean): Observable<Tarea | undefined> {
    const headers = new HttpHeaders({
      'x-token' : this.authService.getToken(),
    });
    return this.http.put<Tarea>(`${this.baseUrl}/tarea/modificar/${id}`, { descripcion, dificultad, horas_previstas, horas_realizadas, porcentaje_realizacion, completada }, { headers }).pipe(
       tap(response => {
         if (response && response.descripcion && response.dificultad && response.horas_previstas && response.horas_realizadas && response.porcentaje_realizacion && response.completada) {
           console.log('Tarea modificada:', response)
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

   getTareas(): Observable<Tarea[]> {
    const headers = new HttpHeaders({
      'x-token' : this.authService.getToken(),
    });
    return this.http.get<Tarea[]>(`${this.baseUrl}/tareas`,{ headers }).pipe(
      tap(response => {
        if (response) {
          console.log('Tareas:', response)
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
   

   //desplegable con las siguientes consultas

   ranking (): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.baseUrl}/ranking`).pipe(
      tap(response => {
        if (response) {
          console.log('Ranking:', response)
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

   tareasRealizadas (): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.baseUrl}/tareas/realizadas`).pipe(
      tap(response => {
        if (response) {
          console.log('Tareas realizadas:', response)
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

   tareasPendientes (): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.baseUrl}/tareas/pendientes`).pipe(
      tap(response => {
        if (response) {
          console.log('Tareas pendientes:', response)
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

   tareasProgramadorID (id: number): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.baseUrl}/tareas/programador/${id}`).pipe(
      tap(response => {
        if (response) {
          console.log('Tareas de programador:', response)
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
}