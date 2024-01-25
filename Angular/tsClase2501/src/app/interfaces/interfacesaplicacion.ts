export interface Persona {
    id?:  string;
    nombre: string;
    apellidos: string;
    correo: string;
    direccion: string;
    edad: string;
    genero: Generos;

  }

  export enum Generos {
    masculino = "Masculino",
    femenino = "Femenino",
  }


  