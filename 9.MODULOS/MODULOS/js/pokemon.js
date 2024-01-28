export class Pokemon {
    
    
    constructor(id,nombre){
        this.id = id
        this.nombre = nombre
        this.movimientos = []
       
    }

    mostrarInfo(){
        console.log('id: ',this.id, ' nombre: ',this.nombre)
    }

    agregarMovimiento(movimiento){
        this.movimientos.push(movimiento)
    }

    agregarMovimientos(movimientos){
        movimientos.forEach(element => {
            var movimiento = new Movimiento(element.nombre)
            this.agregarMovimiento(movimiento)
        });
    }
}

export class Movimiento {
    constructor(nombre){
        this.nombre = nombre
    }
}