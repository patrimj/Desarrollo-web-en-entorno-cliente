# Comandos utiles de Angular

## Documentación oficial
https://angular.io/docs

## Instalación de Angular
```bash
npm install -g @angular/cli
```

## Crear un nuevo proyecto

```bash
ng new mi-proyecto
```

## Iniciar el servidor

```bash
ng serve --open
```

## Generar componentes

```bash
ng generate component nuevo-componente
```
# Apuntes de Angular

## RouterLink 
Se utiliza para navegar en htmls, se colocará en las pantallas que se dirijan a otras pantallas, y no en las pantallas que no lleven a ninguna parte.


- Ejemplo: 

```app.routes.ts```
```typescript
//IMPORTAMOS ROUTES, Y LOS COMPONENTES QUE VAMOS A UTILIZAR COMO RUTAS
import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RankingComponent } from './ranking/ranking.component';
import { DatosComponent } from './datos/datos.component';
import { JugarComponent } from './jugar/jugar.component';
import { AppComponent } from './app.component';

/*-------------------------------------------------------------------------------------
CREAMOS LAS RUTAS:
- Routes: es un array de objetos, que contiene las rutas
- '' : es la ruta principal, que se va a redirigir a /home
- pathMatch: es para que la ruta principal se redirija a /home
- path: es el nombre de la ruta
- component: es el componente que se va a utilizar
*** Debemos poner 'home/' en las rutas, porque si no, no funcionan las rutas hijas ***
---------------------------------------------------------------------------------------*/

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: BodyComponent},
    {path: 'home/ranking', component: RankingComponent},
    {path: 'home/datos', component: DatosComponent},
    {path: 'home/jugar', component: JugarComponent},
];
```

```body.component.ts```
```typescript
//IMPORTAMOS ROUTERLINK
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
}
```
  
```body.component.html```
```html
<!--LINKEAMOS CON LA ETIQUETA <routerLink = "nombre de la ruta"-->
<a routerLink="jugar"><img src="../../assets/3.png" (click)="alerta3()"></a>
```

## Formularios
Se utiliza para recoger datos de los usuarios. 

- Ejemplo: 

```datos.component.ts```
```typescript
//IMPORTAMOS REACTIVEFORMS, FORMCONTROL Y FORMGROUP
import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-datos',
  standalone: true,
  //IMPORTAMOS REACTIVEFORMSMODULE
  imports: [ReactiveFormsModule],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})

/*-----------------------------------------------
CREAMOS EL FORMGROUP
- profileForm: es el nombre del formulario
- new FormGroup: es el nuevo formulario
- new FormControl: son los campos del formulario
- (''): es el valor por defecto de los campos
-------------------------------------------------*/

export class DatosComponent {
  profileForm = new FormGroup({
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    nick: new FormControl(''),
    email: new FormControl(''),
  });

/*-----------------------------------------------------------------------
ACCEDEMOS A LOS VALORES DE FORMGROUP
- handleSubmit: es el nombre de la función
- alert: es para mostrar los valores del formulario
- this.profileForm.value: es para acceder a los valores del formulario

------------------------------------------------------------------------*/

  handleSubmit() {
    alert(
      'Nombre:' + this.profileForm.value.nombre +  ' , ' + 'Email:' + this.profileForm.value.email +  ' , ' + 'Nick:' + this.profileForm.value.nick +  ' , ' + 'Apellidos:' + this.profileForm.value.apellidos
    );
  }
}

```
  
```datos.component.html```
```html
<h2>Formulario de mis datos</h2>

<!-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
- [formGroup]="profileForm": es para enlazar el formulario con el html
- (ngSubmit)="handleSubmit()": es para que cuando se envíe el formulario, se ejecute la función handleSubmit()
- formControlName="nombre": es para enlazar los campos del formulario con el html, 
  es decir, que cuando se escriba en el campo del formulario, se escriba en el html, ejemplo: <input type="text" formControlName="nombre" /> esto es lo mismo que <input type="text" value="nombre" /> 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

<form [formGroup]="profileForm" (ngSubmit)="handleSubmit()"> 
    <label>
        Nombre
        <input type="text" formControlName="nombre" />
    </label>
    <label>
        Apellido
        <input type="text" formControlName="apellidos" />
    </label>
    <label>
        Nick
        <input type="text" formControlName="nick" />
    </label>
    <label>
        Email
        <input type="email" formControlName="email" />
    </label>
    <button type="submit">Submit</button>
</form>

<!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------>

<h2>Manejar la actualización del formulario</h2>

<!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
- profileForm.value.nombre: es para acceder a los valores del formulario, 
  es decir, que cuando se escriba en el campo del formulario, se escriba en el html, ejemplo: <p>Nombre: {{ profileForm.value.nombre }}</p> esto es lo mismo que <p>Nombre: {{ nombre }}</p> 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

<p>Nombre: {{ profileForm.value.nombre }}</p>
<p>Apellido: {{ profileForm.value.apellidos }}</p>
<p>Nick: {{ profileForm.value.nick }}</p>
<p>Email: {{ profileForm.value.email }}</p>
```

# DOCUMENTACIÓN de ANGULAR

## MÓDULOS



## COMPONENTES

- Cada aplicación de Angular tiene al menos un componente, el componente raíz que conecta una jerarquía de componentes con el modelo de objetos del documento de la página (DOM). Cada componente define una clase que contiene datos y lógica de la aplicación, y está asociado con una plantilla HTML que define una vista que se mostrará en un entorno de destino.

## app.component.ts
- El componente es una clase de TypeScript que contiene propiedades y métodos. En este caso app es el componente principal de la aplicación. Desde él se pueden crear otros componentes, que se deben exportar en el archivo app.module.ts.

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, BodyComponent ], // importarlo aqui
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
```

-  ```import``` se deben importar los componentes que se van a utilizar en el componente principal.
-  ```@Component``` encontramos
     - ```selector```: es el nombre del componente que se va a utilizar en el html
     - ```standalone```: es un booleano que indica si el componente se va a utilizar solo o no
     - ```imports```: son los componentes que se van a utilizar en el componente principal
     - ```templateUrl```: es el archivo html que se va a utilizar
     - ```styleUrl```: es el archivo css que se va a utilizar
- ```export class AppComponent``` es la clase del componente principal,en javascript normal sería ```class AppComponent```. En esta clase se pueden crear métodos y propiedades que se pueden utilizar en el html.
  - Ejemplo:
    ```typescript
    // app.component.ts
    export class AppComponent {
      title = 'mi-proyecto';
    }
    ```
    ```html
    <!-- app.component.html -->
    <h1> {{ title }} </h1>
    ```
- ```export``` es para exportar la clase para que se pueda utilizar en otros componentes.
- ```@Input()``` es para recibir datos de otro componente.

# TYPESCRIPT

## 1. Generar interfaces

```bash
ng generate interface interfaces/nombre-de-la-interfaz
```

  - Ejemplo: ```ng generate interface interfaces/usuario```
  - En las interfaces se deben poner los datos que se van a utilizar en la aplicación, por ejemplo, si se va a utilizar un usuario, se deben poner los datos que va a tener el usuario, como el nombre, apellidos, email, etc.
  ``` typescript
  // usuario.ts
  export interface Usuario {
    nombre: string;
    apellidos: string;
    email: string;
    nick: string;
    genero: Generos;
  }

  export enum Generos {
    masculino = 'masculino',
    femenino = 'femenino'
  }
  ```
  - Puedes crear un objeto a partir de la interfaz

## 2. Importar la clase de la interfaz

Cuando hay algo ya predefinido, como el genero masculino/femenino, se puede crear una clase para que se pueda utilizar en cualquier parte de la aplicación.

`app.component.ts`
```typescript
import { Usuario, Generos } from './interfaces/usuario';

export class AppComponent {
  usuario: Usuario = {
    nombre: 'Juan',
    apellidos: 'Perez',
    edad: 2,
    genero: Generos.masculino

  };
} /// si en la interfaz tenemos una id?, si la eliminamos de la class AppComponent, no importa
```
`app.component.html`
```html
<p>Nombre: {{ usuario.nombre }}</p>
<p>Apellidos: {{ usuario.apellidos }}</p>
<p>Edad: {{ usuario.edad }}</p>
```

## 3. Enum

```bash
ng generate enum enums/generos
```

Creamos la carpeta `enums` y dentro de ella el archivo `generos.ts`
```typescript
export enum Generos {
  masculino = 'masculino',
  femenino = 'femenino'
}
```
En la interfaz `usuario.ts` importamos el enum
```typescript
import { Generos } from '../enums/generos';

export interface Usuario {
  nombre: string;
  apellidos: string;
  email: string;
  nick: string;
  genero: Generos;
}
```
En el componente `app.component.ts` importamos el enum
```typescript
import { Usuario, Generos } from './interfaces/usuario';
```
Y lo utilizamos
```typescript
export class AppComponent {
  usuario: Usuario = {
    nombre: 'Juan',
    apellidos: 'Perez',
    edad: 2,
    genero: Generos.masculino

  };
}
```
## 4. Clases

```bash
ng generate class clases/usuario
```
Creamos la carpeta `clases` y dentro de ella el archivo `usuario.ts`

*** meter lo que puso de nueva york ***

- Importamos la clase en app.component.ts
```typescript
import { Usuario } from './clases/usuario';

export class AppComponent {
  crearUsuario() {
    const usuario: Usuario = new Usuario('Juan', 'Perez', 2, Generos.masculino);
    usuario.edad = 3;
    console.log(usuario); // esto imprimira el objeto usuario + los datos que le hemos añadido, ejemplo: {nombre: "Juan", apellidos: "Perez", edad: 3, genero: "masculino"}
  localStorage.setItem('usuario', JSON.stringify(usuario)); // esto guardara el objeto usuario en el localstorage // no se suele hacer en la clase es para ir rapido
  const serializableObj = localStorage.getItem('usuario'); 
  if (serializableObj)
  {
    const usuario: Usuario = JSON.parse(serializableObj) as Usuario; 
    usuario.edad = 30;
    console.log(usuario); //Esto imprimira el objeto usuario + los datos que le hemos añadido, ejemplo: {nombre: "Juan", apellidos: "Perez", edad: 30, genero: "masculino"}
  }
  }
}
```

## 5. Funciones
```typescript
function sumar(a: number, b: number): number {
  return a + b;
}
```

## 6. Servicios

### (1) Generamos la interface
- Para generar interfaces usaremos el pluggin de Paste JSON as Code y crearemos una carpeta interfaces dentro de la carpeta app y en ella una interface nueva ``pokemon.js``, en ella haremos ``command + shift + p`` > ``Paste JSON as Code`` > copiaremos todo el texto que sacamos de https://pokeapi.co/api/v2/pokemon/2 y lo pegaremos en el pluggin, nos generará una interfaz con todos los datos que nos devuelve la api. 

### (2) Configuramos ``app.config.ts``

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient()]
};
```
### (3) Creamos un ``environment`` --> envirorment.ts / environment.development.ts

```bash
ng generate environments 
```
- En el archivo environment.ts
``` typescript
export const environment = {
    baseUrl:'https://pokeapi.co/api/v2/pokemon/2'
};
```

### (4) Creamos un ``servicio``
```bash
ng generate service servicios/nombre-del-servicio
ng generate service servicios/pokemon
```

```typescript
import { HttpClient } from '@angular/common/http'; // importamos el HttpClient para poder hacer peticiones http
import { Injectable } from '@angular/core'; // importamos el Injectable para poder inyectar el servicio en otros componentes
import { Observable, catchError,of } from 'rxjs'; // importamos el Observable para poder devolver un observable, catchError para poder capturar errores y of para poder devolver un observable vacio
import {Pokemon} from '../interfaces/pokemon' // importamos la interfaz pokemon
import { environment } from '../../environments/environment'; // importamos el environment para poder acceder a la url de la api

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(private http: HttpClient) { } // inyectamos el HttpClient

  private baseUrl : string = environment.baseUrl // creamos una variable privada que contiene la url de la api

  getPokemon(): Observable<Pokemon | undefined> { // creamos una funcion que devuelve un observable de tipo Pokemon o undefined
    return this.http.get<Pokemon>(this.baseUrl).pipe(
      catchError((error) =>{
        return of(undefined)
      })
    )
  }
}
```
> [!NOTE]
> Observable es un objeto que representa una fuente de datos, y puede ser de cualquier tipo, en este caso es de tipo Pokemon, pero podria ser de tipo string, number, etc.

### (5) Importamos el servicio en el ``app.component.ts``
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PokemonService } from './servicios/pokemon.service';
import { Pokemon } from './interfaces/pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,OtraComponent,PrecargaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private pokemonService : PokemonService){}
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
  }
}
```
> [!NOTE]
> suscribe es una funcion que se ejecuta cuando el observable devuelve un valor, en este caso, cuando la api devuelve un pokemon, se ejecuta la funcion next, y cuando la api devuelve un error, se ejecuta la funcion error.

## 7. Cabeceras

#### Ejemplo de cabeceras:

```typescript

export class PokemonService {

  constructor(private http: HttpClient) { } // inyectamos el HttpClient para poder hacer peticiones http

  private baseUrl : string = environment.baseUrl // creamos una variable privada que contiene la url de la api
  
  getPokemon(): Observable<Pokemon | undefined> { // creamos una funcion que devuelve un observable de tipo Pokemon o undefined
    const headers = new HttpHeaders({ // creamos una variable que contiene las cabeceras
      'x-token' : this.getToken(),
      'Otra-Cabecera': 'Valor',
    });
    return this.http.get<Pokemon>(this.baseUrl,{headers}).pipe( // pasamos las cabeceras a la peticion http
      catchError((error) =>{
        return of(undefined)
      })
    )
  }

  private token: string | number  = ''; // creamos una variable privada que contiene el token 

  setToken(token: string): void { // creamos una funcion que recibe un token y lo guarda en la variable token
    this.token = token; // guardamos el token en la variable token
  }

  getToken(): string | number { // creamos una funcion que devuelve el token
    return this.token;
  }

  clearToken(): void { /// creamos una funcion que borra el token
    this.token = '';
  }
}
```

> OCULTAR RUTAS

```typescript
 skipLocationChange: true;
```
> [!NOTE]
> Snapshot es un objeto que contiene la información de la ruta actual, y el método skipLocationChange es para que no se muestre la ruta en la url.

## 8. GET / POST / PUT / DELETE

```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError,of } from 'rxjs';
import {Pokemon} from '../interfaces/pokemon'
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

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
    return this.http.get<Pokemon>(this.baseUrl,{headers}).pipe(
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

  postPokemon(pokemon: Pokemon): Observable<Pokemon | undefined> {
    const headers = new HttpHeaders({
      'x-token' : this.getToken(),
      'Otra-Cabecera': 'Valor',
    });
    return this.http.post<Pokemon>(this.baseUrl,pokemon,{headers}).pipe(
      catchError((error) =>{
        return of(undefined)
      })
    )
  }

  putPokemon(pokemon: Pokemon): Observable<Pokemon | undefined> {
    const headers = new HttpHeaders({
      'x-token' : this.getToken(),
      'Otra-Cabecera': 'Valor',
    });
    return this.http.put<Pokemon>(this.baseUrl,pokemon,{headers}).pipe(
      catchError((error) =>{
        return of(undefined)
      })
    )
  }

  deletePokemon(pokemon: Pokemon): Observable<Pokemon | undefined> {
    const headers = new HttpHeaders({
      'x-token' : this.getToken(),
      'Otra-Cabecera': 'Valor',
    });
    return this.http.delete<Pokemon>(this.baseUrl,{headers}).pipe(
      catchError((error) =>{
        return of(undefined)
      })
    )
  }

  getPokemon = async (): Promise<Pokemon | undefined> => {
    const headers = new HttpHeaders({
      'x-token' : this.getToken(),
      'Otra-Cabecera': 'Valor',
    });
    try {
      const response = await this.http.get<Pokemon>(this.baseUrl,{headers}).toPromise();
      return response;
    } catch (error) {
      return undefined;
    }
  }
}
```

## 9. MODALES POR TYPESCRIPT

** El modal es otro componente, que se abre encima del componente principal, y se utiliza para mostrar información, como por ejemplo, un mensaje de error, o un mensaje de confirmación. **
```typescript
const dialog  = this.dialog 