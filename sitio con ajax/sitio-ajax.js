console.log("hola");

const d = document,
$main = d.querySelector("main");

const mostrarHTML = options => {
   let {url, success, error} = options;
   const xhr = new XMLHttpRequest();

   xhr.addEventListener("readystatechange", e => {
      if(xhr.readyState !== 4) return;

      if(xhr.status >= 200 && xhr.status < 300){
         let html = xhr.responseText;
         success(html);
      } else {
         let message = xhr.statusText || "Ocurrió un error";
         error(`Error ${xhr.status}: ${message}`);
      }
   });
}