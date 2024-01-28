class Alumno {
    
    constructor(nombre,tutor, asignaturas) {
        this.nombre = nombre;
        this.tutor = tutor;
        this.asignaturas = []; // array tiene 4 asignaturas
    }

    function notaMedia() {

        let notas = 0; 
        
        for (let asignatura in this.asignaturas) {
            notas += asignatura.nota; // se le van  agregando 
        }
        const notaMedia = notas / this.asignaturas.length; //notas / 4 asignaturas
        return notaMedia;
        
    }
}

class Tutor {
    constructor(nombre,dni) {
        this.nombre = nombre;
        this.dni = dni;
    }
}

class Asignaturas{
    constructor(nombre,nota) {
        this.nombre = nombre;
        this.nota = nota;
    }
}

const alumno1 = new Alumno("Patricia", tutor, asignatura);
const asignatura1 = new Asignatura("entornos", 5);
const asignatura2 = new Asignatura("sistemas", 5);
const asignatura3 = new Asignatura("dam", 5);
const asignatura4 = new Asignatura("daw", 5);

notFinal = alumno1.notaMedia()
asignaturas[asignatura1,asignatura2,asignatura3,asignatura4] 

console.log (notFinal)
