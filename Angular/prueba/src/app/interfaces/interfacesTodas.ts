export interface UsuarioInterface {
    id:  number;
    nombre: string;
    apellidos: string;
    nick: string;
    email: string;
    password: string;

  }

  export interface RankingInterface {
    id_partida: number;
    nick_usuario: string;
    puntos: number;
  }
