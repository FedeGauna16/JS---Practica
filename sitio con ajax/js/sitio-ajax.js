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
   xhr.open("GET", url);
   xhr.setRequestHeader("Content-Type", "text/html; charset=utf-8");
   xhr.send();
}

d.addEventListener("DOMContentLoaded", e => {
   mostrarHTML({
      url: "views/home.html",
      success: (html) => $main.innerHTML = html,
      error: (err) => $main.innerHTML = `<h1>${err}</h1>`
   });
});

d.addEventListener("click", e => {
   console.log(e.target);
   e.preventDefault();
   if(e.target.matches(".menu a")){
      console.log("a");
      mostrarHTML({
      url: e.target.href,
      success: (html) => $main.innerHTML = html,
      error: (err) => $main.innerHTML = `<h1>${err}</h1>`
   });
   }
})
