class Persona {
    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

var p= new Persona('Fran', 'María');

p.nombre // pondra Fran

constructor (nombre, apellido){ // los constructores son configurables
    this.nombre = nombre;
    this.apellido = apellido + 'fernandez';
    p.apellido // pondra maria fernandez
}

constructor (nombre, apellidos){
    this.nombre = nombre;
    this.apellidos = apellidos;
}
nombreCompleto =  function(){
    return this.nombre + this.apellidos
}
var persona= new Persona('Fran', 'María');
console.log (persona.nombreCompleto())

}


