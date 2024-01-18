export class PersonaNormal {
    
    constructor( 
        public nombre?: string, 
        public direccion?: string
    ) {

    }

}

export class Alumno extends PersonaNormal{
    constructor(
        public alterEgo?: string, 
        public edad?: number, 
        public nombreReal?: string
    ) {
        super('Francisco', 'USA');
    }

}
