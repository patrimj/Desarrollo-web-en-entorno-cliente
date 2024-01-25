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

##### CLASES
- ``tarea``: Clase que contiene los atributos de una tarea.
- ``usuario``: Clase que contiene los atributos de un usuario.
- ``tarea.service``: Servicio que contiene los métodos para la gestión de las tareas.
- ``usuario.service``: Servicio que contiene los métodos para la gestión de los usuarios.
- ``app.module``: Módulo principal de la aplicación.

##### INTERFACES
- ``tarea``: Interfaz que contiene los atributos de una tarea.
- ``usuario``: Interfaz que contiene los atributos de un usuario.
- ``tarea.service``: Servicio que contiene los métodos para la gestión de las tareas.
- ``usuario.service``: Servicio que contiene los métodos para la gestión de los usuarios.