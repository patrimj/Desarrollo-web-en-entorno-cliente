// EJERCICIO 1 //EJERCICIO 3
var nombre1 = 'José';
var ape11 = 'Hernández';
var ape12 = 'Morales';
var edad1 = 18;
var mayorEdad1 = mayor()
var nombre2 = 'María';
var ape21 = 'Ruíz';
var ape22 = 'García';
var edad2 = 14;
var mayorEdad2 = mayor()
var nombre3 = 'Sonia';
var ape31 = 'Patón';
var ape32 = 'González';
var edad3 = 20;
var mayorEdad3 = mayor()
HUHUH

//EJERCICIO 2
console.log('Hola', nombre1, ape11, ape12, 'bienvenido/a');
console.log('Hola', nombre2, ape21, ape32, 'bienvenido/a');
console.log('Hola', nombre3, ape31, ape32, 'bienvenido/a');

mayor(edad1,edad2,edad3)
sumarEdad(edad1,edad2,edad3)
finalizar('José','Hernández','Morales',18)
finalizar('María','Ruíz','García',14)
finalizar('Sonia','Patón','González',20)

//EJERCICIO 4

function mayor(edad){
    if (edad>=18){
        edad= true;
    }else{
        edad= false;
    }
}

//EJERCICIO 5
function sumarEdad() {
    anosTotales = edad1 + edad2 + edad3;
    return anosTotales;
}

//EJERCICIO 6

function finalizar(nombre, apellido1, apellido2, edad){

    if (edad >=18){
        console.log( nombre, apellido1, apellido2, 'es mayor de edad');
    }else{
        console.log( nombre, apellido1, apellido2, 'es menor de edad');
    }
}

//BUCLE
for (let i = 0; i < 10; i++){
    console.log(i)
}

//WHILE - DO WHILE
var i = 0

while (i < 10) {
    i++
    console.log(i)
}

do {
    i++
    console.log(i)
} while (i < 10);

//SWITCH
VAR expr
switch (expr) {
    case "Naranjas":
      console.log("El kilogramo de naranjas cuesta $0.59.");
      break;
    case "Manzanas":
      console.log("El kilogramo de manzanas cuesta $0.32.");
      break;
    case "Platanos":
      console.log("El kilogramo de platanos cuesta $0.48.");
      break;
    case "Cerezas":
      console.log("El kilogramo de cerezas cuesta $3.00.");
      break;
    case "Mangos":
    case "Papayas":
      console.log("El kilogramo de mangos y papayas cuesta $2.79.");
      break;
    default:
      console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
  }
  
  console.log("¿Hay algo más que te quisiera consultar?");

  // Si olvidas un break, el script se ejecutará desde donde se cumple la condición y ejecutará el siguiente case independientemente si esta condición se cumple o no. 

  var foo = 0;
switch (foo) {
  case -1:
    console.log("1 negativo");
    break;
  case 0: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
    console.log(0);
  // NOTA: el "break" olvidado debería estar aquí
  case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
    console.log(1);
    break; // Al encontrar un "break", no será ejecutado el 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
