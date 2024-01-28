# EJERCICIO TAREAS CLIENTES EN ANGULAR
---
## 1. COMANDOS UTILIZADOS

### Crear un nuevo proyecto

```bash
ng new mi-proyecto
```

### Iniciar el servidor

```bash
ng serve --open
```

### Generar componentes

```bash
ng generate component nuevo-componente
```

### Generar interfaces

```bash
ng generate interface nueva-interfaz
```

### Generar clases

```bash
ng generate class clases/usuario
---
```

## POPUP TEMAS
```bash
ng add @angular/material
```

## 2. ESTRUCTURACIÓN DEL PROYECTO

### APP 

##### COMPONENTES
- ``consultar-tarea``: Componente que muestra la lista de tareas al Administrador.
- ``crear-tarea``: Componente que permite crear una nueva tarea al Administrador. 
- ``inicio-programador``: Componente donde se listan todas las tareas, acceder a su detalle y modificar el porcentaje al Programador.
- ``login``: Componente que permite el acceso al Administrador y al Programador.
-  ``modificar-tarea``: Componente que permite modificar una tarea al Administrador.
-  ``tareas``: el menu de inicio del Administrador, aquí se encontrá enlace a crear, modificar y consultar tareas, para el Administrador.
- ``app.component``: Componente principal de la aplicación.
- ``app.routes``: Archivo de rutas de la aplicación.
- ``app.config``: Archivo de configuración de la aplicación. Importaremos el módulo HttpClient para poder hacer peticiones HTTP.

##### CLASES
- ``tarea``: Clase que contiene los atributos de una tarea.
- ``usuario``: Clase que contiene los atributos de un usuario.

##### INTERFACES
- ``tarea``: Interfaz que contiene los atributos de una tarea.
- ``usuario``: Interfaz que contiene los atributos de un usuario.

##### SERVICIOS
- ``tarea.service``: Servicio que contiene los métodos para la gestión de las tareas.
- ``auth.service``: Servicio que contiene los métodos para la gestión de la autenticación.
  

## 3. PASOS SEGUIDOS

### IMPORTAMOS ``HTTPCLIENT`` EN ``app.config.ts``

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Importamos el módulo HttpClient para poder hacer peticiones HTTP

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient()]
};
```

### CREAMOS LAS RUTAS EN ``app.routes.ts``

```typescript

import { Routes } from '@angular/router';
import { TareasComponent } from './tareas/tareas.component';
import { LoginComponent } from './login/login.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { ModificarTareaComponent } from './modificar-tarea/modificar-tarea.component';
import { ConsultarTareaComponent } from './consultar-tarea/consultar-tarea.component';
import { InicioProgramadorComponent } from './inicio-programador/inicio-programador.component';

export const routes: Routes = [
    //{path: '', pathMatch: 'full', redirectTo: '/login'}, // Si no se pone nada en la url, redirige a login
    {path: 'login', component: LoginComponent},
    {path: 'tareas', component: TareasComponent}, // Tareas para mi es el [INICIO] donde se encontrarán las diferentes funciones [crear, modificar, colsultar] --> ADMIN & [inicio] --> USUARIO
    {path: 'tareas/crear', component: CrearTareaComponent}, // ADMIN
    {path: 'tareas/modificar', component: ModificarTareaComponent}, //ADMIN
    {path: 'tareas/consultar', component: ConsultarTareaComponent},  //ADMIN
    {path: 'tareas/inicio', component: InicioProgramadorComponent}, //PROGRAMADOR
];
```



## 4. RUTAS

```bash
http://localhost:9090/api/registrarse                       // POST
http://localhost:9090/api/login                             // POST
http://localhost:9090/api/perfil/password/:email            // PUT
http://localhost:9090/api/tareas/libres                     // GET
http://localhost:9090/api/tarea/asignar/:id                 // PUT
http://localhost:9090/api/tarea/desasignar/:id              // PUT
http://localhost:9090/api/tareas/asignadas                  // GET
http://localhost:9090/api/tarea/asignada/:id                // GET
http://localhost:9090/api/tareas                            // GET
http://localhost:9090/api/usuario/alta                      // POST
http://localhost:9090/api/usuario/baja/:id                  // DELETE 
http://localhost:9090/api/usuario/modificar/:id             // PUT
http://localhost:9090/api/tarea/crear                       // POST
http://localhost:9090/api/tarea/modificar/:id               // PUT
http://localhost:9090/api/tarea/eliminar/:id                // DELETE
http://localhost:9090/api/tarea/asignar/:id/:id_usuario     // PUT
http://localhost:9090/api/tareas/programador/:id_usuario    // GET
http://localhost:9090/api/tareas/realizadas                 // GET
http://localhost:9090/api/tareas/pendientes                 // GET
http://localhost:9090/api/ranking                           // GET
```



