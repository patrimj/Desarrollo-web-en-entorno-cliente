document.getElementById('alta').addEventListener('click', function() {
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var fechaAlta = document.getElementById('fechaAlta').value;
    var fechaBaja = document.getElementById('fechaBaja').value;
    var oculto = document.getElementById('ocultar');
    document.getElementById('estado').value = 'No Activo';

    if (nombre && apellidos && fechaAlta) {
        document.getElementById('fechaBaja').disabled = false;
        document.getElementById('estado').value = 'Activo';
        document.getElementById('alta').disabled = true;
        document.getElementById('modificar').disabled = false;
        oculto.hidden = false;
    }else {
        alert('rellena los datos')
    }
    
});

document.getElementById('modificar').addEventListener('click', function() {
    var fechaAlta = document.getElementById('fechaAlta').value;
    var fechaBaja = document.getElementById('fechaBaja').value;

    var fechaAlta = new Date(fechaAlta);
    var fechaBaja = new Date(fechaBaja);

    if ( fechaAlta < fechaBaja){
        document.getElementById('nombre').disabled = false;
        document.getElementById('apellidos').disabled = false;
        document.getElementById('estado').value = 'No activo';
        document.getElementById('fechaAlta').disabled = false;
        document.getElementById('fechaBaja').disabled = false;
        alert ('Datos modificados')
    }else{
        alert('La fecha de baja debe ser despues de la fecha de alta');
        document.getElementById('fechaBaja').value = '';
    }
});

