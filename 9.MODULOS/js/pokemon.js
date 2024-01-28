export class Pokemon {
    constructor(id,nombre){
        this.id = id
        this.nombre = nombre
    }

    mostrarInfo(){
        console.log('id: ',this.id, ' nombre: ',this.nombre)
    }
}

//clase abilidad
//importemos y exportemos modulos
//llevarme el objeto de movimientos al otro javascript
//recorrer movimientos
//pinchar movimientos y llevar a otra ventana con un boton de volver a tras que siga el mismo objet, en el index mirar si hay un objeto buscado