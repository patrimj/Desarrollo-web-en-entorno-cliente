//Patricia Mota

// 1) Realiza una expresión regular para comprobar un número entero positivo
let positivo = /^[0-9]*$/
console.log(positivo.test('123')) //true
console.log(positivo.test('-987')) //false

// 2) Realiza una expresión regular para comprobar un número entero negativo
let negativo = /^-\d+$/
console.log(negativo.test('0909'))//false
console.log(negativo.test('-987'))//True

// 3) Realiza una expresión regular para comprobar una matrícula de coche española [0-9]{4}[B-HJ-NPR-TV-Z]
let matricula = /^[0-9]{4}[B-HJ-NPR-TV-Z]{3}$/
console.log(matricula.test('0909BBB'))
console.log(matricula.test('A987BBB'))

// 4) Realiza una expresión regular para comprobar un dni (no validar si la letra es correcta solo si está bien formado)
let dni = /^[0-9]{8}[A-Z]{1}$/
console.log(dni.test('05985679A'))
console.log(dni.test('A05985679'))


// 5) Realiza una expresión regular para comprobar si un número es binario
let binario = /[01]+$/
console.log(binario.test('01'))
console.log(binario.test('9'))

// 6) Realiza una expresión regular para comprobar un número octal
let octal = /^0[0-7]+$/
console.log(octal.test('06'))
console.log(octal.test('23'))

// 7) Realiza una expresión regular para comprobar si un número es hexadecimal
let hexadecimal = /^[0-9A-Fa-f]+$/
console.log(octal.test('G'))
console.log(octal.test('7652F'))

// 8) Realizar una expresión regular para validar un usuario de discord el formato que tiene que tener es 
// un nombre que puede contener letras minúsculas y numero pero no _ con una longitud mínima de 5 y máximo 15. Una almohadilla y un número de longitud 6.
let user = /^[A-Za-z]{5,15}#[0-9]{6}$/
console.log(user.test('patrimj#878456'))
console.log(user.test('patri7636'))

// 9) Realizar un método js que reciba un String y mediante expresión regular comprobar que la primera letra sea mayúscula 
// y tenga una longitud entre 3 y 20. Si la primera letra no es mayúscula devolver el string con la primera en mayus.
let cad  = /^[A-Z][a-zA-Z]{3,20}$/;

function validarCadena(cadena) {    
    if (cad.test(cadena)) {
      return cadena;
    } else {
      return cadena.charAt(0).toUpperCase() + cadena.slice(1); // seelec todos los caracteres desde el segundo carácter (1) hasta el final 
    }
  }
  
  console.log(validarCadena('jwkdfsdnfs')); 
  console.log(validarCadena('JAJJSJFS')); 
  
// 10) Realizar una expresión que valide una fecha, pero con algunas excepciones, que los días 
// y los meses sean correctos solo que este bien formado con el siguiente formato: dd/mm/aaaa

let fecha  = /^0[1-9]{2}|1[0-9]{2}|2[0-9]{2}|3[01]{2}(\/)0[1-9]|1[0-2]{2}\/[1-9]{4}$/;
console.log(fecha.test('20/11/2000'))
console.log(fecha.test('32/12/4444'))
console.log(fecha.test('A2/1D/444'))
console.log(fecha.test('20/11/20'))

