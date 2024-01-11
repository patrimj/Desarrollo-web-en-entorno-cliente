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

## routerlink 
- para navegar en html
- ```<a routerLink="/ruta">Inicio</a>```

# Apuntes de Angular

## MÓDULOS

- Cada aplicación en Angular tiene un módulo raíz, convencionalmente nombrado AppModule, que proporciona el mecanismo de arranque que inicia la aplicación. Una aplicación generalmente contiene muchos módulos funcionales.
- Cada aplicación Angular tiene al menos una clase NgModule, el módulo raíz, que se llama convencionalmente AppModule y reside en un archivo llamado app.module.ts. Inicia tu aplicación cargando el NgModule raíz.

src/app/app.module.ts

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

//Aquí se incluye AppComponent en la lista de exports como ilustración; en realidad no es necesario en este ejemplo.
//Un NgModule raíz no tiene ninguna razón para exportar nada porque otros módulos no necesitan importar el NgModule raíz.
```

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
  - Ejemplo: ``````
- ```@Output()``` es para enviar datos a otro componente.
- ```@ViewChild()``` es para recibir datos de un elemento html.
- ```@ViewChildren()``` es para recibir datos de varios elementos html.
- ```@HostListener()``` es para escuchar eventos de un elemento html.
    - Ejemplo: ```@HostListener('click', ['$event']) onClick($event) { ... }```
