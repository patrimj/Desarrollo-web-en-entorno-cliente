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

