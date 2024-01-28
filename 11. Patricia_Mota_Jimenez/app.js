const api= "https://jsonplaceholder.typicode.com/";

let id = document.getElementById('id');
let buscarBtn = document.getElementById('buscarBtn');

let testareaPost = document.getElementById('post-info');
let testareaComentario = document.getElementById('post-comentarios');

let formulario = document.getElementById ('modificador');
let userId = document.getElementById('userId');
let title = document.getElementById('title');
let body = document.getElementById('body');
let testareamodificado = document.getElementById('post-modificado');
let msg = document.getElementById('msg')

let modificarBtn = document.getElementById('modificar');

modificarBtn.disable= true

buscarBtn.addEventListener('click', async () => {
    let idValue = id.value;
    let postResponse = await fetch (api + 'posts/' + idValue);
    let post = await postResponse.json();


    if (post){
        testareaPost.value = JSON.stringify(post) 
        modificarBtn.disable = false

        let comentarioResponde = await fetch (api + 'comments?postId=' + idValue)
        let comment= await comentarioResponde.json()

        testareaComentario.value = JSON.stringify(comment)
        testareaComentario.value = JSON.stringify(comment)
    }else{
        testareaPost.value = 'El post no existe'
    }

});

modificarBtn.addEventListener('click', async () => {
    let nuevoPost = formulario.value

    if (nuevoPost != testareaPost.value){

        let modificarResponse = await fetch (api + 'posts/' + id.value, {
            method: 'PUT',
            body: JSON.stringify(nuevoPost),
            headers: {'Content-type': 'application/json'}
        });
        let modificado = await modificarResponse.json();
        testareamodificado.value = JSON.stringify(modificado) 
    }else{
        msg.value = 'No se ha realizado ningun cambio' 
    }

});    



    


