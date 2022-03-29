console.log("ae");

document.addEventListener("DOMContentLoaded", e => {
const incluirHTML = (el, url) => {
   const xhr = new XMLHttpRequest();

   xhr.addEventListener("readystatechange", e => {
      if(xhr.readyState !== 4) return;

      if(xhr.status >= 200 && xhr.status < 300){
         el.outerHTML = xhr.responseText;
      } else {
         let message = xhr.statusText || "Ocurrió un error";
         el.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`;
      }

   });
   xhr.open("GET", url);
   xhr.setRequestHeader("Content-Type", "text/html; charset=utf-8");
   xhr.send();
};

document.querySelectorAll("[data-include]").forEach(el => incluirHTML(el, el.getAttribute("data-include")));

});