(()=>{"use strict";class a{async getFrasePorCategoria(a){const t=`https://api.chucknorris.io/jokes/random?category=${a}`,e=await fetch(t);return(await e.json()).value}async getFraseRandom(){const a=await fetch("https://api.chucknorris.io/jokes/random");return(await a.json()).value}}const t=new class{constructor(){this.api=new a,this.urlParams=new URLSearchParams(window.location.search),this.categoria=this.urlParams.get("categoria")}async mostrarFrasePorCategoria(){if(this.categoria){const a=await this.api.getFrasePorCategoria(this.categoria);document.getElementById("frase").textContent=a}else this.mostrarFraseRandom()}async mostrarFraseRandom(){const a=await this.api.getFraseRandom();document.getElementById("frase").textContent=a}};document.addEventListener("DOMContentLoaded",(()=>{t.mostrarFrasePorCategoria()}))})();