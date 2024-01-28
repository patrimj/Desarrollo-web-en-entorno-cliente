// Crear elementos de la interfaz
let inputId = document.createElement('input');
let searchButton = document.createElement('button');
let textAreaPost = document.createElement('textarea');
let textAreaComments = document.createElement('textarea');
let form = document.createElement('form');
let modifyButton = document.createElement('button');
modifyButton.disabled = true;

// Función de búsqueda
searchButton.addEventListener('click', async () => {
  let postId = inputId.value;
  let postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  let post = await postResponse.json();
  if (post) {
    textAreaPost.value = JSON.stringify(post);
    modifyButton.disabled = false;
    let commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    let comments = await commentsResponse.json();
    textAreaComments.value = JSON.stringify(comments);
  } else {
    textAreaPost.value = 'El post no existe';
  }
});

// Función de modificación
modifyButton.addEventListener('click', async () => {
  let newPostData = form.value; // Aquí deberías recoger los valores del formulario
  if (newPostData !== textAreaPost.value) {
    let modifyResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${inputId.value}`, {
      method: 'PUT',
      body: JSON.stringify(newPostData)
    });
    let modifyResult = await modifyResponse.json();
    // Mostrar el resultado de la modificación
  } else {
    // Mostrar mensaje de error
  }
});