const url = 'http://127.0.0.1:9090/api/usuarios';

async function obtenerPersona(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);    

    }catch(error){
        console.error(error);
    }
}

async function crearPersona(persona){
    try{
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(persona),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error(error);
    }
}

async function modificarPersona(persona){
    try{
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(persona),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error(error);
    }
}

async function eliminarPersona(dni){
    try{
        const response = await fetch(url, {
            method: 'DELETE',
            body: JSON.stringify(dni),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error(error);
    }
}
