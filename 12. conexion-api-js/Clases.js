export class Personas {
    constructor(dni, nombre, tfno, edad) {
        this.dni = dni;
        this.nombre = nombre;
        this.tfno = tfno;
        this.edad = edad;

    }
    mostrar() {
        console.log(`DNI: ${this.dni} nombre: ${this.nombre} telefono: ${this.tfno} edad:${this.edad}`);
    }
}

export class Coche {

    constructor(matricula, marca, modelo, precio_dia) {
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.precio_dia = precio_dia;
    }
    mostrar() {
        console.log(`El coche es un ${this.marca} ${this.modelo} con matricula ${this.matricula} y cuesta ${this.precio_dia}€ al día`);
    }
}


export class Propiedad {
    constructor(id, DNI, Matricula, dias_alquilado, entregado) {
        this.id = id;
        this.DNI = DNI;
        this.Matricula = Matricula;
        this.dias_alquilado = dias_alquilado;
        this.entregado = entregado;
    }
    mostrar() {
        console.log(`El coche con matricula ${this.Matricula} ha sido alquilado por ${this.dias_alquilado} días`);
    }
}