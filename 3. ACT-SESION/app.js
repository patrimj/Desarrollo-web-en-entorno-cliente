    // CÓDIGO PARA WEB DE INICIO DE SESIÓN EN JAVASCRIPT

//el email y contraseña fijos
var email = 'usuario@gmail.com'
var pwd = 'admin123'


//Función para verificar el correo electronico con cierto requisitos
function validarCorreo(){

    var nombre = document.getElementById('nombre').value;
    let msg = "";
    
        if (!nombre.includes('@')) { // el correo ingresado debe incluir un @
            msg = 'El campo correo debe contener al menos la letra @';
        }
    
        if (nombre.charAt(0) == '@') { // el correo no puede empezar con un @
            msg = 'El correo no puede empezar por @';
        }
    
        var salir = false; 
        for (let i = nombre.length - 4; i < nombre.length - 1 && !salir; i++) {
            if (nombre.charAt(i) == '@') {
                msg += '\nEl correo está mal formado, no es un dominio conocido';
                salir = true;
            }
        }
    
        return msg;
    }



function ContrasenayUser() {
    // saber los valores que ha ingresado el user
    email = document.getElementById("nombre").value;
    password = document.getElementById("password").value;

    //  mensajes de validación
    let msg = ""; //se llenara despues
    
        //el user tiene que introducir el email y contraseña sino nada
        if (nombre !== email && password !== pwd) {   
            msg + "\nDatos incorrectos, intentalo de nuevo"
        }
        // 1.1.1: El campo correo y la contraseña no pueden estar vacíos cuando se pulsa el botón Entrar.
        if (email === "" || password === "") {
            msg += "\nNo se admiten campos vacios";
        }
        //  1.1.2: El campo contraseña debe tener al menos 8 caracteres.
        if (password.length < 8) {
            msg += "\nLa contraseña debe superar los 8 caracteres";
        }
        msg += validarCorreo();
            
        // si hay msg mostrarlos
        if (msg !== "") {
            alert(msg);
        } else {  
            window.location.href = "index.html";
        }
}

/*profesor
function guardar (){
    var validado = false
    validado = validar()
    var msg = ''
}
function mensajeError (campo,min,max,msg, nombre){
    if (campo.lenght < min){
        msg= msg + 'tiene menos de', min , 'caracteres el campo', nombre
    }
    if (campo.lenght > max){
        msg= msg + 'tiene mas de', max , 'caracteres'
    }
}

for (let i=email.lenght -3; i<email.lenght -1; i++){
    if(email.charAt(i) == '@'){
        msg += "El campo correo no puede tener '@' en las tres ultimas letras";
    }
}
*/

function guardar() {//para guardar los datos del user
    const nombre = document.getElementById('nombre').value;
    const apellido1 = document.getElementById('apellido1').value;
    const apellido2 = document.getElementById('apellido2').value;

    let msg = ""; 

    // 2.1.1: El nombre debe contener entre 3 y 30 caracteres
    if (nombre.length < 3 || nombre.length > 30) {
        msg += "\nEl nombre debe contener entre 3 y 30 caracteres";
    }

    //  2.1.2: El primer apellido debe contener entre 2 y 30 caracteres
    if (apellido1.length < 2 || apellido1.length > 30) {
        msg += "\nEl primer apellido debe contener entre 2 y 30 caractere";
    }

    //  2.1.3: El segundo apellido debe contener entre 2 y 30 caracteres.
    if (apellido2.length < 2 || apellido2.length > 30) {
        msg += "\nEl segundo apellido debe contener entre 2 y 30 caracteres";
    }
    
    //2.1.4 Que el campo fecha de nacimiento tiene que tener el siguiente formato dd/mm/AAAA si no se informará del error
    msg += validarNacimiento();

    //  2.1.5: El campo DNI tiene que validarse para que sea correcto
    msg+= validarDNI()
    
    msg+= "\nIniciando sesión..."

    if (msg !== "") {
        alert(msg); 
    } 
    crearPersona()
    
}
function crearPersona() {
    const nombre = document.getElementById('nombre').value;
    const apellido1 = document.getElementById('apellido1').value;
    const apellido2 = document.getElementById('apellido2').value;
    const dni = document.getElementById('dni').value;
    const nacimiento = document.getElementById('nacimiento').value;

    const usuario = {
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        dni: dni,
        nacimiento: nacimiento
    };

    alert("Usuario registrado"); 

    limpiar ();
}

function validarNacimiento() {
    const fechaNac = document.getElementById('nacimiento').value; 
    let msg = "";
    
    const formatoFecha = /^(\d{2})\/(\d{2})\/(\d{4})$/;// formato chatgpt devolvera true
    const anioReal = new Date().getFullYear(); // sacamos el año actual
    
    if (!formatoFecha.test(fechaNac)) {
        msg += "\nEl campo fecha de nacimiento debe tener el  formato dd/mm/aaaa";
    } else {
        // Separar el día, el mes y el año de la fecha ingresada.
        const formato = fechaNac.split('/');
        const dia = formato[0];
        const mes = formato[1];
        const anio = formato[2];

        if (dia < 1 || dia > 31) {
            msg += "\nEl día debe ser entre 1 y 31";
        }

        if (mes < 1 || mes > 12) {
            msg += "\nEl mes de nacimiento debe estar en el rango de 1 a 12";
        }

        if (anio < 1900 || anio > anioReal) {
            msg += "\nAño invalido";
        }
    }

    if (msg !== "") {
        alert(msg);
    }

    /*
    const Fecha = /^\d{2}\/\d{2}\/\d{4}$/;
    return regexFecha.test(fecha);--> chatgpt*/
}

/*
Para validar el dni se utilizan las siguientes letras TRWAGMYFPDXBNJZSQVHLCKE. 
Para validad si el dni introducido el correcto es el resto del número introducido entre 23.
El resultado mira la posición de la letra en texto del conjunto de letras, y si es la introducida por el usuario el dni es correcto.
Tened en cuenta que el dni tiene que tener 8 números si no el formato es incorrecto de primeras.*/

function validarDNI() {
    const dniUser = document.getElementById('dni').value;
    let msg = "";
    // El DNI tiene 9 
    if (dniUser.length !== 9) {    // El DNI tiene 9 
        msg += "\n DNI incorrecto"
    }else{
        const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
        const numeros = dniUser.substring(0, 8);// separo los numeros de la letra
        const letra = dniUser.charAt(8);// saco la letra
        const numero = parseInt(numeros, 10); 
        const resto = numero % 23; // el resto es la posicion de la letra
        const letrafinal = letras[resto];// en la posicion que es el numero que da el resto sacamos la letra
    
        if (letra.toUpperCase() !== letrafinal){
            msg += "\n DNI incorrecto";
        } else {
            return true; }
    }
    
    if (msg !== "") {
        alert(msg);
    }
    return false;
}
//charAt(indice) --> devuelve el caracter de esa posicion
//parseInt(string, base) --> convierte una cadena en un numero entero en base 10

function limpiar (){
    document.getElementById('nombre').value = '';
    document.getElementById('apellido1').value = '';
    document.getElementById('apellido2').value = '';
    document.getElementById('dni').value = '';
    document.getElementById('nacimiento').value = '';
}

/* TEORÍA - PRÁCTICA - EJEMPLOS (CHATGPT)

.INCLUDES --> se utiliza para verificar si una cadena de texto contiene otra cadena específica
    const frase = "Hola, ¿cómo estás?";
    const palabra = "cómo";

        if (frase.includes(palabra)) {
             console.log("La palabra 'cómo' está en la frase.");
        } else {
            console.log("La palabra 'cómo' no está en la frase.");
        }
.INDEXOF --> se utiliza para encontrar la posición de la primera ocurrencia de una subcadena dentro de una cadena de texto,
            retorna el índice (posición) de la última aparición de la subcadena o -1 si la subcadena no se encuentra en la cadena original.

    const frase = "Hola, ¿cómo estás?";
    const palabra = "cómo";
     const indice = frase.indexOf(palabra);

        if (indice !== -1) {
            console.log(`La palabra '${palabra}' comienza en el índice ${indice}.`);
        } else {
            console.log(`La palabra '${palabra}' no se encontró en la frase.`);
        }

.LASTINDEXOF() --> se utiliza para encontrar la posición de la última ocurrencia de una subcadena dentro de una cadena de texto,
retorna el índice (posición) de la última aparición de la subcadena o -1 si la subcadena no se encuentra en la cadena original.

    const frase = "Este es un ejemplo de una dirección de correo: usuario@gmail.com. ¿Tienes otro correo?";
    const ultimoIndiceArroba = frase.lastIndexOf("@");

        if (ultimoIndiceArroba !== -1) {
            console.log(`La última aparición de "@" comienza en el índice ${ultimoIndiceArroba}.`);
        } else {
            console.log(`No se encontró el símbolo "@".`);
        }
function validarEmail(){
    var email= document.getElementById('user').value //user@gmail.com
    email.charAt(0)
    var dd = email.split('') // dd= ['u','s']
}        

*/
