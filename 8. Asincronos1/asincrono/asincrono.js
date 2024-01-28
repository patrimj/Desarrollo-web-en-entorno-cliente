//asincrono significa que no se ejecuta en orden, sino que se ejecuta cuando se puede
//operaciones asincronas: son operaciones que se ejecutan en un tiempo indeterminado

console.log("Inicio");

setTimeout(function() { //setTimeout es una funcion que recibe 2 parametros, una funcion y un tiempo en milisegundos
  console.log("Esto se ejecutará después de 2 segundos.");
}, 2000);

console.log("Fin"); /// va a llegar el fin antes que el setTimeout, y 2 seg despues se ejecuta el setTimeout

//PROMESAS metodo asincrono que si sale correcto hace algo y si sale mal hace otra cosa
/*En JavaScript, puedes utilizar promesas para manejar operaciones asincrónicas
 y ejecutar código cuando una operación se completa con éxito o falla.*/

const miPromesa = new Promise((resolve, reject) => { //resolve es lo que se ejecuta si sale bien, reject si sale mal
  // Simula una operación asincrónica, como una solicitud HTTP
  setTimeout(() => {
    const exito = true; // Cambia a `false` para simular un error
    if (exito) {
      resolve("La operación se completó con éxito.");
    } else {
      reject("La operación ha fallado.");
    }
  }, 2000); // Simula un retraso de 2 segundos
});


//Consumir una promesa
/*Puedes utilizar los métodos then() y catch() para manejar el resultado de una promesa
 cuando se resuelve con éxito o cuando se produce un error:*/

 miPromesa //.then es lo que se ejecuta si sale bien y se va con resolve de arriba
  .then((resultado) => { ///resultado puede ser pepito, se le puede poner cualquier nombre
    console.log("Éxito:", resultado);
  })
  .catch((error) => {//.catch es lo que se ejecuta si sale mal y se va con reject de arriba
    console.error("Error:", error);
  });


//Ejercicio 1
//Crea una promesa que se resuelva después de un cierto retraso y 
// muestra un mensaje en la consola cuando se resuelve.
function retrasarPromesa(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promesa resuelta después de ${ms} milisegundos.');
    }, ms);
  });
}

retrasarPromesa(2000)
  .then((mensaje) => {
    console.log(mensaje);
  });

  ////Ejercicio 2
  //Promesa de Número Aleatorio: Crea una promesa que genere un número//aleatorio entre 1 y 6, simulando un dado, y se resuelva con el número generado
  function numeroAleatorio() {
    return new Promise((resolve) => {
      const numeroAle =Math.random() * 6 + 1;
      const numeroRed =Math.floor(numeroAle);
      setTimeout(() => {
        resolve(numeroRed);
      });
    }
  ); 
} 

numeroAleatorio()
.then((numeroRed) => {
  console.log(numeroRed);
});
