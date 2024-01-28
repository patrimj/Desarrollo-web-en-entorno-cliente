//Pruebas de si contiene letra de si contiene la letra a
let cadenaTiene =/a$/ //compara caracter por caracter $ en toda la palabra el dolar obliga a que sean todos a, exacto
console.log(cadenaTiene.exec('aa')) // true
console.log(cadenaTiene.exec('aab'))// devuelve una matriz
console.log(cadenaTiene.test('saa'))// true // test te duevekve true or false


//Valida que los dos primeros digitos sean numeros del 0 al 9 y dos letras en el rango indicado
let cadena = /[0-9]{2}[B-DF-HJ]{2}/
console.log(cadena.test('0909JSDAA'))
console.log(cadena.exec('0A909JDAA'))
console.log(cadena.test('0909J8D'))


//le ponemos el simbolo del $ al final con esto le estamos restringiendo a que valide solo lo escrito correcto
//si hay cadena de texto posterior da false en caso de test o null en caso de exec
let cadena1 = /[0-9]{2}[B-DF-HJ]{2}$/
console.log(cadena1.test('0909JSDAA'))
console.log(cadena1.exec('0A909JDAA'))
console.log(cadena1.test('0909J8D'))
let cadena1 = /[0-9]{2}[B-DF-HJ]{2}/ //sin dolar
console.log(cadena1.test('09BBBA'))//encuentta las dos primeras letras BB y aunq haya mas letras  saldra true, con dolar solo puede haber 2 letras, si hya mas para y false tiene que haber 2 exxacto

//Valida con el simbolo ^ el primer digito que este contenido en el rango
//con el +$ valida los siguientes digitos
let cadena2 = /^[A-Za-z0-9_]+$/
console.log(cadena2.exec('manzana'))
console.log(cadena2.test('$manzana'))
console.log(cadena2.test('manzana%'))

//[\w] equivale a [A-Za-z0-9_]
let cadena3 = /^[\w]+$/
console.log(cadena3.exec('$manzana'))
console.log(cadena3.test('$manzana'))
console.log(cadena3.test('manzana%'))

//[\W] equivale a negar [A-Za-z0-9_]
let cadena4 = /^[\W]+$/
console.log(cadena4.exec('%%&'))
console.log(cadena4.test('%a'))
console.log(cadena4.test('%&_'))

//[^\w%] con el simbolo ^ despues de los corchetes negamos es decir con esa expresion 
//no estan permitidos los siguientes caracteres A-Za-z0-9_% 
let cadena5 = /^[^\w%]+$/
console.log(cadena5.exec('%%'))
console.log(cadena5.test('mm'))
console.log(cadena5.test('manzana%'))

//indica la posibilidad de que este contenida una palabra
let cadena6 = /verde|roja/
console.log(cadena6.exec('verde manzana'))
console.log(cadena6.test('Manzana rojaa'))
console.log(cadena6.test('Manzana roja'))
console.log(cadena6.test('roja kk'))

//Formato ddd/AAAXX
let cadena7 = /[0-9]{3}(\/)[A-Z]{3,5}/
console.log(cadena7.exec('000/AAA'))
console.log(cadena7.exec('000/2AA'))
console.log(cadena7.test('000/AAAAAA'))// true porqie de 3,5 se cumple y no esta el dolar que obligue
console.log(cadena7.test('000/2AA'))

//Formato ddd/AAAXX
let cadena8 = /[0-9]{3}(\/)[A-Z]{3,5}$/
console.log(cadena8.exec('000/AAA'))
console.log(cadena8.exec('000/2AA'))
console.log(cadena8.test('000/AAAAAA'))
console.log(cadena8.test('000/2AA'))

// \d numeros \D niega que sean numeros
//Posibilidad ?
let cadenaPosibilidad= /^-?[\d]+$/ // puede ser positivo o negativo
console.log(cadenaPosibilidad.exec('-9999'))
console.log(cadenaPosibilidad.exec('9999'))

//Formato twitter
let cadenaTwitter = /[@]{1}[\w]{3,15}$/
console.log(cadenaTwitter.exec('@fran'))
console.log(cadenaTwitter.exec('@fran-'))





