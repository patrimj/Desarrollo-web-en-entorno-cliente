let re = /ab+c/ // buscara la palabra ab y la siguiente c
let reg = new RegExp("ab+c");
console.log(re)
console.log(reg)
var myArray = /d(b+)d/g.exec("dbbbbd");
console.log(myArray)
/*
let regmul = new RegExp("era*"); //buscar una palabra en un texto plano
let multi = 'eres un era'
console.log(regmul.exec(multi))
console.log('hola bb')
let regsum = /sss+/
let suma = 'eres un bsssh'
var myArrays = regsum.exec(suma)
console.log(myArrays)

let neg = /verde|roja/
console.log(neg.exec('Manzana verde')) // sacará verde
let cadena = /^[A-Za-z0-9_]+$/
console.log(cadena.exec('$manzana')) // false porque no empeiza por ninguna letra numero guion sino que empiexa por $ --> +$ comprueba cada caracter

let binario = /^[0-1]{8}[A-Z]{2}$/
console.log(binario.exec('01010110AA'))
 */

//EXPRESIONES REGULARES

/*
\d: Coincide con cualquier dígito decimal (0 al 9).

\D: Coincide con cualquier carácter que no sea un dígito decimal.

\w: Coincide con cualquier carácter alfanumérico (letras y dígitos) y el guion bajo (_).

\W: Coincide con cualquier carácter que no sea alfanumérico.

\s: Coincide con cualquier carácter de espacio en blanco (espacio, tabulación, salto de línea, etc.).

\S: Coincide con cualquier carácter que no sea un espacio en blanco.

.: Coincide con cualquier carácter excepto un salto de línea.

\b: Coincide con el límite de una palabra (inicio o fin de una palabra).

^: Coincide con el inicio de una cadena.

$: Coincide con el final de una cadena.

[ ]: Define un conjunto de caracteres. Por ejemplo, [aeiou] coincide con cualquiera de las vocales.

[^ ]: Define un conjunto de caracteres negado. Por ejemplo, [^0-9] coincide con cualquier carácter que no sea un dígito.

( ): Agrupa elementos en una expresión regular y permite aplicar operadores a ese grupo.

|: Representa una alternativa. Por ejemplo, cat|dog coincidirá con "cat" o "dog".

*: Coincide con cero o más repeticiones del elemento anterior. Por ejemplo, \d* coincide con cualquier cantidad de dígitos.

+: Coincide con una o más repeticiones del elemento anterior. Por ejemplo, \d+ coincide con al menos un dígito.

?: Coincide con cero o una repetición del elemento anterior. Por ejemplo, \d? coincide con un dígito opcional.

{n}: Coincide exactamente con n repeticiones del elemento anterior. Por ejemplo, \d{3} coincide con tres dígitos.

{n, m}: Coincide con entre n y m repeticiones del elemento anterior. Por ejemplo, \d{2,4} coincide con dos, tres o cuatro dígitos.

(x): Captura el texto coincidente en un grupo de captura para su posterior uso.

-?: El guion - es opcional debido al ?. Esto permite que el número sea negativo, pero no lo requiere. Si está presente, significa que el número es negativo.
*/


/ //dice que es una expresión regular
^//primer caracter comprueba --> Representa el inicio de la cadena.
{longitud}
+$ // caracter uno por uno 
[0-9] //de 0 a 9
let matricula = /^[0-9]{4}[A-Z]{2}+$/
console.log(matricula.test('0101AA')) true
console.log(matricula.test('0191A2')) false
\w //equivale a [A-Za-z0-9_]
\d //equivale a 


