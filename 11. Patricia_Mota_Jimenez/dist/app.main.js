(()=>{const e="https://jsonplaceholder.typicode.com/";let t=document.getElementById("id"),n=document.getElementById("buscarBtn"),o=document.getElementById("post-info"),d=document.getElementById("post-comentarios"),a=document.getElementById("modificador"),i=(document.getElementById("userId"),document.getElementById("title"),document.getElementById("body"),document.getElementById("post-modificado")),l=document.getElementById("msg"),s=document.getElementById("modificar");s.disable=!0,n.addEventListener("click",(async()=>{let n=t.value,a=await fetch(e+"posts/"+n),i=await a.json();if(i){o.value=JSON.stringify(i),s.disable=!1;let t=await fetch(e+"comments?postId="+n),a=await t.json();d.value=JSON.stringify(a),d.value=JSON.stringify(a)}else o.value="El post no existe"})),s.addEventListener("click",(async()=>{let n=a.value;if(n!=o.value){let o=await fetch(e+"posts/"+t.value,{method:"PUT",body:JSON.stringify(n),headers:{"Content-type":"application/json"}}),d=await o.json();i.value=JSON.stringify(d)}else l.value="No se ha realizado ningun cambio"}))})();