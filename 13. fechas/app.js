let fecha = new Date();
console.log(fecha)
console.log(fecha.getDate())
console.log(fecha.getDay())
console.log(fecha.getMonth()+1)
console.log(fecha.getFullYear())

let fechaConcreto = new Date(2021,10,22) // new Date --> tiene constructores , años mes y dia 
console.log(fechaConcreto)
console.log(fechaConcreto.getDate())
console.log(fechaConcreto.getDay())
console.log(fechaConcreto.getMonth()+1)
console.log(fechaConcreto.getFullYear())

let fechaConHora = new Date(2021,10,22, 22,10,10)// new Date --> tiene constructores , años mes y dia , horas, minutos y segundos
console.log('Fecha con Hora')
console.log(fechaConHora)
console.log(fechaConHora.getDate())
console.log(fechaConHora.getDay())
console.log(fechaConHora.getMonth()+1)
console.log(fechaConHora.getFullYear())
console.log(fechaConHora.getHours())
console.log(fechaConHora.getMinutes())
console.log(fechaConHora.getSeconds())

function formatoFecha(fecha){ // te formatea la fecha
    let dia = fecha.getDay()
    let mes = fecha.getMonth()+1
    let ano = fecha.getFullYear()
    return dia+'/'+mes+'/'+ano
}

console.log(formatoFecha(fecha))
console.log(formatoFecha(fechaConcreto))
console.log(formatoFecha(fechaConHora))



