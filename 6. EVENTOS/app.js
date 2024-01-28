/*
Crear una pantalla html con los siguientes campos:

IBAN. Compuesto de dos campos: Uno con 4 caracteres y otro con 20
Tarjeta.
	Número tarjeta: 16 dígitos
	CVV: 3 dígitos
 Tener un botón de Guardar con los siguentes requisitos:
	Se comprobará que los primeros campos del IBAN sean 4 caracteres y solo se admitirán dos valores válidos: ES76 y ES78 si no es ningun de ellos se coloreará de color rojo y se mostrá un mensaje en
	en la parte inferior de que IBAN inválido
	Se comprobará que el número de cuenta es correcto de longitud
	Se comprobará de que el número de tarjeta tiene la longitud correcta y que solo contiene número si falla se mostrará el texto de que es incorrecto
	Se comprobará que el CVV tiene la longitud correcta y que sean solo números.

Otros requisitos:
Cuando se cambien el número de tarjeta automáticamente si el CVV esta relleno se limpiará el campo.

*/

const guardar = document.getElementById('guardar');
const iban4 = document.getElementById('iban4');
const iban20 = document.getElementById('iban20');
const numeroTarjeta = document.getElementById('numeroTarjeta');
const cvv = document.getElementById('cvv');
const msgIban = document.getElementById('msgIban');
const msgCuenta = document.getElementById('msgCuenta');
const msgNum = document.getElementById('msgNum');
const msgCvv = document.getElementById('msgCvv');
const msg = document.getElementById('msg');

guardar.addEventListener('click', function() {
        
    // Se comprobará que los primeros campos del IBAN sean 4 caracteres y solo se admitirán dos valores válidos: ES76 y ES78 si no es ningun de ellos se coloreará de color rojo y se mostrá un mensaje en la parte inferior de que IBAN inválido
    if (!(/^[A-Z0-9]{4}$/.test(iban4.value) && /^(ES76|ES78)$/.test(iban4.value)))  {
        iban4.style.borderColor = 'red';
        msgIban.textContent = 'IBAN inválido';  
    }else {
        iban4.style.borderColor = 'green';
        msgIban.textContent = '';  
    }
    // Se comprobará que el número de cuenta es correcto de longitud
    if (!/^\d{20}$/.test(iban20.value)) {
        iban20.style.borderColor = 'red';
        msgCuenta.textContent = 'Número inválido';
    }else{
        iban20.style.borderColor = 'green';
        msgCuenta.textContent = '';
    }
    //Se comprobará de que el número de tarjeta tiene la longitud correcta y que solo contiene número si falla se mostrará el texto de que es incorrecto
    if (!/^\d{16}$/.test(numeroTarjeta.value)) {
        numeroTarjeta.style.borderColor = 'red';
        msgNum.textContent = 'Número de tarjeta inválido';
    }else{
        numeroTarjeta.style.borderColor = 'green';
        msgNum.textContent = '';
    }
    // Se comprobará que el CVV tiene la longitud correcta y que sean solo números.
    if (!/^\d{3}$/.test(cvv.value)) {
        cvv.style.borderColor = 'red';
        msgCvv.textContent = 'CVV inválido';
    }else{
        cvv.style.borderColor = 'green';
        msgCvv.textContent = '';
    }

    // Cuando se cambien el número de tarjeta automáticamente si el CVV esta relleno se limpiará el campo.
    numeroTarjeta.addEventListener('input', function() {
        cvv.value = '';
    });
    comprobar ()
})


function comprobar (){
    if (
        iban4.style.borderColor === 'green' &&
        iban20.style.borderColor === 'green' &&
        numeroTarjeta.style.borderColor === 'green' &&
        cvv.style.borderColor === 'green'){

        msg.textContent = '¡tarjeta guardada correctamente!'
    }else{
        msg.textContent = ''
    }
}


