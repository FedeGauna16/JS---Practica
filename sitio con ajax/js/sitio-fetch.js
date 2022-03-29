console.log("hola");

const d = document,
$main = d.querySelector("main");

const mostrarHTML = async (url) => {
   try {
   let res = await fetch(url),
       json = JSON.stringify(res);
      
      if(!res.ok) throw {status: res.status, statusText: res.statusText};

      console.log(res);

     $main.innerHTML = res.headers.get("Content-type")

   } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      $main.innerHTML = `Error ${err.status}: ${message}`;
   }
}

d.addEventListener("DOMContentLoaded", e => {
   mostrarHTML({
      url: "views/home.html",
      headers: {
         "Content-type": "text/html; charset=utf-8"
      },
      body: $main
   });
});

d.addEventListener("click", e => {
   console.log(e.target);
   e.preventDefault();
   if(e.target.matches(".menu a")){
      console.log("a");
      mostrarHTML({
      url: e.target.href
   });
   }
})
