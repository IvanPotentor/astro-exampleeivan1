import"./Modal.astro_astro_type_script_index_0_lang.6bf76077.js";import"https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/datepicker.min.js";import"./hoisted.d264f88a.js";const o=document.querySelector("#form");async function r(t){t.preventDefault();try{const t=new FormData(this);(await fetch(this.action,{method:this.method,body:t,headers:{Accept:"application/json"}})).ok&&(this.reset(),Swal.fire({title:"Thank you for contacting us!",text:"We will confirm your appointment shortly.",imageUrl:"/message.jpg",imageWidth:400,imageHeight:200,imageAlt:"Custom image"}))}catch(t){console.error("Error en la solicitud:",t),alert("Error al enviar el formulario")}}o?.addEventListener("submit",r);