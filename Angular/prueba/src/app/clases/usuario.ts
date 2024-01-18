export class Usuario {
    constructor(
        public id : number,
        public nombre : string,
        public apellidos : string,
        public nick : string,
        public email : string,
        public password : string,
    ) {
    }
}

export class Ranking {
    constructor(
        public id_partida : number,
        public nick_usuario : string,
        public puntos : number,
    ) {
    }
}
