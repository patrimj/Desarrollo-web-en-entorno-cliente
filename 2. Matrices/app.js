
var  numeros = [1,2,3,4];
numeros [1]; // 2
numeros.lenght// 4

for (let i=0; i< (numeros.lenght);i++){
    console.log(numeros[i]);
}

console.log(numeros)
numeros.push(5)// numeros = [1,2,3,4,5]; AÑADE
console.log(numeros)
numeros.pop()// numeros = [1,2,3]; ELIMINA el ult elemento de una matriz
console.log(numeros)
console.log(Math.pow(2,4)); //eleva 2 al 4

console.log(Math.random()*60)//sacar un numero entero del 0-50
Math.round () // redondea
console.log(Math.round(Math.random()*8))

console.log(numeros.unshift(4))// [2,1,2,3,4,5]; AÑADE el 2 el primero

//find
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);//=='maria'
console.log(found);// 12

//listas en listas
var sublista=numeros.splice(2,2) // [2,3] a partir de la posicion 2 enseñame 2posiciones
console.log(sublista);


//EJERCICIO 1 - ORDENAR MATRICES (CLARA ADELANTA A SONIA 1 POSICIÓN)
var  competicion = ['María','Sonia','Clara','María Jose','Eva', 'Pilar'];
competicion[1] = "Clara"
competicion[2] = "Sonia"
console.log(competicion);

//OTRA FORMA
competicion.splice(1, 2, "Clara", "Sonia");
console.log(competicion);

//EJERCICIO 2 - ELIMINAR USUARIAS DE LA MATRIZ y LAS INTRODUCE EN UNA NUEVA MATRIZ
//competicion.splice(3,3) --> ASI NO
var eliminadas = competicion.splice(3, 3); // ASI LAS ELIMINA E INTRODUCE DIRECTAMENTE
console.log(competicion);
//CREAR UNA NUEVA MATRIZ CON LAS ELIMINADAS
//var eliminadas = ['María Jose','Eva', 'Pilar'] ASI NO

//OTRA FORMA
var eliminadas = competicion.splice(-3);
console.log("Competición actualizada:", competicion);
console.log("Eliminadas:", eliminadas);

//EJERCICIO 3 - CONCATENAR MATRICES
var eliminadosAnteriores =['Bea','Miriam'] 
eliminadasFinales = eliminadas.concat(eliminadosAnteriores);
console.log("Eliminadas Finales:",eliminadasFinales);

//EJERCICIO 4 

var premio = [150, 100, 50];/// crear una matriz con el orden de los premios segun clasificación

// Crear una matriz con el orden de los premios según la clasificación para los tres primeros clasificados
var premiadas = [];

for (let i = 0; i < 3; i++) { // se ejecutara mientras i<3, es decir 3 veces
    var participante = competicion[i]; // saca el nombre del participante de la matriz competicion en la posición i
    var clasificacion = i + 1; // i es la posicion y cuando sea 0 (el primer nombre) le suma 1 para que sea 1 y no 0
    
    if (i === 0) {
        premio = 150;
    } else if (i === 1) {
        premio = 100;
    } else {
        premio = 50;
    }
    //premiadas.push({ participante, clasificacion, premio }); agrega un objeto al array, las almacena PERO NO ES NEC
}

//Imprimir por pantalla el nombre del participante, su clasificación y el premio obtenido.
clasificacionYPremios.forEach((item) => {
  console.log(`Nombre: ${item.participante}, Clasificación: ${item.clasificacion}, Premio: ${item.premio} euros`);
});

//EJERCICIO 5

// Generar un array con 100 números aleatorios comprendidos entre el 0 y el 100 guardarlos e imprimirlos por pantalla con su posición.

// Crear un array para almacenar los números aleatorios
var aleatorio = []; //solo si los quiero almacenar en un array, si no, no hace falta

for (let i = 0; i < 100; i++) {
  var aleatorio = Math.round(Math.random() * 101); // Números entre 0 y 100
  aleatorio.push(aleatorio);// Agregar el número aleatorio al array
}

// e imprimirlos por pantalla con su posición.
aleatorio.forEach((numero, indice) => {// numero e indice se realizan de manera implícita por el método forEach(). No es necesario declarar estas variables previamente 
  console.log(`Posición ${indice + 1}: ${numero}`);
});
/*--------------------------------------------------forEach----------------------------------------------------
forEach: itera sobre cada elemento del array,
SINTAXIS --> array.forEach(function(elemento, indice, array) {
    - array: El array que quieres recorrer.
    - elemento: El valor del elemento actual del array.
    - indice: El índice del elemento actual en el array.

EJEMPLO

var miArray = [1, 2, 3, 4, 5];
miArray.forEach(function(elemento, indice) {
  console.log(`Elemento en el índice ${indice}: ${elemento}`);
});

- En este ejemplo, forEach() recorre cada elemento del array miArray 
y ejecuta la función proporcionada para cada elemento. La función toma dos argumentos: 
[elemento] y [indice], que representan el valor del elemento actual y su índice en el array, respectivamente.
--------------------------------------------------forEach----------------------------------------------------*/    

//Generar un nuevo array donde se guarden todos los números [con la condición de que no se puede repetir ningún número]

//  elimina los elementos duplicados de un array y crear un nuevo array con los elementos únicos.
var nuevo = [...new Set(aleatorio)]; 
console.log("Números sin repetir:", nuevo);

//Una vez que tengamos el nuevo array con todos los números ordenarlos de menor a mayor y mostrar el resultado por pantalla.
// Ordenar el array de menor a mayor
nuevo.sort((a, b) => a - b);
console.log("Números ordenados:", nuevo);

/* EXPLICACIÓN 
[...NEW SET ()]
    Un Set es una estructura de datos en JavaScript que solo almacena valores únicos. 
    Cuando creas un Set a partir de un array, automáticamente elimina los duplicados y retiene solo los valores únicos.
    se utiliza el operador de propagación (...) para convertir el Set resultante nuevamente en un array.
    el nuevo array único se asigna a la variable nuevo.
    new se utiliza en JavaScript para crear una nueva instancia de un objeto. 
    Esto significa que estás creando un nuevo objeto Set que contendrá los elementos únicos del array aleatorio.

[sort(valor,valor)=> valor - valor]
    El método sort() puede aceptar una función de comparación personalizada que determina cómo deben ordenarse los elementos. 
    En este caso, la función de comparación (a, b) => a - b se utiliza para ordenar los elementos numéricos de manera ascendente. 
    La función resta b de a, y el resultado determina el orden. 
    Si el resultado es negativo, significa que a debe venir antes que b. Si es positivo, b debe venir antes que a. 
    Si es cero, los elementos son iguales en términos de orden.

    */

    //MATRICES DIA 2

    